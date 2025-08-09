import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';

const LoginScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tailwind('flex-1 bg-white justify-center px-6')}
    >
      <Text style={tailwind('text-2xl font-bold text-center mb-8')}>
        Welcome Back 👋
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={tailwind(
          'border border-gray-300 rounded-md px-4 py-3 mb-4 text-base'
        )}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={tailwind(
          'border border-gray-300 rounded-md px-4 py-3 mb-4 text-base'
        )}
        secureTextEntry
      />

      <TouchableOpacity
        style={tailwind('bg-pink-500 py-3 rounded-md mb-4')}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={tailwind('text-white text-center font-medium text-base')}>
          Login
        </Text>
      </TouchableOpacity>

      {/* Optional: Social Buttons (UI only) */}
      <View style={tailwind('flex-row justify-center space-x-4 mb-6')}>
        <TouchableOpacity style={tailwind('bg-gray-100 px-4 py-2 rounded')}>
          <Text style={tailwind('text-gray-700')}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('bg-gray-100 px-4 py-2 rounded')}>
          <Text style={tailwind('text-gray-700')}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('bg-gray-100 px-4 py-2 rounded')}>
          <Text style={tailwind('text-gray-700')}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={tailwind('flex-row justify-center')}>
        <Text style={tailwind('text-gray-600 mr-1')}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={tailwind('text-pink-500 font-medium')}>
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
