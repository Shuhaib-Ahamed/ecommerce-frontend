export const addFav = (id, tableRowData, history) => {
  const favObject = tableRowData?.find((tableData) => tableData?._id === id);
  let arr = [];
  if (favObject != null) {
    if (!localStorage?.favItems) {
      arr.push(favObject);
      localStorage.setItem("favItems", JSON.stringify(arr));
    } else {
      let localStorageArr = JSON.parse(localStorage.favItems);
      let index = localStorageArr.findIndex((x) => x?._id === favObject?._id);
      if (index === -1) {
        localStorageArr.push(favObject);
        localStorage.setItem("favItems", JSON.stringify(localStorageArr));
      } else {
        localStorageArr.splice(index, 1);
        localStorage.setItem("favItems", JSON.stringify(localStorageArr));
      }
    }
  }
  history.push("/");
};

export const isFav = (id, history) => {
  let bool = false;
  if (localStorage?.favItems) {
    let localStorageArr = JSON.parse(localStorage.favItems);
    let index = localStorageArr.findIndex((x) => x?._id === id);
    if (index === -1) {
      bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
};
