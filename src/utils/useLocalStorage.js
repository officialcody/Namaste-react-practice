const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getItem = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const removeItem = (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const clear = () => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return [setItem, getItem, removeItem, clear];
};

export default useLocalStorage;
