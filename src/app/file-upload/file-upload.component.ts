import { Component, OnInit } from '@angular/core';
import { FileProcessService } from '../services/file-process.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  nameOfFile: string = '';

  constructor(private fileProcessService: FileProcessService) {}

  ngOnInit(): void {}

  // Validate input file type and send for processing
  onFileChange(event: any) {
    this.nameOfFile = event.target.files[0].name;

    // Validate File Input Type
    if (
      !(this.nameOfFile.endsWith('.xlsx') || this.nameOfFile.endsWith('.xls'))
    )
      alert('File type not supported');
    // Send for Processing
    else this.fileProcessService.readInputFile(event.target.files[0]);
  }
}
