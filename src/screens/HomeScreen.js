import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import ProductCard from '../components/ProductCard';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
const { theme } = useApp(); // import it


const HomeScreen = () => {

    const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
    const tailwind = useTailwind();
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await api.get('/products');
            // Just take first 10 products to mimic cosmetics
            setProducts(res.data.products.slice(0, 10));
        } catch (err) {
            console.error('API Error:', err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <View style={tailwind('flex-1 justify-center items-center')}>
                <ActivityIndicator size="large" color="#ec4899" />
                <Text style={tailwind('mt-4 text-gray-600')}>Loading products...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={tailwind(`flex-1 ${bgColor} px-4 pt-4`)}>
            <Text style={tailwind(`text-2xl font-bold mb-4 ${textColor}`)}>
                Popular Cosmetics
            </Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        item={item}
                        onPress={() =>
                            navigation.navigate('ProductDetails', { product: item })
                        }
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
