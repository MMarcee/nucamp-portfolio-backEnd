import * as ActionTypes from './ActionTypes';

export const newTestament = (state = { isLoading: true,
                                     errMess: null,
                                     newTestament: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEWTESTAMENT:
            return {...state, isLoading: false, errMess: null, newTestament: action.payload};

        case ActionTypes.NEWTESTAMENT_LOADING:
            return {...state, isLoading: true, errMess: null, newTestament: []}

        case ActionTypes.NEWTESTAMENT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};