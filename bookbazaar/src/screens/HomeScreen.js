import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Button, Text } from 'react-native';
import { searchBooks } from '../services/api';
import BookCard from '../components/BookCard';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('react');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch(query);
  }, []);

  async function handleSearch(q) {
    setLoading(true);
    const data = await searchBooks(q);
    setBooks(data);
    setLoading(false);
  }

  return (
    <View style={{ flex:1, padding:10 }}>
      <View style={{ flexDirection:'row', marginBottom:10 }}>
        <TextInput value={query} onChangeText={setQuery} placeholder="Search books..." style={{ flex:1, borderWidth:1, padding:8 }} />
        <Button title="Search" onPress={() => handleSearch(query)} />
      </View>
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookCard book={item} onPress={() => navigation.navigate('BookDetail', { book: item })} />}
        />
      )}
      <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />
    </View>
  );
}
