import * as ActionTypes from './ActionTypes';

export const radioStations = (state = { isLoading: true,
                                     errMess: null,
                                     radioStations: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RADIOSTATIONS:
            return {...state, isLoading: false, errMess: null, radioStations: action.payload};

        case ActionTypes.RADIOSTATIONS_LOADING:
            return {...state, isLoading: true, errMess: null, radioStations: []}

        case ActionTypes.RADIOSTATIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};