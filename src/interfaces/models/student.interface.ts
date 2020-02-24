import { IBaseModel } from "../../shared/interfaces/models/base.model";
import { Marks } from "../../enums/marks.enum";

export interface IStudent extends IBaseModel {
    fio: string;
    birthday: Date;
    mark: Marks
}