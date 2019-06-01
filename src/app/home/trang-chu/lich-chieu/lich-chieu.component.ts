import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit, OnDestroy {
  subService: Subscription;
  Subscription: any;
  DSPhim: any = [];

  constructor(private dsPhim: LayDanhSachPhimService) { }

  ngOnInit() {
    console.log(this.dsPhim);
    this.subService = this.dsPhim.LayDanhSachPhim().subscribe((result) => {
      this.DSPhim = result;
    }, (error) => {
      console.log(error);
    });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // hủy theo doi bien observable
  }
}
