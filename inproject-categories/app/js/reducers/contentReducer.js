import {FETCHING_CONTENT, GET_CONTENT_BY_CATEGORY, SET_CONTENT, SET_CURRENT_DATA, SET_CURRENT_CATEGORY} from "../actions/actions";
export default function reducer(state = {
    content: {},
    currCategory: {
        items: []
    },
    categoryContent: null,
    fetchingContent: false,
    currentData: null
}, action) {
    switch (action.type) {
        case SET_CONTENT: {
            return {
                ...state,
                content: action.payload
            }
        }
        case FETCHING_CONTENT: {
            return {
                ...state,
                fetchingContent: action.payload
            }
        }
        case GET_CONTENT_BY_CATEGORY: {
            return {
                ...state,
                content: action.payload
            }
        }
        case SET_CURRENT_DATA: {
            return {
                ...state,
                currentData: action.payload
            }
        }
        case SET_CURRENT_CATEGORY: {
            return {
                ...state,
                currCategory: action.payload
            }
        }
    }

    return state;
}