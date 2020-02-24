import { IStorageService } from "../interfaces/services/storage.service";

export class StorageService implements IStorageService {
  public static getItems<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    if (!data) {
      return [];
    }
    return JSON.parse(data) as T[];
  }

  public static setItems<T>(key: string, collection: T[]): void {
    const dataString = JSON.stringify(collection);
    localStorage.setItem(key, dataString);
  }
}