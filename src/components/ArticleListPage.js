import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import SegmentedControl from './SegmentedControl'
import ArticleList from './ArticleList';

class ArticleListPage extends Component {

  constructor(props) {
    super(props);

    var currentTabTitle = this.props.navigation.state.routeName;
    var leftButtonText = '';
    if (currentTabTitle==='Local') {
      leftButtonText = '最新文章';
    } else if (currentTabTitle==='Travel') {
      leftButtonText = '遊玩情報';
    } else if (currentTabTitle==='Food') {
      leftButtonText = '飲食放題';
    } else if (currentTabTitle==='Beauty') {
      leftButtonText = '美容情報';
    }

    this.state = {
      selectedPage: leftButtonText,
      articles: []
    };

  }

  componentDidMount() {
    this.fetchArticles(this.state.selectedPage);
  }

  fetchArticles(selectedPage) {

    const parseString = require('react-native-xml2js').parseString;

    var fetchURL = '';
    switch (selectedPage) {
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

    fetch(fetchURL)
    .then(response => response.text())
    .then(data => {
      var self = this;
      parseString(data, function (err, result) {
        self.setState({ articles:result.root });
      });
    }).catch((error)=>{
      console.log(error.message);
    });
  }

  onPressArticle(article) {
    this.props.navigation.navigate('Details', { article: article });
  }

  render() {
    return (
      <View style={{paddingBottom:50}}>
        <SegmentedControl
          currentTabTitle = { this.props.navigation.state.routeName }
          selectedPage = { this.state.selectedPage }
          onPress = { selectedPage => {this.setState({ selectedPage }); this.fetchArticles(selectedPage)} }
        />
        <ArticleList articles={this.state.articles} onPressArticle={article => this.onPressArticle(article)} />
      </View>
    );
  }
}

export default ArticleListPage;
