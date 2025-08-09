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

const RegisterScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tailwind('flex-1 bg-white justify-center px-6')}
    >
      <Text style={tailwind('text-2xl font-bold text-center mb-8')}>
        Create Account
      </Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={tailwind('border border-gray-300 rounded-md px-4 py-3 mb-4')}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={tailwind('border border-gray-300 rounded-md px-4 py-3 mb-4')}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tailwind('border border-gray-300 rounded-md px-4 py-3 mb-4')}
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={tailwind('border border-gray-300 rounded-md px-4 py-3 mb-4')}
      />

      <TouchableOpacity
        style={tailwind('bg-pink-500 py-3 rounded-md mb-4')}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={tailwind('text-white text-center font-medium text-base')}>
          Create Account
        </Text>
      </TouchableOpacity>

      <View style={tailwind('flex-row justify-center')}>
        <Text style={tailwind('text-gray-600 mr-1')}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={tailwind('text-pink-500 font-medium')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
