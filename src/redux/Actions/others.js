import { UPDATE_USER } from "../Constants";

export const UpdateUser = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: data,
    });
};