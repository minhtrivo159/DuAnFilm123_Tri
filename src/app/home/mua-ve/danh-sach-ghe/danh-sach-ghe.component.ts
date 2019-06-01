import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit, OnChanges {




@Input() mangGhe: any[] = [];
soGheDaChon = 0;
soGheConTrong: number;
DanhSachGheDangDat = [];
DanhSachGheDangDat2 = [];
changes: any;
  datGheParent(status: any, ghe: { MaGhe: number; GiaVe: number; }) {
    const ve: { MaGhe: number, GiaVe: number } = {
      MaGhe: ghe.MaGhe,
      GiaVe: ghe.GiaVe
    };
    if (status) {
      this.soGheDaChon++;
      this.soGheConTrong--;
      this.DanhSachGheDangDat.push(ve);
      this.DanhSachGheDangDat2.push(ghe);
      // console.log(this.DanhSachGheDangDat);
    } else {
      this.soGheDaChon--;
      this.soGheConTrong++;
      for (const index in this.DanhSachGheDangDat) {
        if (this.DanhSachGheDangDat[index].MaGhe === ghe.MaGhe) {
          this.DanhSachGheDangDat.splice(parseInt(index, 10), 1);
        }
      }
      for (const index in this.DanhSachGheDangDat2) {
        if (this.DanhSachGheDangDat2[index].MaGhe === ghe.MaGhe) {
          this.DanhSachGheDangDat2.splice(parseInt(index), 1);
        }
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:variable-name
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.soGheConTrong = this.mangGhe.length;
  //   for (const ghe of this.mangGhe) {
  //     if (ghe.DaDat) {
  //       this.soGheConTrong--;
  //     }
  //   }
  // }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
}
