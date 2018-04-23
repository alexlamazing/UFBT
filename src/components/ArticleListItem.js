import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';

class ArticleListItem extends Component {

  render() {
    const { DetailPage, item, navigate } = this.props;
    return (
      <View>
          <TouchableOpacity onPress={() => {
              // console.log(`${item.title}`);
              // console.log(DetailPage);
              console.log('navigate');
              console.log(item);
              navigate(DetailPage, item);
          }}>
              <View
                  style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // backgroundColor:(index%2 === 0)
                      // ? 'dodgerblue'
                      // : 'mediumseagreen'
                  }}>
                  <Image
                      style={{
                          flex: 0.3,
                          margin: 8,
                          aspectRatio: 1
                      }}
                      source={{
                          uri: item.thumbnail
                      }}
                  >
                  </Image>
                  <Text
                      key={item.articleId}
                      style={{
                          flex: 0.7,
                          margin: 8,
                          //fontWeight: 'bold',
                          color: 'black',
                          fontSize: 16,
                  }}>
                      {`${item.title}`}
                  </Text>
              </View>
              <View style={{
                  backgroundColor: 'lightgrey',
                  height: .5,
                  marginLeft: 16,
                  marginRight: 16,
              }}>
              </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default ArticleListItem;
