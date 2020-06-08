import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, first} from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class PDFViewerService {
    constructor(private http: HttpClient) {}

    get() {
        return this.http.get('https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf', { responseType: 'blob'})
            .pipe(
                map(res => this.convertFileToArrayBuffer(res))
            ).toPromise()
    }

    uploadFile(file) {
        return this.convertFileToArrayBuffer(file);
    }

    async convertFileToArrayBuffer(file) {
        return await new Promise((resolve, reject) => {
            if (file.type !== "application/pdf") {
              reject(new Error("Invalid file type, please load a PDF."));
              return;
            }
        
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                resolve(e.target.result);
            };
            reader.onerror = (err => {
                reject(new Error(err.target.error.message))
            })
            reader.readAsArrayBuffer(file);
          })
    }
}