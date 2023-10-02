import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceTableService {

  private apiUrl = 'https://us-central1-fe-ws-test.cloudfunctions.net/prices';

  constructor(
    private http: HttpClient) {

  }

  getPrice(paperSize: string): Observable<any> {
    // Tạo URL với tham số paper_size
    const url = `${this.apiUrl}?paper_size=${paperSize}`;

    // Gửi yêu cầu GET đến API
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Lỗi khi gọi API:', error);
        return throwError(error); // Chuyển tiếp lỗi để xử lý ở thành phần gọi API
      }))
  }
}
