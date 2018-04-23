import {
    FETCH_ARTICLE_LIST_SUCCEEDED,
    FETCH_ARTICLE_LIST_FAILED,
} from '../actions/actionTypes';

const initialArticleLists = [
    {listTypeId: 0, articles: []},
    {listTypeId: 1, articles: []},
    {listTypeId: 2, articles: []},
    {listTypeId: 3, articles: []}
];

const articleListReducer = (articleLists = initialArticleLists, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST_SUCCEEDED:
            articleLists.map((articleList) => {
                if (articleList.listTypeId === action.listTypeId) {
                    articleList.articles = action.receivedArticles;
                }
            });
            // console.log('FETCH_SUCCEEDED ' + JSON.stringify(articleLists));
            return [...articleLists];
        case FETCH_ARTICLE_LIST_FAILED:
            return [...articleLists];
        default:
            return articleLists;
    }
}

export default articleListReducer;
