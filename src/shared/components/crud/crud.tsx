import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { addCrudData, updateCrudData, deleteCrudData, getCrudData } from '../../../redux/actions/crud.actions';
import { IStore } from '../../../redux/interfaces/store/interface';
import { IBaseModel } from '../../interfaces/models/base.model';

interface ICrudProps<T extends IBaseModel> {
  collectionName: string;
  columns: Column<T>[];
}

export const CrudComponent = <T extends IBaseModel>(props: ICrudProps<T>) => {
  const { columns, collectionName } = props;
  const dispatch = useDispatch();
  const { data } = useSelector((state: IStore) => ({
    data: state.crud[collectionName] as T[]
  }));

  useEffect(() => {
    dispatch(getCrudData(collectionName));
  }, [collectionName, dispatch])

  return (
    <MaterialTable
      title={collectionName}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            resolve();
            dispatch(addCrudData(collectionName, newData));
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            resolve();
            if (oldData) {
              dispatch(updateCrudData(collectionName, newData));
            }
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            resolve();
            dispatch(deleteCrudData(collectionName, oldData.id));
          }),
      }}
    />
  );
}