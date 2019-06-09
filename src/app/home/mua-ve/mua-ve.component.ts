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
export class MuaVeComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public MaLichChieu: number;
  public DanhSachGhe: any[] = [];
  // subParam: Subscription;
  // subService: Subscription;
  Subscription: any;
  constructor(private avtRoute: ActivatedRoute,
              private layThongTinPhimService: LayThongTinPhimService,
              private veService: VeService,
              private router: Router
  ) { } // ActivatedRoute: là đối tượng để lấy tham số từ Url (get params url)

  // maPhim = 0;
  // phim: DSPhim ;
  // phim = [];
  // quantity = 1;

  phim: DSPhim = JSON.parse(localStorage.getItem('ChiTietPhim'));
  // @Output() emitSanPham = new EventEmitter();
  tienVe = 0;
  tienCombo = 0;
  tongTien = 0;
  ghe: any;

  scrollToElement(id): void {
    const element = document.getElementById(id);
    console.log(element);
    // element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }

tongTienVe(tien) {
  this.tienVe = tien;
}

tongTienCombo(tien) {
  this.tienCombo = tien;
}

tongTienDat(): number {
  return this.tongTien = this.tienVe + this.tienCombo ;
}


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
    if (ve.DanhSachVe.length !== 0) {
      this.veService.DatVe(ve).subscribe(
        (result) => {
          console.log(result);
          alert('Đặt vé thành công !!!');
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Vui lòng chọn ghế');
    }
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
    // lay ma phim cua phim vua chon
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



    // this.subParam =
    this.avtRoute.params.subscribe((thamso) => {
      console.log(thamso)
      this.MaLichChieu = thamso.malichchieu;
      // cai nay la ma phim ma

      this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
        (res) => {
          // console.log(this.MaLichChieu)
          console.log(res);
          this.DanhSachGhe = res.DanhSachGhe;
        }
      );
    },
      (error) => { console.log(error); });
    const phim: DSPhim = JSON.parse(localStorage.getItem('ChiTietPhim'));
    console.log(typeof phim);
}






// LayChiTietPhim(maPhim: number) {
//   this.subService = this.layThongTinPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
//     console.log(ketqua);
//     this.phim = ketqua;
//   },
//     (err) => {
//       console.log(err);
//     });
// }

// ngOnDestroy() {
//   this.subParam.unsubscribe();
//   // this.subService.unsubscribe();
// }

}


