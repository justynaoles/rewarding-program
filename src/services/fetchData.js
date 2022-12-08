export const fetchData = (url) => {
    fetch(url).then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error)
      return false;
    });
}
