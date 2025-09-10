import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:18 }}>Logged in as: {user?.username}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
