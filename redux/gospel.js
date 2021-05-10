import * as ActionTypes from './ActionTypes';

export const gospel = (state = { isLoading: true,
                                     errMess: null,
                                     gospel: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GOSPEL:
            return {...state, isLoading: false, errMess: null, gospel: action.payload};

        case ActionTypes.GOSPEL_LOADING:
            return {...state, isLoading: true, errMess: null, gospel: []}

        case ActionTypes.GOSPEL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};