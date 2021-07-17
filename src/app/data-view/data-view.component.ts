import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputData } from '../models/input-data.model';
import { FileProcessService } from '../services/file-process.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  fileItems!: BehaviorSubject<InputData[]>;

  constructor(private fileProcessService: FileProcessService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.fileItems = this.fileProcessService.result;
  }
}
