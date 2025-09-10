import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'BOOKBAZAAR_FAVORITES';

export async function saveFavorites(list) {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to save favorites', e);
  }
}

export async function loadFavorites() {
  try {
    const raw = await AsyncStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Failed to load favorites', e);
    return [];
  }
}
