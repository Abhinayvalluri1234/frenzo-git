import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

export default function BookCard({ book, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {book.volumeInfo.imageLinks?.thumbnail && <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }} style={styles.thumb} />}
      <View style={{ flex:1, paddingLeft:10 }}>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
        <Text>{book.volumeInfo.authors?.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection:'row', padding:10, marginVertical:6, backgroundColor:'#fff', borderRadius:6, elevation:1 },
  thumb: { width:60, height:90, borderRadius:4 },
  title: { fontWeight:'bold' }
});
