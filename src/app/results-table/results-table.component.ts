import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/interfaces/results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results: Result[] | undefined;

  selectedRowIndex: number | null = null;

  constructor() { }

  ngOnInit(): void { }

  selectRow(index: number): void {
    this.selectedRowIndex = index;
  }

  isSelectedRow(index: number): boolean {
    return index == this.selectedRowIndex;
  }

  getPodiumForSelectedResult(): string[] {
    return this.results![this.selectedRowIndex!].podium;
  }

  hidePodium(): void {
    this.selectedRowIndex = null;
  }
}
