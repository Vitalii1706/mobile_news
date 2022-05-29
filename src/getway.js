export const getData = async () => {
  return await fetch(
    'https://newsapi.org/v2/top-headlines?country=ua&apiKey=a0fbd599ebc5473e981ff8df19309046',
  )
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(alert(" Internal Server Error. Can't display news "));
      }
    })
    .then(newsList => newsList.articles)
    .then(arr =>
      arr.map(({ title, source, description, publishedAt, url, urlToImage }) => ({
        newsTitle: title,
        newsSourse: source.name,
        newsText: description,
        time: publishedAt.slice(11, 16),
        urlNews: url,
        urlToImage,
      })),
    );
};
export default getData;
