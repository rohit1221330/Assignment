import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useRoute } from '@react-navigation/native';
import { useApp } from '../context/AppContext'; // ADD this at top


const ProductDetailsScreen = () => {
    const tailwind = useTailwind();
    const route = useRoute();
    const { product } = route.params;

    const { addToCart } = useApp();

    return (
        <ScrollView style={tailwind('bg-white flex-1')}>
            <Image
                source={{ uri: product.thumbnail }}
                style={tailwind('w-full h-80')}
                resizeMode="cover"
            />

            <View style={tailwind('p-4')}>
                <Text style={tailwind('text-2xl font-bold text-gray-900')}>
                    {product.title}
                </Text>

                <Text style={tailwind('text-pink-500 font-semibold text-lg mt-2')}>
                    ₹ {product.price}
                </Text>

                <Text style={tailwind('text-gray-600 mt-4')}>
                    {product.description}
                </Text>

                <Text style={tailwind('mt-4 text-yellow-500 font-medium')}>
                    ⭐ {product.rating} / 5
                </Text>

                <TouchableOpacity
                    style={tailwind('bg-pink-500 py-3 rounded-full mt-6 mb-4 shadow-md')}
                    onPress={() => {
                        addToCart(product);
                        alert('Added to Bag!');
                    }}
                >
                    <Text style={tailwind('text-white text-center font-medium')}>
                        Add to Bag
                    </Text>
                </TouchableOpacity>

                {/* Highlights */}
                <View style={tailwind('mt-6')}>
                    <Text style={tailwind('text-lg font-semibold mb-2')}>
                        Highlights
                    </Text>
                    <View style={tailwind('space-y-1')}>
                        <Text style={tailwind('text-gray-700')}>📏 Dimensions: 5x5x10 cm</Text>
                        <Text style={tailwind('text-gray-700')}>🛡️ Warranty: 6 months</Text>
                        <Text style={tailwind('text-gray-700')}>🚚 Shipping: Free & Fast</Text>
                    </View>
                </View>

                {/* Mock Reviews */}
                <View style={tailwind('mt-8')}>
                    <Text style={tailwind('text-lg font-semibold mb-2')}>
                        Customer Reviews
                    </Text>
                    <View style={tailwind('bg-gray-100 rounded-md p-3 mb-2')}>
                        <Text style={tailwind('text-gray-800 font-medium')}>
                            Priya Sharma
                        </Text>
                        <Text style={tailwind('text-gray-600')}>
                            Loved the product! Quality is great and delivery was super quick.
                        </Text>
                    </View>
                    <View style={tailwind('bg-gray-100 rounded-md p-3 mb-2')}>
                        <Text style={tailwind('text-gray-800 font-medium')}>
                            Anjali Mehta
                        </Text>
                        <Text style={tailwind('text-gray-600')}>
                            The packaging and product both were impressive. Will buy again.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProductDetailsScreen;
