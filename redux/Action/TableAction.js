import TableData from "../../data/TableData"
import { dispatch } from "../store";
import * as T from "../types";
import TableData2 from "../../data/TableData2";
export const setTable = () => {
    const action = { type: T.SET_TABLE, payload: TableData };
    dispatch(action);
}
export const setTable2 = () => {
    const action = { type: T.SET_TABLE2, payload: TableData2 };
    dispatch(action);
}