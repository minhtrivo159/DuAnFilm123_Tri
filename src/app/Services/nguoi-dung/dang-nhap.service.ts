import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {
  dangNhapNguoiDung(nguoiDung: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoiDung.TaiKhoan}&matkhau=${nguoiDung.MatKhau}`;
    return this.http.post(url, nguoiDung, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }
  constructor(private http: HttpClient) { }
  }
  // tslint:disable-next-line:align

