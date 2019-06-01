import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LayDanhSachPhimService {

  constructor(private http: HttpClient) { }

  public LayDanhSachPhim(): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP09`);
    return obs;
  }
}
