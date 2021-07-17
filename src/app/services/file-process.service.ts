import { Injectable } from '@angular/core';
import { read, utils } from 'xlsx';
import { InputData } from '../models/input-data.model';

@Injectable({
  providedIn: 'root',
})
export class FileProcessService {
  result: InputData[] = [];

  constructor() {}

  readInputFile(fileUploaded: File): void {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let arrayBuffer: any = fileReader.result;
      const data = new Uint8Array(arrayBuffer);
      const arr = new Array();
      for (let i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);

      const bstr = arr.join('');
      const workbook = read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      this.result = utils.sheet_to_json(worksheet);
      console.log(this.result);
    };
    fileReader.readAsArrayBuffer(fileUploaded);
  }

  displayInputFile(): InputData[] {
    return this.result;
  }
}
