import { Component, OnInit,Input } from '@angular/core';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';

@Component({
  selector: 'app-item-lich-chieu',
  templateUrl: './item-lich-chieu.component.html',
  styleUrls: ['./item-lich-chieu.component.scss']
})
export class ItemLichChieuComponent implements OnInit {
  @Input() phim: LayDanhSachPhimService;
  constructor() { }

  ngOnInit() {
  }

}
