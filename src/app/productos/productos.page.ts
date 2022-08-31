
 import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  cost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Platanos', weight: 1, cost: 500},
  {position: 2, name: 'Brocoli', weight: 1, cost: 500},
  {position: 3, name: 'Cabolla', weight: 1, cost: 500},
  {position: 4, name: 'Kiwi', weight: 1, cost: 500},
  {position: 5, name: 'Naranja', weight: 1, cost: 500},
  {position: 6, name: 'Sandia', weight: 1, cost: 1000},
  {position: 7, name: 'Tomate', weight: 1, cost: 500},

];

/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'cost'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
