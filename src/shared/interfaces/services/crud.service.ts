import { IBaseModel } from "../models/base.model";

export interface ICrudService<T extends IBaseModel> {
  get(id: string): T | undefined;
  getAll(): T[];
  add(model: T): T;
  update(model: T): void;
  delete(id: string): void;
}