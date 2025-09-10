import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (login(username, password)) {
      // logged in
    } else {
      alert('Enter username and password');
    }
  };

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Welcome to BookBazaar</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ borderWidth:1, padding:10, marginBottom:10 }} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth:1, padding:10, marginBottom:10 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
