import * as ActionTypes from './ActionTypes';

export const oldTestament = (state = { isLoading: true,
                                     errMess: null,
                                     oldTestament: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OLDTESTAMENT:
            return {...state, isLoading: false, errMess: null, oldTestament: action.payload};

        case ActionTypes.OLDTESTAMENT_LOADING:
            return {...state, isLoading: true, errMess: null, oldTestament: []}

        case ActionTypes.OLDTESTAMENT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};