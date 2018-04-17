import React from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArticleList from './components/ArticleList';
import ArticleListPage from './components/ArticleListPage';
import ArticleDetail from './components/ArticleDetail';

function Label({name, color, focused}) {
  return <Text style={{textAlign: 'center', fontSize: 10, color: focused ? color : 'gray'}}>{name}</Text>;
}

const LocalStack = StackNavigator({
  Local: {
    screen: ArticleListPage ,
    navigationOptions: {
      title:'本地',
      headerStyle: {
        backgroundColor:'#197cbc'
      },
      headerTintColor:'#FFF',
      tabBarLabel:  props => (<Label name='本地' color='#197cbc' {...props}/>)
    }

  },
  Details: {
    screen: ArticleDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  },
});

const TravelStack = StackNavigator({
  Travel: {
    screen: ArticleListPage ,
    navigationOptions: {
      title:'旅遊',
      headerStyle: {
        backgroundColor:'#65b145'
      },
      headerTintColor:'#FFF',
      tabBarLabel:  props => (<Label name='旅遊' color='#65b145' {...props}/>)
    }
  },
  Details: {
    screen: ArticleDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  },
});

const FoodStack = StackNavigator({
  Food: {
    screen: ArticleListPage ,
    navigationOptions: {
      title:'飲食',
      headerStyle: {
        backgroundColor:'#ec9729'
      },
      headerTintColor:'#FFF',
      tabBarLabel:  props => (<Label name='飲食' color='#ec9729' {...props}/>)
    }
  },
  Details: {
    screen: ArticleDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  },
});

const BeautyStack = StackNavigator({
  Beauty: {
    screen: ArticleListPage ,
    navigationOptions: {
      title:'美容',
      headerStyle: {
        backgroundColor:'#df1b80'
      },
      headerTintColor:'#FFF',
      tabBarLabel:  props => (<Label name='美容' color='#df1b80' {...props}/>)
    }
  },
  Details: {
    screen: ArticleDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  },
});

const RouterComponent = TabNavigator(
  {
    Local: { screen: LocalStack },
    Travel: { screen: TravelStack },
    Food: { screen: FoodStack },
    Beauty: { screen: BeautyStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let color;
        if (routeName === 'Local') {
          iconName = "bicycle";
          color = '#197cbc';
        }
        if (routeName === 'Travel') {
          iconName = "plane";
          color = '#65b145';
        }
        if (routeName === 'Food') {
          iconName = "spoon";
          color = '#ec9729';
        }
        if (routeName === 'Beauty') {
          iconName = "star-o";
          color = '#df1b80';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;
        return <Icon name={iconName} size={25} color={focused ? color : 'gray'} />
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default RouterComponent;
