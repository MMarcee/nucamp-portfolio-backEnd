import * as ActionTypes from './ActionTypes';

export const podcasts = (state = { isLoading: true,
                                     errMess: null,
                                     podcasts: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PODCASTS:
            return {...state, isLoading: false, errMess: null, podcasts: action.payload};

        case ActionTypes.PODCASTS_LOADING:
            return {...state, isLoading: true, errMess: null, podcasts: []}

        case ActionTypes.PODCASTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};