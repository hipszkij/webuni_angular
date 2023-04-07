import { Component } from '@angular/core';
import { resultsDataSource } from 'src/data/results_data';
import { Result } from 'src/interfaces/results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1_results';

  resultsData: Result[] = resultsDataSource;
}
