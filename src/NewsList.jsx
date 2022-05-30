import React, { useState, useEffect } from 'react';
import News from './News.jsx';
import getData from './getway';
import Search from './Search.jsx';

const NewsList = () => {
  const [listNews, setListNews] = useState([]);
  const [filterText, setFilterText] = useState('');

  const onChange = e => {
    setFilterText(e.target.value);
  };

  const fetchNews = () => {
    getData().then(arr => setListNews(arr));
  };

  useEffect(() => {
    fetchNews();
    filterListNews();
  }, []);

  const filterListNews = () => {
    return listNews.filter(obj => obj.newsText.toLowerCase().match(filterText.toLowerCase()));
  };

  return (
    <>
      <Search onChange={onChange} filterText={filterText} />
      {filterListNews().map(news => (
        <News key={Math.random()} {...news} />
      ))}
    </>
  );
};

export default NewsList;
