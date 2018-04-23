import {
    SWITCH_SELECTED_INDEX,
} from '../actions/actionTypes';

const selectedIndexReducers = (selectedIndexOfListTypes = [{listTypeId: 0, selectedIndex: 0}, {listTypeId: 1, selectedIndex: 0}, {listTypeId: 2, selectedIndex: 0}, {listTypeId: 3, selectedIndex: 0}], action) => {
    //console.log('selectedIndexOfListTypes:' + JSON.stringify(selectedIndexOfListTypes));
    switch (action.type) {
        case SWITCH_SELECTED_INDEX:
            var nextSelectedIndexOfListTypes = [];
            selectedIndexOfListTypes.map((selectedIndexOfListType) => {
                if (selectedIndexOfListType.listTypeId === action.selectedIndexOfListType.listTypeId) {
                    nextSelectedIndexOfListTypes.push({listTypeId:action.selectedIndexOfListType.listTypeId, selectedIndex:action.selectedIndexOfListType.selectedIndex});
                } else {
                    nextSelectedIndexOfListTypes.push(selectedIndexOfListType);
                }
            });
            return nextSelectedIndexOfListTypes;

        default:
            return selectedIndexOfListTypes;
    }
}

export default selectedIndexReducers;
