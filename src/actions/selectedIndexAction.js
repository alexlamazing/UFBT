import {
    SWITCH_SELECTED_INDEX,
} from './actionTypes';

export const switchSelectedIndexAction = (selectedIndexOfListType) => {
    return {
        type: SWITCH_SELECTED_INDEX,
        selectedIndexOfListType: selectedIndexOfListType,
    }
}
