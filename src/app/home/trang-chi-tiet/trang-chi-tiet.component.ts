import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayThongTinPhimService } from 'src/app/Services/phim/lay-thong-tin-phim.service';
import { DSPhim } from 'src/app/Services/phim/phim';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit, OnDestroy {
  constructor(private avtRoute: ActivatedRoute,
              private layThongTinPhimService: LayThongTinPhimService,
              private router: Router
  ) { } // ActivatedRoute: là đối tượng để lấy tham số từ Url (get params url)


  subParam: Subscription;
  subService: Subscription;

  isShowContent = false;
  maPhim: number = 0;
  // phim: DSPhim;
  phim = [];

  goHome(check) {
    if (check) {
      this.router.navigate(['/home']);
    }
  }
  getId(id) {
    console.log(id);
    localStorage.setItem('Id', JSON.stringify(id));
  }

  scrollToElement(element): void {
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
  ngOnInit() {
    this.subParam = this.avtRoute.params.subscribe((thamso: any) => {
      this.maPhim = thamso.maphim;
      // Gọi phương thức lấy thông tin phim
      this.LayChiTietPhim(thamso.maphim);
      console.log(this.maPhim);
    });
  }
  LayChiTietPhim(maPhim: number) {
    this.subService = this.layThongTinPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
      localStorage.setItem('ChiTietPhim', JSON.stringify(ketqua));
      console.log(ketqua);
      this.phim = ketqua;
      this.isShowContent = true;
    },
      (err) => {
        console.log(err);
      });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
  }

}


