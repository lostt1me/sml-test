import { CrudService } from "../../shared/services/crud.service";
import { CrudActions } from "./action.types";
import { IBaseModel } from "../../shared/interfaces/models/base.model";
import { ICrudAction } from "../interfaces/reducers/crud.interface";

export const getCrudData = (collection: string): ICrudAction => {
    const service = new CrudService(collection);
    const data = service.getAll();
    return {
        type: CrudActions.CRUD_SET_COLLECTION,
        payload: {
            collection,
            data
        }
    };
}

export const addCrudData = (collection: string, model: IBaseModel): ICrudAction => {
    const service = new CrudService(collection);
    service.add(model);
    const data = service.getAll();
    return {
        type: CrudActions.CRUD_SET_COLLECTION,
        payload: {
            collection,
            data
        }
    };
}

export const updateCrudData = (collection: string, model: IBaseModel): ICrudAction => {
    const service = new CrudService(collection);
    service.update(model);
    const data = service.getAll();
    return {
        type: CrudActions.CRUD_SET_COLLECTION,
        payload: {
            collection,
            data
        }
    };
}

export const deleteCrudData = (collection: string, id: string): ICrudAction => {
    const service = new CrudService(collection);
    service.delete(id);
    const data = service.getAll();
    return {
        type: CrudActions.CRUD_SET_COLLECTION,
        payload: {
            collection,
            data
        }
    };
}