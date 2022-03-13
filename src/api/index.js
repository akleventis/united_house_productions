import data from "../data/index.js";

const getFromData = (key) =>
  new Promise((res, rej) =>
    data[key] ? res(data[key]) : rej(Error(`Could not get ${key}`))
  );

export const getDjs = () => getFromData("djs");

export const getEvents = () => getFromData("events");

export const getFeaturedSongs = () => getFromData("featuredSongs");

export const getProducts = () => getFromData("products");

export const getFromLocalStorage = (key) =>
  new Promise((res) => res(JSON.parse(localStorage.getItem(key))));

export const setInLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const addToCart = async (product) => {
  const cart = await getFromLocalStorage("cart");
  if (cart === null) {
    setInLocalStorage("cart", [product]);
  } else {
    const [matchingProduct] = cart.filter((item) => item.id === product.id);
    if (matchingProduct) {
      const index = cart.map((item) => item.id).indexOf(product.id);
      matchingProduct.quantity = String(
        Number(matchingProduct.quantity) + Number(product.quantity)
      );
      cart[index] = matchingProduct;

      setInLocalStorage("cart", cart);
    } else {
      setInLocalStorage("cart", [...cart, product]);
    }
  }
};

export const removeFromCart = async (id) => {
  const cart = await getFromLocalStorage("cart");
  setInLocalStorage(
    "cart",
    cart.filter((item) => item.id !== id)
  );
};
