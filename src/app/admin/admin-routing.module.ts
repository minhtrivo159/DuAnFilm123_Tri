import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { AdminComponent } from './admin.component';


const routesAdmin: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'admin', component: AdminComponent},
    {path: 'quan-ly-lich-chieu', component: QuanLyLichChieuComponent},
    {path: 'quan-ly-nguoi-dung', component: QuanLyNguoiDungComponent},
    {path: 'quan-ly-phim', component: QuanLyPhimComponent}
  ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(routesAdmin)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
