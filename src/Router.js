import React from 'react';
import { Platform, Text, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { listType } from './listType';
import ArticleListContainer from './containers/ArticleListContainer';
import ArticleDetailContainer from './containers/ArticleDetailContainer';

function createNavigationScreen(listType) {
  const tabBarLabel = ({ tintColor, focused }) => (
    <Text style={{ color: focused ? listType.color : 'grey', fontSize: 10, paddingBottom: 4 }}>
      {listType.title}
    </Text>
  );
  const tabBarIcon = ({ tintColor, focused }) => (
    <Image
      source={ listType.icon }
      style={{ width: 22, height: 22, tintColor: focused ? listType.color : 'grey' }}
    />
  );

  const options = {
    title: listType.title,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: listType.color
    },
    tabBarLabel,
    tabBarIcon,
  };
  const detailPageOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: listType.color
    },
    tabBarVisible: false,
  };

  return StackNavigator({
    ArticleList: {
      screen: props => <ArticleListContainer {...props} listType={ listType } />,
      navigationOptions: options
    },
    DetailPage: {
      screen: props => <ArticleDetailContainer {...props} listType={ listType } />,
      navigationOptions: detailPageOptions
    },
  });
}

const RouteConfigs = {
  LifeStyle: {
    screen: createNavigationScreen(listType.lifeStyle),
  },
  Travel: {
    screen: createNavigationScreen(listType.travel),
  },
  Food: {
    screen: createNavigationScreen(listType.food),
  },
  Beauty: {
    screen: createNavigationScreen(listType.beauty),
  }
};

const tabBarOptions = Platform.OS === 'ios' ?
  {
    showLabel: true,
    showIcon: true,
  } : {
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: '#f7f7f7',
      // borderTopColor: 'grey',
      // borderTopWidth: 1,
    },
    indicatorStyle: { backgroundColor: 'transparent' }
  }

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: tabBarOptions
};

const Router = TabNavigator(RouteConfigs, TabNavigatorConfig);

export default Router;
