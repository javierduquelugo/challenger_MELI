import { types } from '../types';

const initialState = { items: [], offset: 0, total: 0, currentItem: null};

export const itemsReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        
        case types.loadItems:
            return {
                items: [...action.payload.results],
                offset: action.payload.paging.offset,
                total: action.payload.paging.total
            }

        case types.loadCurrentItem:
            return {
                currentItem: action.payload
            }

        default:
            return state;
    }
}