import { Injectable } from '@angular/core';
import { DSPhim } from './phim';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LayThongTinPhimService {

  constructor(private http: HttpClient) { }

    public LayChiTietPhim(maPhim): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laychitietphim?maphim=${maPhim}`);
    return obs;
}

public LayChiTietPhongVe(MaLichChieu: any): Observable<any> {
  const obs = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`);
  return obs;
}

}
