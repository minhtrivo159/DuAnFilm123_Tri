import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

declare var $: any;
import { $ } from 'jquery';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit,OnDestroy {

  constructor(private dsPhim: LayDanhSachPhimService) { }
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  subService: Subscription;
  Subscription: any;
  DSPhim: any = [];
  dangchieuStatus = true;

  contentModal = '';
  HienPhimDangChieu() {
    this.dangchieuStatus = true;
  }
  HienPhimSapChieu() {
    this.dangchieuStatus = false;
  }

  showContent(trailer: string) {
    this.contentModal = trailer;
  }
  close() {
    $('.iframe-youtube').each(function() {
      $(this).attr('src', $(this).attr('src'));
    });
  }

  ngOnInit() {
    console.log(this.dsPhim);
    this.subService = this.dsPhim.LayDanhSachPhim().subscribe((result) => {
      this.DSPhim = result;
      console.log(result);
    },
    error => { console.log(error); },
  );
}

  ngOnDestroy() {
    this.subService.unsubscribe(); // hủy theo doi bien observable
  }

}
