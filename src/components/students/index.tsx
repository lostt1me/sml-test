import { Column } from 'material-table';
import { Marks } from '../../enums/marks.enum';
import { IStudent } from '../../interfaces/models/student.interface';
import { generateCrudComponent } from '../../shared/components/crud/helpers';

export const Students = () => {
  const columns: Column<IStudent>[] = [
    { title: 'FIO', field: 'fio' },
    { title: 'Birthday', field: 'birthday', type: 'date' },
    { title: 'Mark', field: 'mark', lookup: Marks}
  ];
  return generateCrudComponent('students', columns);
}