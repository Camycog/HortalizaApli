import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Platanos', weight: 1, symbol: 'H'},
  {position: 2, name: 'Brocoli', weight: 1, symbol: 'He'},
  {position: 3, name: 'Cabolla', weight: 1, symbol: 'Li'},
  {position: 4, name: 'Kiwi', weight: 1, symbol: 'Be'},
  {position: 5, name: 'Naranja', weight: 1, symbol: 'B'},
  {position: 6, name: 'Sandia', weight: 1, symbol: 'C'},
  {position: 7, name: 'Tomate', weight: 1 symbol: 'N'},

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