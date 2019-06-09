import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import  $  from 'jquery';
import { Subscription } from 'rxjs';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';


declare var $: any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit, OnDestroy{
  subService: Subscription;
  Subscription: any;
  DSPhim: any = [];

  constructor(private dsPhim: LayDanhSachPhimService) { }

  ngOnInit() {
    console.log(this.dsPhim);
    this.subService =
    this.dsPhim.LayDanhSachPhim().subscribe((result) => {
      this.DSPhim = result;
      // setTimeout(() => {
      //   $('.owl-carousel').owlCarousel({
      //     loop: true,
      //     margin: 10,
      //     nav: true,
      //     responsive: {
      //       0: {
      //         items: 1
      //       },
      //       600: {
      //         items: 3
      //       },
      //       1000: {
      //         items: 4
      //       }
      //     }
      //   });
      // }, 1);
      console.log(result);
    },
    error => { console.log(error); },
  );

  }

  ngOnDestroy() {
    this.subService.unsubscribe(); // hủy theo doi bien observable
  }

}
