import { v4 } from 'uuid';
import { StorageService } from './storage.service';
import { ICrudService } from '../interfaces/services/crud.service';
import { IBaseModel } from '../interfaces/models/base.model';

export class CrudService<T extends IBaseModel> implements ICrudService<T> {

  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  public get(id: string): T | undefined {
    const collection = this.getCollection();
    return collection.find(item => item.id === id);
  }

  public getAll(): T[] {
    const collection = this.getCollection();
    return collection;
  }

  public add(model: T): T {
    model.id = v4();
    const collection = this.getCollection();
    collection.push(model);
    StorageService.setItems<T>(this.collectionName, collection);
    return model;
  }

  public update(model: T): void {
    const collection = this.getCollection();
    const index = collection.findIndex(item => item.id === model.id);
    if (index > -1) {
      collection[index] = model;
      this.setCollection(collection);
    }
  }

  public delete(id: string): void {
    const collection = this.getCollection().filter(item => item.id !== id);
    this.setCollection(collection);
  }

  private getCollection(): T[] {
    return StorageService.getItems<T>(this.collectionName);
  }

  private setCollection(collection: T[]): void {
    StorageService.setItems<T>(this.collectionName, collection);
  }
}