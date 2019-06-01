import { Component, OnInit, Input } from '@angular/core';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
@Input() phim: LayDanhSachPhimService;

  constructor() { }


  ngOnInit() {

  }

}
