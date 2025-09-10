import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { loadFavorites } from '../storage/favorites';
import BookCard from '../components/BookCard';

export default function FavoritesScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      loadFavorites().then(setBooks);
    });
    return unsub;
  }, [navigation]);

  return (
    <View style={{ flex:1, padding:10 }}>
      {books.length === 0 ? <Text>No favorites yet</Text> : (
        <FlatList data={books} keyExtractor={(item)=>item.id} renderItem={({item}) => <BookCard book={item} onPress={() => navigation.navigate('BookDetail', { book: item })} />} />
      )}
    </View>
  );
}
