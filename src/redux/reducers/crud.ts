import { CrudActions } from '../actions/action.types';
import { ICrudState, ICrudAction } from '../interfaces/reducers/crud.interface';

const initialState: ICrudState = {};

export const crudReducer = (state = initialState, action: ICrudAction) => {
    switch (action.type) {
        case CrudActions.CRUD_SET_COLLECTION:
            return {
                ...state,
                [action.payload.collection]: action.payload.data
            };
        default:
            return state;
    }
}