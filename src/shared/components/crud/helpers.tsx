import React from 'react'
import { Column } from "material-table";
import { IBaseModel } from "../../interfaces/models/base.model";
import { CrudComponent } from './crud';

export const generateCrudComponent = <T extends IBaseModel>(collectionName: string, columns: Column<T>[]) => (
    <CrudComponent
        columns={columns}
        collectionName={collectionName}
    />
);
