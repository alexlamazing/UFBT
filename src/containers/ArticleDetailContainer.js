import { connect } from 'react-redux';
import ArticleDetailComponent from '../components/ArticleDetailComponent';
import {
  fetchArticleDetailAction,
  clearArticleDetailAction
} from '../actions/articleDetailAction';

const mapStateToProps = (state, props) => {
  return {
    detail: state.articleDetailReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchArticleDetail: (urlString) => {
      console.log('urlString: ' + urlString);
      dispatch(fetchArticleDetailAction(urlString));
    },
    onClearDetail: () => {
      dispatch(clearArticleDetailAction());
    }
  }
};

const ArticleDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetailComponent);

export default ArticleDetailContainer;
