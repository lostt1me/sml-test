import { IBaseModel } from "../../../shared/interfaces/models/base.model";
import { CrudActions } from "../../actions/action.types";

export interface ICrudState {    
    [key: string]: IBaseModel[];
};

export interface ICrudAction {
    type: CrudActions,
    payload: ICrudPayload
}

interface ICrudPayload {
    collection: string;
    data: IBaseModel[];
}