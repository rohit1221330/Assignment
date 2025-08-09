import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

const ProfileScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const { logout, theme, toggleTheme, user } = useApp();

  const profileOptions = [
    'Address',
    'Order History',
    'Language',
    'Notifications',
    'Contact Us',
    'Get Help',
    'Privacy Policy',
    'Terms & Conditions',
    'Logout',
  ];

  // Dynamic theme styles
  const backgroundColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const boxColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <ScrollView style={tailwind(`flex-1 ${backgroundColor}`)}>
      {/* User Info */}
      <View style={tailwind('bg-pink-500 p-6')}>
        <Text style={tailwind('text-white text-2xl font-bold')}>
          {user.name}
        </Text>
        <Text style={tailwind('text-white text-sm mt-1')}>
          {user.email}
        </Text>
      </View>

      {/* Theme Toggle */}
      <View style={tailwind('p-4')}>
        <TouchableOpacity
          style={tailwind(`${boxColor} rounded-lg p-4 mb-3 flex-row justify-between items-center`)}
          onPress={toggleTheme}
        >
          <Text style={tailwind(`${textColor} text-base`)}>
            Toggle Dark Mode
          </Text>
          <Text style={tailwind('text-gray-400')}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </Text>
        </TouchableOpacity>

        {/* Profile Options */}
        {profileOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={tailwind(`${boxColor} rounded-lg p-4 mb-3 flex-row justify-between items-center`)}
            onPress={() => {
              if (option === 'Logout') {
                logout();
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Onboarding' }],
                });
              } else {
                console.log(`Pressed: ${option}`);
              }
            }}
          >
            <Text style={tailwind(`${textColor} text-base`)}>{option}</Text>
            <Text style={tailwind('text-gray-400')}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
