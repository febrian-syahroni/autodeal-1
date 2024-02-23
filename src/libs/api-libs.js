export async function getAllData() {
  const baseURL = "https://fakestoreapi.com/products";
  const response = await fetch(`${baseURL}`);
  const data = response.json();
  return data;
}
