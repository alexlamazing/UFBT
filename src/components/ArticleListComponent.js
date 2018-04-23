import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Button from 'react-native-button';

import { listType } from '../listType';

import { DetailPage } from '../screenNames';

import ArticleListItem from './ArticleListItem';

export default class ArticleListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: false, isRefreshing: false};
  }

  componentDidMount() {
    let listTypeId = this.props.listType.listTypeId;
    let selectedIndex = this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex;

    this.props.onFetchArticleList(listTypeId, selectedIndex);
    this.setState({isLoading: true});

    console.log('ArticleListComponent componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articleLists !== this.props.articleLists) {
      console.log('articleLists changed');
    } else {
      console.log('articleLists same same');
    }
    this.setState({isLoading: false, isRefreshing: false});
    if (nextProps.selectedIndexOfListTypes[nextProps.listType.listTypeId].selectedIndex != this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex) {
      console.log('componentWillReceiveProps not the same ' + nextProps.selectedIndexOfListTypes[nextProps.listType.listTypeId].selectedIndex + ' ' + this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex);
      //
      let listTypeId = nextProps.listType.listTypeId;
      let selectedIndex = nextProps.selectedIndexOfListTypes[nextProps.listType.listTypeId].selectedIndex;

      this.props.onFetchArticleList(listTypeId, selectedIndex);
      this.setState({isLoading: true});
    } else {
      console.log('componentWillReceiveProps same same ' + nextProps.selectedIndexOfListTypes[nextProps.listType.listTypeId].selectedIndex + ' ' + this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex);
    }
  }

  handleRefresh = () => {
    this.setState({isRefreshing: true});
    let listTypeId = this.props.listType.listTypeId;
    let selectedIndex = this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex;

    this.props.onFetchArticleList(listTypeId, selectedIndex);
  }

  render() {
    const { navigate } = this.props.navigation;

    var activityIndicator;

    if (this.state.isLoading) {
      activityIndicator = <View style = {styles.activityIndicatorContainer}>
                            <ActivityIndicator
                              animating={this.state.isLoading}
                              color='black'
                              size='large'
                              style={styles.activityIndicator}/>
                          </View>
    }

    return(
            <View style={{
                flex:1,
                //backgroundColor: this.props.listType.color,
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    borderColor: this.props.listType.color,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginHorizontal: 16,
                    marginVertical: 8,
                }}>
                    <Button style={
                        [ styles.segmentButton,
                        {
                            color: (this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex === 0)
                            ? 'white'
                            : this.props.listType.color,
                        }]
                    }
                    containerStyle={ [styles.segmentButtonContainer,
                        {
                            borderTopLeftRadius: 2,
                            borderBottomLeftRadius: 2,
                            backgroundColor: (this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex === 0)
                            ? this.props.listType.color
                            : 'transparent',
                        }
                    ] }
                    onPress={
                        () => {
                            this.props.onSwitchSelectedIndex({
                                listTypeId: this.props.listType.listTypeId,
                                selectedIndex: 0,
                            });
                        }
                    }
                    >
                    {this.props.listType.subListTitle[0]}
                    </Button>

                    <Button style={
                        [ styles.segmentButton,
                            {
                                color: (this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex === 1)
                                ? 'white'
                                : this.props.listType.color,
                            }
                        ]
                    }
                    containerStyle={ [styles.segmentButtonContainer,
                        {
                            borderTopRightRadius: 2,
                            borderBottomRightRadius: 2,
                            backgroundColor: (this.props.selectedIndexOfListTypes[this.props.listType.listTypeId].selectedIndex === 1)
                            ? this.props.listType.color
                            : 'transparent',
                        }
                    ] }
                    onPress={
                        () => {
                            this.props.onSwitchSelectedIndex({
                                listTypeId: this.props.listType.listTypeId,
                                selectedIndex: 1,
                            });
                        }
                    }
                    >
                        {this.props.listType.subListTitle[1]}
                    </Button>
                </View>
                <FlatList
                    style={{
                        flex:1,
                        backgroundColor:'white',
                    }}
                    data={
                            this.props.articleLists
                            ? this.props.articleLists[this.props.listType.listTypeId].articles
                            : []
                            //this.props.articleLists[this.props.listType.listTypeId].articles
                         }
                    keyExtractor={
                        (item) => item.articleId
                    }
                    renderItem={
                        ({item, index}) => (
                            <ArticleListItem item={item} DetailPage={DetailPage} navigate={navigate} />
                        )
                    }
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.handleRefresh}
                >
                </FlatList>

                { activityIndicator }

            </View>
        );
    }
}

const styles = {
  segmentButtonContainer: {
    flex: 0.5,
    padding: 8,
  },
  segmentButton: {
    fontSize: 12,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
};
