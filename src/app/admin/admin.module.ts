import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
     QuanLyNguoiDungComponent, QuanLyPhimComponent, QuanLyLichChieuComponent
  ]
})
export class AdminModule { }
