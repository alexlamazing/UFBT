'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

const ArticleDetail = ({article}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {article.description}
      </Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
    padding: 10
  },
  textStyle: {
    fontSize: 16
  }
}

export default ArticleDetail;
