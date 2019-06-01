import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DangKyService {

  dangKyNguoiDung(nguoiDung: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoiDung.TaiKhoan}&matkhau=${nguoiDung.MatKhau}`;
    return this.http.post(url, nguoiDung, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }
  constructor(private http: HttpClient) { }
}
