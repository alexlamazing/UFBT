/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TabBarIOS,
  NavigatorIOS,
  // Platform,
  StyleSheet,
  // Text,
  // View
} from 'react-native';
import ArticleListPage from './ArticleListPage';
import Icon from 'react-native-vector-icons/FontAwesome';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { selectedTab: 'Local' };
  }

  render() {
    var mainColor = '';
    switch (this.state.selectedTab) {
      case 'Local':
        mainColor = '#197cbc';
        break;
      case 'Travel':
        mainColor = '#65b145';
        break;
      case 'Food':
        mainColor = '#ec9729';
        break;
      case 'Beauty':
        mainColor = '#df1b80';
        break;
      default:
        break;
    }
    return (
      <TabBarIOS tintColor={mainColor}>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'Local'}
          title="本地"
          onPress={() =>  this.setState({ selectedTab: 'Local' }) }
          iconName="bicycle"
          selectedIconName="bicycle"
          >
          <NavigatorIOS
            barTintColor={mainColor}
            titleTextColor='#fff'
            tintColor='#fff'
            style={styles.container}
            initialRoute={{
              title: '本地',
              component: ArticleListPage,
              passProps: {
                selectedPage:'最新文章',
                barTintColor: mainColor
              },
            }}
          />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          selected={this.state.selectedTab === 'Travel'}
          title="旅遊"
          onPress={() => this.setState({ selectedTab: 'Travel' })}
          iconName="plane"
          selectedIconName="plane"
          >
          <NavigatorIOS
            barTintColor={mainColor}
            titleTextColor='#fff'
            tintColor='#fff'
            style={styles.container}
            initialRoute={{
              title: '旅遊',
              component: ArticleListPage,
              passProps: {
                selectedPage:'遊玩情報',
                barTintColor: mainColor
              },
            }}
          />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          selected={this.state.selectedTab === 'Food'}
          title="飲食"
          onPress={() => this.setState({ selectedTab: 'Food' })}
          iconName="spoon"
          selectedIconName="spoon"
          >
          <NavigatorIOS
            barTintColor={mainColor}
            titleTextColor='#fff'
            tintColor='#fff'
            style={styles.container}
            initialRoute={{
              title: '飲食',
              component: ArticleListPage,
              passProps: {
                selectedPage:'飲食放題',
                barTintColor: mainColor
              },
            }}
          />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          selected={this.state.selectedTab === 'Beauty'}
          title="美容"
          onPress={() => this.setState({ selectedTab: 'Beauty' })}
          iconName="star-o"
          selectedIconName="star-o"
          >
          <NavigatorIOS
            barTintColor={mainColor}
            titleTextColor='#fff'
            tintColor='#fff'
            style={styles.container}
            initialRoute={{
              title: '美容',
              component: ArticleListPage,
              passProps: {
                selectedPage:'美容情報',
                barTintColor: mainColor
              },
            }}
          />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
