import { connect } from 'react-redux';
import ArticleListComponent from '../components/ArticleListComponent';
import { switchSelectedIndexAction } from '../actions/selectedIndexAction';
import { fetchArticleListAction } from '../actions/articleListAction';

const mapStateToProps = (state, props) => {
  return {
    listType:props.listType,
    articleLists:state.articleListReducer,
    selectedIndexOfListTypes:state.selectedIndexReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchSelectedIndex: (selectedIndexOfListType) => {
      dispatch(switchSelectedIndexAction(selectedIndexOfListType));
    },
    onFetchArticleList: (listTypeId, selectedIndex) => {
      // console.log('onFetchArticles listTypeId: ' + listTypeId);
      // console.log('onFetchArticles selectedIndex: ' + selectedIndex);
      dispatch(fetchArticleListAction(listTypeId, selectedIndex));
    },
  }
};

const ArticleListContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);

export default ArticleListContainer;
