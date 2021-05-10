import * as ActionTypes from './ActionTypes';

export const tvSeries = (state = { isLoading: true,
                                     errMess: null,
                                     tvSeries: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TVSERIES:
            return {...state, isLoading: false, errMess: null, tvSeries: action.payload};

        case ActionTypes.TVSERIES_LOADING:
            return {...state, isLoading: true, errMess: null, tvSeries: []}

        case ActionTypes.TVSERIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};