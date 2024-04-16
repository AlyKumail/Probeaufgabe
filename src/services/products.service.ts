export async function fetchProducts() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    localStorage.setItem("headerTitle", data.header.headerTitle);
    return data;
  } catch (error: any) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
}
