import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';
import ArticleDetail from './ArticleDetail';
import SegmentedControl from './SegmentedControl'

class ListItem extends React.PureComponent {
  _onPress = () => {
    // this.props.onPressItem(this.props.index);
    this.props.onPressItem(this.props);
  }

  render() {
    return (
      <TouchableHighlight underlayColor='#f0f0f0' onPress={() => this._onPress()}>
        <View style = {styles.itemContainerstyle}>
          <View style = {styles.thumbnailContainerStyle}>
            <Image source = {{ uri:'https://hk.ulifestyle.com.hk/cms/images/event/120x120/201801/20180126235433_7_dog10.jpg' }} style={styles.thumbnailStyle} />
          </View>
          <View style = {styles.contentStyle}>
            <Text style = {styles.textStyle}>{this.props.item.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class ArticleListPage extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { articles:[], selectedPage:props.selectedPage };
  }

  retrieveArticles(selectedPage) {
    const parseString = require('react-native-xml2js').parseString;

    var fetchURL = '';
    // const selectedPage = this.state.selectedPage;
    switch (selectedPage) {
      case '最新文章':
        fetchURL = 'https://news.mingpao.com/rss/ins/all.xml';
        break;
      case '商場好去處':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00002.xml';
        break;
      case '遊玩情報':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00004.xml';
        break;
      case '旅遊快搜':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00016.xml';
        break;
      case '飲食放題':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00003.xml';
        break;
      case '飲得杯落':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00012.xml';
        break;
      case '美容情報':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00011.xml';
        break;
      case '潮流情報':
        fetchURL = 'https://news.mingpao.com/rss/pns/s00005.xml';
        break;
      default:
        fetchURL = 'http://travel.ulifestyle.com.hk/mobile-app/news-list-xml.php?size=10&offset=0';
        break;
    }

    fetch(fetchURL)
    .then(response => response.text())
    .then(data => {
      var self = this;
      parseString(data, function (err, result) {
        self.setState({ articles:result.rss.channel[0].item });
      });
    });
  }

  componentWillMount() {
    this.retrieveArticles(this.state.selectedPage);
  }

  _keyExtractor = (item, index) => index;

  // _renderItem = ({item}) => {
  //   return (
  //     <TouchableHighlight
  //       underlayColor='#dddddd'>
  //       <View>
  //         <Text>{item.title}</Text>
  //       </View>
  //     </TouchableHighlight>
  //   );
  //
  // };

  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (props) => {
    // console.log("Pressed row: "+index);
    this.props.navigator.push({
        title: props.item.title[0],
        component: ArticleDetail,
        passProps: { article:props.item }
      });
  };

  render() {
    // console.log(this.state.selectedPage);
    const currentTab = this.props.route.title;
    console.log(this.state.articles);

    return (
      <View style={styles.viewContainerStyle}>
        <SegmentedControl
          currentTab = {currentTab}
          selectedPage = {this.state.selectedPage}
          headerColor = {this.props.barTintColor}
          onPress = { (tabTitle) => { this.setState({'selectedPage': tabTitle}); this.retrieveArticles(tabTitle); } }
        />
        <FlatList
          data = {this.state.articles}
          keyExtractor = {this._keyExtractor}
          renderItem = {this._renderItem}
          automaticallyAdjustContentInsets = {false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainerStyle: {
    paddingTop: 65,
    marginBottom: 100
  },
  itemContainerstyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d0d0d0'
  },
  contentStyle: {
    width: 0,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
