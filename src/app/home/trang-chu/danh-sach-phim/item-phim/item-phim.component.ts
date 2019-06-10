import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LayDanhSachPhimService } from 'src/app/Services/phim/lay-danh-sach-phim.service';
import { DSPhim } from 'src/app/Services/phim/phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
@Input() phim: DSPhim;
@Output() evtTrailer = new EventEmitter();
TrailerPhim: any;
emitTrailer() {
  let trailer: any = this.phim.Trailer;
  trailer = trailer.split('watch?v=');
  this.TrailerPhim = trailer[0] + 'embed/' + trailer[1];
  this.evtTrailer.emit(this.TrailerPhim);
}


  constructor() { }


  ngOnInit() {

  }

}
