const apiKey = process.env.REACT_APP_API_KEY;

export const getArticles = () => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  ).then((response) => {
    if (!response.ok) {
      console.log("response not okay");
      throw new Error(response.status);
    }
    return response.json();
  });
};
