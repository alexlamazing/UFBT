import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  Image,
  Text,
} from 'react-native';

class ArticleListItem extends Component {

  onRowPress() {
    this.props.onPressItem(this.props);
  }

  render() {
    return (
      <TouchableHighlight underlayColor='#f0f0f0' onPress={ this.onRowPress.bind(this) }>
        <View style = { styles.itemContainerstyle }>
          <View style = {styles.thumbnailContainerStyle}>
            <Image source = {{ uri:'https://hk.ulifestyle.com.hk/cms/images/event/120x120/201801/20180126235433_7_dog10.jpg' }} style={ styles.thumbnailStyle } />
          </View>
          <View style = { styles.contentStyle }>
            <Text style = { styles.textStyle }>{ this.props.article.title }</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
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
};

export default ArticleListItem;
