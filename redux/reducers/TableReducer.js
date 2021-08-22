import * as T from "../types";


const initialState = {
    tableData: [],
    tableData2: [],
}

export const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case T.SET_TABLE: return { ...state, tableData: action.payload };
        case T.SET_TABLE2: return { ...state, tableData2: action.payload };
        default: return state;
    }
}

