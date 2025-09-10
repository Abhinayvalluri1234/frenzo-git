import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';
import { saveFavorites, loadFavorites } from '../storage/favorites';

export default function BookDetailScreen({ route }) {
  const { book } = route.params;
  const [favored, setFavored] = useState(false);

  useEffect(() => {
    checkFav();
  }, []);

  async function checkFav() {
    const favs = await loadFavorites();
    setFavored(favs.some(b => b.id === book.id));
  }

  async function toggleFav() {
    const favs = await loadFavorites();
    let updated;
    if (favored) {
      updated = favs.filter(b => b.id !== book.id);
    } else {
      updated = [...favs, book];
    }
    await saveFavorites(updated);
    setFavored(!favored);
  }

  return (
    <ScrollView style={{ flex:1, padding:10 }}>
      {book.volumeInfo.imageLinks?.thumbnail && <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }} style={{ width:120, height:180 }} />}
      <Text style={{ fontSize:20, fontWeight:'bold' }}>{book.volumeInfo.title}</Text>
      <Text>{book.volumeInfo.authors?.join(', ')}</Text>
      <Text style={{ marginTop:10 }}>{book.volumeInfo.description}</Text>
      <Button title={favored ? 'Remove from Favorites' : 'Add to Favorites'} onPress={toggleFav} />
    </ScrollView>
  );
}
