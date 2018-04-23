import React, { Component } from 'react';
import { WebView } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator, StackNavigator } from 'react-navigation';

export default class ArticleDetailComponent extends Component {

  componentDidMount() {
    // console.log('Hello!!');
    // console.log(this.props.navigation.state.params);
    // console.log(this.props.listType);
    this.props.onClearDetail();
    this.props.onFetchArticleDetail(this.props.navigation.state.params.link);
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
  }

  componentWillUnmount() {
    // console.log('Bye!!');
  }

  render() {
    return(
      <WebView
        style={{
          flex: 1,
          width: '100%'
        }}
        scalesPageToFit={false}
        source={{ html: this.props.detail, baseUrl:'' }}
      />
    );
  }
}
