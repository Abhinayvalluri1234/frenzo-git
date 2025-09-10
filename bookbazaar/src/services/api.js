const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export async function searchBooks(query) {
  if (!query) return [];
  try {
    const res = await fetch(`${API_URL}${encodeURIComponent(query)}&maxResults=20`);
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.warn('API error', err);
    return [];
  }
}
