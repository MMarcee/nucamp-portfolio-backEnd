import * as ActionTypes from './ActionTypes';

export const bible = (state = { isLoading: true,
                                     errMess: null,
                                     churches: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BIBLE:
            return {...state, isLoading: false, errMess: null, bible: action.payload};

        case ActionTypes.BIBLE_LOADING:
            return {...state, isLoading: true, errMess: null, bible: []}

        case ActionTypes.BIBLE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};