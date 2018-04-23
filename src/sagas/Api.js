import { listType } from '../listType';

const UFBTBeautyListingURL = "https://beauty.ulifestyle.com.hk/apps/ios/article_listing?id=7";
const UFBTBeautyFashionListingURL ="https://beauty.ulifestyle.com.hk/apps/ios/article_listing?id=8";

const UFBTFoodListingURL = "http://food.ulifestyle.com.hk/api/ugoody/news/list?category=502011&size=10&offset=0";
const UFBTFoodDrinksListingURL = "http://food.ulifestyle.com.hk/api/ugoody/news/list?category=502016&size=10&offset=0";

const UFBTTravelNewsListingURL = "http://app01.utravel.com.hk/server/ul/travel/news-list-xml.php";
const UFBTTravelPackageListingURL = "http://app01.utravel.com.hk/server/ul/travel/package-list-xml.php";

const UFBTLifeNewestListingURL = "https://hk.ulifestyle.com.hk/appserver/ul/article/list.html";
const UFBTLifeMallListingURL = "https://hk.ulifestyle.com.hk/appserver/ul/article/malllist.html";

function* getArticlesFromApi(listTypeId, selectedIndex) {
  let urlGetArticles = '';

  console.log('getArticlesFromApi listTypeId: ' + listTypeId);
  console.log('getArticlesFromApi selectedIndex: ' + selectedIndex);

  switch (listTypeId) {
    case listType.lifeStyle.listTypeId:
      if (selectedIndex == 0) {
        urlGetArticles = UFBTLifeNewestListingURL;
      } else {
        urlGetArticles = UFBTLifeMallListingURL;
      }
      break;

    case listType.travel.listTypeId:
      if (selectedIndex == 0) {
        urlGetArticles = UFBTTravelNewsListingURL;
      } else {
        urlGetArticles = UFBTTravelPackageListingURL;
      }
      break;

    case listType.food.listTypeId:
      if (selectedIndex == 0) {
        urlGetArticles = UFBTFoodListingURL;
      } else {
        urlGetArticles = UFBTFoodDrinksListingURL;
      }
      break;

    case listType.beauty.listTypeId:
      if (selectedIndex == 0) {
        urlGetArticles = UFBTBeautyListingURL;
      } else {
        urlGetArticles = UFBTBeautyFashionListingURL;
      }
      break;

    default:
      urlGetArticles = '';
      break;
  }

  console.log('urlGetArticles: ' + urlGetArticles);

  const response = yield fetch(urlGetArticles, {
    method: 'GET',
    headers: {
      'Accept': 'text/xml',
      'Content-Type': 'text/xml',
    }
  });

  var DOMParser = require('xmldom').DOMParser;
  const articles = yield response.status === 200
    ? new DOMParser().parseFromString(response._bodyInit, "text/xml").documentElement
    : [];

  const articleList = [];
  // console.log('articles: ' + articles);
  for (var i=0; i<articles.getElementsByTagName('item').length; i++)
  {
    var article = new Object();
    var element = articles.getElementsByTagName('item').item(i);
    let linkPrefixRemark;
    let thumbnailPrefixRemark;

    article.title = element.getElementsByTagName("title")[0].firstChild.data;
    article.link = element.getElementsByTagName("link")[0].firstChild.data;
    article.articleId = element.getAttribute('id');
    article.thumbnail = element.getElementsByTagName("thumbnail")[0].firstChild.data;

    linkPrefixRemark = article.link.substring(2,4);
    thumbnailPrefixRemark = article.thumbnail.substring(2,4);
    // console.log('article.articleId :' + article.articleId);
    try {
      article.link = article.link.replace(/\#{b.}/, articles.getElementsByTagName(linkPrefixRemark)[0].firstChild.data);
      article.thumbnail = article.thumbnail.replace(/\#{b.}/, articles.getElementsByTagName(thumbnailPrefixRemark)[0].firstChild.data);
    } catch(error) {
      console.log('No Base...');
    }
    articleList.push(article);
  }

  return articleList;
}

function* getDetailFromUrl(urlString) {
  // console.log('getDetailFromUrl ' + urlString);
  const response = yield fetch(urlString, {
    method: 'GET',
    headers: {
      'Accept': 'text/xml',
      'Content-Type': 'text/xml',
    }
  });

  var DOMParser = require('xmldom').DOMParser;
  const detail = yield response.status === 200
    ? new DOMParser().parseFromString(response._bodyInit, "text/xml").documentElement
    : [];

  let detailContent = detail.getElementsByTagName('content')[0].firstChild.data;
  // console.log('detailContent: ' + detailContent);
  return detailContent;
}

export const Api = {
  getArticlesFromApi,
  getDetailFromUrl
};
