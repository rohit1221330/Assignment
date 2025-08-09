import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const ProductCard = ({ item, onPress }) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind('bg-white rounded-xl shadow p-4 mb-4 flex-row')}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={tailwind('w-20 h-20 rounded-md mr-4')}
        resizeMode="cover"
      />
      <View style={tailwind('flex-1 justify-center')}>
        <Text style={tailwind('text-base font-medium text-gray-800')}>
          {item.title}
        </Text>
        <Text style={tailwind('text-pink-500 font-semibold mt-1')}>
          ₹ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
