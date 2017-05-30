import fetch from "isomorphic-fetch";

import {
    FETCHING_CONTENT,
    GET_CONTENT_BY_CATEGORY,
    SET_CONTENT,
    SET_CURRENT_DATA,
    SET_CURRENT_CATEGORY
} from "../actions/actions";
import {API_URL, API_CATEGORIES, API_CATEGORY_BY_NAME} from "../constants/credentials";
// const content = {
//     category1: [
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//         {value: 'data1'},
//     ],
//     category2: [
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//         {value: 'data2'},
//     ],
//     category3: [
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//         {value: 'data3'},
//     ],
//     category4: [
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//         {value: 'data4'},
//     ],
//     category5: [
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//         {value: 'data5'},
//     ],
//     category6: [
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//         {value: 'data6'},
//     ],
//     category7: [
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//         {value: 'data7'},
//     ]
// };

export function fetchingContent(value) {
    return {
        type: FETCHING_CONTENT,
        payload: value
    };
}

export function getContentByCategoryName(categoryName) {
    return (dispatch, getState) => {
        dispatch(fetchingContent(true));

        const {content} = getState();

        if (content && content.content.length) {
            const categories = content
                ? content.content || []
                : [];


            const data = categories && categories.length
                ? categories.filter((category) => {
                    return category.value === categoryName;
                })
                : [];

            dispatch({type: SET_CURRENT_CATEGORY, payload: data});
            dispatch(fetchingContent(false));
        }
    }
}

export function fetchContent() {
    console.log("FETCHING CONTENT");
    return (dispatch, getState) => {
        console.log("FETCHING CONTENT 2");
        dispatch(fetchingContent(true));

        return fetch(API_URL + API_CATEGORIES, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                const data = json ? json : [];
                console.log("JSON DATA: ", data);
                dispatch({type: SET_CONTENT, payload: data});
                dispatch(fetchingContent(false));
            });
    }
}

export function getDataById(id, categoryName) {
    return (dispatch, getState) => {
        const {content} = getState();

        if (content && content.content.length) {
            const categories = content
                ? content.content || []
                : [];


            let data = {};

            if(categories && categories.length) {
                let categoryWithRequiredItem = categories.filter((category) => {
                    const reqItemsLength = category.items.filter((item) => {

                        return item.id === id;
                    })
                    return reqItemsLength.length === 1;
                })[0];

                if(categoryWithRequiredItem) {
                    data = categoryWithRequiredItem.items.filter((item) => {

                        return item.id === id;
                    })[0];

                }
            }

            dispatch({type: SET_CURRENT_DATA, payload: data});
            dispatch(fetchingContent(false));
        }
    };
}

// HELPER FUNCTIONS
function getItems(categories, categoryName) {
    console.log("NAME", categoryName);

    console.log("FOUND CATEGORY: ", categories
        .filter((category) => {
            console.log("CATEGORY NAME: ", category.value, "NAME: ", categoryName, "IF OK: ", category.value === categoryName)
            return category.value === categoryName
        }));
    const items = categoryName
        ? categories
            .filter((category) => {
                return category.value === categoryName;
            })
            .map((category) => {
                return category.items;
            })
        : [];
    console.log("FOUND ITEMS: ", items);
    return items;
}