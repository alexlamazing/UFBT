import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ArticleListItem from './ArticleListItem';
import ArticleDetail from './ArticleDetail';

class ArticleList extends Component {

  onPressItem(props) {
    this.props.onPressArticle(props.article);
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item, index}) => (
    <ArticleListItem
      article={item}
      index={index}
      onPressItem={this.onPressItem.bind(this)}
    />
  );

  render() {
    return (
      <FlatList
        data = {this.props.articles.item}
        renderItem = {this.renderItem}
        keyExtractor = {this.keyExtractor}
        automaticallyAdjustContentInsets = {false}
      />
    );
  }
}

export default ArticleList;
