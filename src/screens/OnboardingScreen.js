import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
import logo from '../assets/logo.png'; // make sure logo exists

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 bg-white justify-center items-center px-6')}>
      <Image
        source={logo}
        style={tailwind('w-40 h-40 mb-8')}
        resizeMode="contain"
      />
      <Text style={tailwind('text-xl font-semibold text-gray-800 mb-6 text-center')}>
        Your Beauty, Delivered
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={tailwind('bg-pink-500 px-6 py-3 rounded-full shadow-md')}
      >
        <Text style={tailwind('text-white text-base font-medium')}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
