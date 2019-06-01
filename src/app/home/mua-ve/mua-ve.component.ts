import { Component, OnInit, OnDestroy, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LayThongTinPhimService } from 'src/app/Services/phim/lay-thong-tin-phim.service';
import { DSPhim } from 'src/app/Services/phim/phim';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { VeService } from 'src/app/Services/phim/ve.service';


@Component({
  selector: 'app-mua-ve',
  templateUrl: './mua-ve.component.html',
  styleUrls: ['./mua-ve.component.scss']
})
export class MuaVeComponent implements OnInit, OnDestroy {
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public MaLichChieu: string;
  public DanhSachGhe: any[] = [];
  subParam: Subscription;
  subService: Subscription;

  constructor(private avtRoute: ActivatedRoute,
    private layThongTinPhimService: LayThongTinPhimService,
    private veService: VeService,
    private router: Router
  ) { } // ActivatedRoute: là đối tượng để lấy tham số từ Url (get params url)

  maPhim = 0;
  // phim: DSPhim ;
  phim = [];
  // quantity = 1;


  // @Output() emitSanPham = new EventEmitter();

  LayTaiKhoanNguoiDung() {
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('loginUser'));
    if (nguoiDungHienTai !== null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Vui long dang nhap');
      return false;
    }
  }

  layThongTinVe() {
    const ve = {
      MaLichChieu: this.MaLichChieu,
      TaiKhoanNguoiDung: this.LayTaiKhoanNguoiDung(),
      DanhSachVe: this.dsGhe.DanhSachGheDangDat,
    };
    console.log(ve);
    this.veService.DatVe(ve).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  ngOnInit() {
    // this.subParam = this.avtRoute.params.subscribe((thamso: any) => {
    //   this.maPhim = thamso.maphim;
    //   // Gọi phương thức lấy thông tin phim
    //   // this.MaLichChieu = thamso.maLichChieu;
    //   // this.veService.LayChiTietPhongVe(this.MaLichChieu);
    //   this.LayChiTietPhim(thamso.maphim);
    //   console.log(this.maPhim);
    // });

    this.avtRoute.params
      .subscribe((thamso: any) => {
        this.MaLichChieu = thamso.maLichChieu;
        this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
          (res) => {
            this.DanhSachGhe = res.DanhSachGhe;
            console.log(res.DanhSachGhe);
          }
        );
      },
        (error) => { console.log(error); });
  }

//     this.avtRoute.params
//     .subscribe((result) => {
//       this.MaLichChieu = result.maLichChieu;
//       this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
//         (res) => {
//           this.DanhSachGhe = res.DanhSachGhe;
//           console.log(res.DanhSachGhe);
//         }
//       );
//     },
//       (error) => { console.log(error); });
// }


LayChiTietPhim(maPhim: number) {
  this.subService = this.layThongTinPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
    console.log(ketqua);
    this.phim = ketqua;
  },
    (err) => {
      console.log(err);
    });
}

ngOnDestroy() {
  this.subParam.unsubscribe();
  this.subService.unsubscribe();
}


}
