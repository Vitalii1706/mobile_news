import React from 'react';

const News = ({ id, newsTitle, time, newsSourse, newsText, urlNews, urlToImage }) => {
  return (
    <div className="news" key={id}>
      {urlToImage && <img className="news__img" src={urlToImage} alt="news photo" />}
      <div className="news__navi">
        <div className="news__navi-circle"></div>
        <div className="news__navi-title">{newsTitle}</div>
        <div className="news__navi-time">{time}</div>
        <a className="news__navi-button" href={urlNews}></a>
      </div>
      <div className="news__sourse">{newsSourse}</div>
      <div className="news__sourse-start">{newsText}</div>
    </div>
  );
};

export default News;
