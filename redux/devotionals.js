import * as ActionTypes from './ActionTypes';

export const devotionals = (state = { isLoading: true,
                                     errMess: null,
                                     devotionals: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEVOTIONALS:
            return {...state, isLoading: false, errMess: null, devotionals: action.payload};

        case ActionTypes.DEVOTIONALS_LOADING:
            return {...state, isLoading: true, errMess: null, devotionals: []}

        case ActionTypes.DEVOTIONALS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};