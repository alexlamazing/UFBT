import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native';

const ArticleDetail = (param) => {
  const { article } = param.navigation.state.params
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {article.title}
      </Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    padding: 10
  },
  textStyle: {
    fontSize: 16
  }
}

export default ArticleDetail;
