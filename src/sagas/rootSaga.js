import { call } from 'redux-saga/effects';

import { watchFetchArticleList } from './articleListSagas';
import { watchFetchArticleDetail } from './articleDetailSagas';

export default function* rootSaga() {
  yield [
    call(watchFetchArticleList),
    call(watchFetchArticleDetail)
  ];
}
