import { types } from "../types";

const urlBackend = 'http://localhost:4000/api';

const loadItems = (items) => ({
    type: types.loadItems,
    payload: items
})

const loadCurrentItem = (item) => ({
    type: types.loadCurrentItem,
    payload: item
})

export const asyncSearchItems = (text,offset=0) => {
    return async (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const body = await fetch(`${urlBackend}/items?q=${text}&offset=${offset}`, requestOptions)
                .then(response => response.json());
            if (body.success) {
                dispatch(loadItems(body.data));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const getItemByID = (id) => {
    return async (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const body = await fetch(`${urlBackend}/items/${id}`, requestOptions)
                .then(response => response.json());
            if (body.success) {
                dispatch(loadCurrentItem(body.data));
            }

        } catch (error) {
            console.log(error);
        }
    }
}
