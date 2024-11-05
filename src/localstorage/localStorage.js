import { toast } from "react-toastify";

const getetItemsFromLocalStorage = (listType) => {
  const storedItems = localStorage.getItem(listType);
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};
const setItemToLocalStorage = (id, listType) => {
  const storedItems = getetItemsFromLocalStorage(listType);
  const existingItem = storedItems.find((bookId) => bookId === id);
  const storedReadItems = getetItemsFromLocalStorage("read-list");
  const existingReadItem = storedReadItems.find((bookId) => bookId === id);
  const storedWishItems = getetItemsFromLocalStorage("wish-list");
  const existingWishItem = storedWishItems.find((bookId) => bookId === id);
  if (listType == "read-list" && !existingReadItem && existingWishItem) {
    localStorage.removeItem("wish-list", existingWishItem);
  }
  if (!existingReadItem && !existingItem) {
    storedItems.push(id);
    localStorage.setItem(listType, JSON.stringify(storedItems));
    toast(`You have successfuly added the book to the ${listType}`);
  } else if (listType == "wish-list" && existingReadItem) {
    toast.error("You have already added this book to the read-item ");
  } else {
    toast.error(`You have already added this book to the ${listType}`);
  }
};
export { setItemToLocalStorage, getetItemsFromLocalStorage };
