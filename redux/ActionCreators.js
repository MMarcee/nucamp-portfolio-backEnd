import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// @Comments
export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postComment = (podcastId, rating, author, text) => dispatch => {
    const newComment = {
        podcastId,
        rating,
        author,
        text,
    };
    newComment.date = new Date().toISOString();
    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
};
export const addComment = (newComment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: newComment,
});

// @Gospel:
export const fetchGospel = () => dispatch => {

    dispatch(gospelLoading());

    return fetch(baseUrl + 'gospel')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(gospel => dispatch(addGospel(gospel)))
        .catch(error => dispatch(gospelFailed(error.message)));
};

export const gospelLoading = () => ({
    type: ActionTypes.GOSPEL_LOADING
});

export const gospelFailed = errMess => ({
    type: ActionTypes.GOSPEL_FAILED,
    payload: errMess
});

export const addGospel = gospel => ({
    type: ActionTypes.ADD_GOSPEL,
    payload: gospel
});

// @Podcasts
export const fetchPodcasts = () => dispatch => {

    dispatch(podcastsLoading());

    return fetch(baseUrl + 'podcasts')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(podcasts => dispatch(addPodcasts(podcasts)))
        .catch(error => dispatch(podcastsFailed(error.message)));
};

export const podcastsLoading = () => ({
    type: ActionTypes.PODCASTS_LOADING
});

export const podcastsFailed = errMess => ({
    type: ActionTypes.PODCASTS_FAILED,
    payload: errMess
});

export const addPodcasts = podcasts => ({
    type: ActionTypes.ADD_PODCASTS,
    payload: podcasts
});

// @Bible
export const fetchBible = () => dispatch => {
    
    dispatch(bibleLoading());

    return fetch(baseUrl + 'bible')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(bible => dispatch(addBible(bible)))
        .catch(error => dispatch(bibleFailed(error.message)));
};

export const bibleLoading = () => ({
    type: ActionTypes.BIBLE_LOADING
});

export const bibleFailed = errMess => ({
    type: ActionTypes.BIBLE_FAILED,
    payload: errMess
});

export const addbible = bible => ({
    type: ActionTypes.ADD_BIBLE,
    payload: bible
});

// @Parables
export const fetchParables = () => dispatch => {
    
    dispatch(parablesLoading());

    return fetch(baseUrl + 'parables')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(parables => dispatch(addParables(parables)))
        .catch(error => dispatch(parablesFailed(error.message)));
};

export const parablesLoading = () => ({
    type: ActionTypes.PARABLES_LOADING
});

export const parablesFailed = errMess => ({
    type: ActionTypes.PARABLES_FAILED,
    payload: errMess
});

export const addParables = parables => ({
    type: ActionTypes.ADD_PARABLES,
    payload: parables
});

// @NewTestament
export const fetchNewTestament = () => dispatch => {
    
    dispatch(newtestamentLoading());

    return fetch(baseUrl + 'parables')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(newtestament => dispatch(addNewTestament(newtestament)))
        .catch(error => dispatch(newTestamentFailed(error.message)));
};

export const newtestamentLoading = () => ({
    type: ActionTypes.NEWTESTAMENT_LOADING
});

export const newtestamentFailed = errMess => ({
    type: ActionTypes.NEWTESTAMENT_FAILED,
    payload: errMess
});

export const addNewtestament = newTestament => ({
    type: ActionTypes.ADD_NEWTESTAMENT,
    payload: newTestament
});

// @OldTestament
export const fetchOldTestament = () => dispatch => {
    
    dispatch(oldtestamentLoading());

    return fetch(baseUrl + 'oldtestament')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(oldtestament => dispatch(addOldTestament(oldtestament)))
        .catch(error => dispatch(oldTestamentFailed(error.message)));
};

export const oldtestamentLoading = () => ({
    type: ActionTypes.OLDTESTAMENT_LOADING
});

export const oldtestamentFailed = errMess => ({
    type: ActionTypes.OLDTESTAMENT_FAILED,
    payload: errMess
});

export const addOldtestament = oldTestament => ({
    type: ActionTypes.ADD_NEWTESTAMENT,
    payload: oldTestament
});

// @RadioStations
export const fetchRadioStations = () => dispatch => {
    
    dispatch(radiostationsLoading());

    return fetch(baseUrl + 'readiostations')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(radiostation => dispatch(addRadioStations(radiostation)))
        .catch(error => dispatch(radiostationFailed(error.message)));
};

export const radiostationsLoading = () => ({
    type: ActionTypes.RADIOSTATIONS_LOADING
});

export const radiostationsFailed = errMess => ({
    type: ActionTypes.ORADIOSTATIONS_FAILED,
    payload: errMess
});

export const addRadiostations = radioStations => ({
    type: ActionTypes.ADD_RADIOSTATIONS,
    payload: radioStations
});

// @TvSeries
export const fetchTvSeries = () => dispatch => {
    
    dispatch(tvseriesLoading());

    return fetch(baseUrl + 'tvseries')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(tvseries => dispatch(addTvSeries(tvseries)))
        .catch(error => dispatch(tvstationsFailed(error.message)));
};

export const tvseriesLoading = () => ({
    type: ActionTypes.TVSERIES_LOADING
});

export const tvseriesFailed = errMess => ({
    type: ActionTypes.TVSERIES_FAILED,
    payload: errMess
});

export const addTvseries = tvSeries => ({
    type: ActionTypes.ADD_TVSERIES,
    payload: tvSeries
});

// @Favorites
export const postFavorite = podcastId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(podcastId));
    }, 2000);
};

export const addFavorite = podcastId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: podcastId
});

export const deleteFavorite = podcastId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: podcastId
});

// export function addNote(note) {
//     return {
//         type: ActionTypes.ADD_NOTE,
//         id: noteID ++,
//         note
//     }
// }

// export function deleteNote(id){
//     return {
//         type: ActionTypes.DELETE_NOTE,
//         payload: id
//     }
// }

