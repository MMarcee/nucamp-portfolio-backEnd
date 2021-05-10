import * as ActionTypes from './ActionTypes';

export const parables = (state = { isLoading: true,
                                     errMess: null,
                                     parables: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARABLES:
            return {...state, isLoading: false, errMess: null, parables: action.payload};

        case ActionTypes.PARABLES_LOADING:
            return {...state, isLoading: true, errMess: null, parables: []}

        case ActionTypes.PARABLES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};