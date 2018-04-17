import { FETCH_ARTICLES } from './types';

export const fetchArticles = (fetchPage) => {

  const parseString = require('react-native-xml2js').parseString;

  var fetchURL = '';
  
  switch (fetchPage) {
    case '最新文章':
        fetchURL = 'http://uhkelb02-2030356052.ap-southeast-1.elb.amazonaws.com/appserver/ul/article/list.html';
        break;
    case '商場好去處':
      fetchURL = 'http://uhkelb02-2030356052.ap-southeast-1.elb.amazonaws.com/appserver/ul/article/malllist.html';
      break;
    case '遊玩情報':
      fetchURL = 'http://travel.ulifestyle.com.hk:8888/mobile-app/news-list-xml.php?size=10&offset=0';
      break;
    case '旅遊快搜':
      fetchURL = 'http://travel.ulifestyle.com.hk:8888/mobile-app/package-list-xml.php?size=10&offset=0';
      break;
    case '飲食放題':
      fetchURL = 'http://food.ulifestyle.com.hk:8888/api/ugoody/news/list?category=502011';
      break;
    case '飲得杯落':
      fetchURL = 'http://food.ulifestyle.com.hk:8888/api/ugoody/news/list?category=502016';
      break;
    case '美容情報':
      fetchURL = 'http://beauty.ulifestyle.com.hk/apps/ios/article_listing?id=7';
      break;
    case '潮流情報':
      fetchURL = 'http://beauty.ulifestyle.com.hk/apps/ios/article_listing?id=8';
      break;
    default:
      fetchURL = 'https://travel.ulifestyle.com.hk/mobile-app/news-list-xml.php?size=10&offset=0';
      break;
  }
  return (dispatch) => {
    fetch(fetchURL)
    .then(response => response.text())
    .then(data => {
      parseString(data, function (err, result) {
        dispatch({ type: FETCH_ARTICLES, payload: result.root });
      });
    }).catch( (error) => {
      console.log(error.message);
    });
  };
};
