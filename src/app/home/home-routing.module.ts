import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './trang-chu/danh-sach-phim/danh-sach-phim.component';
import { LichChieuComponent } from './trang-chu/lich-chieu/lich-chieu.component';
import { HomeComponent } from './home.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { DangNhapComponent } from './trang-chu/dang-nhap/dang-nhap.component';
import { DangKyService } from '../Services/nguoi-dung/dang-ky.service';
import { DangKyComponent } from './trang-chu/dang-ky/dang-ky.component';
import { MuaVeComponent } from './mua-ve/mua-ve.component';

const routesHome: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', component: TrangChuComponent, children: [
        ]
      },

      {path: '', component: HomeComponent, children: [
        { path: 'signin', component: DangNhapComponent },
        { path: 'signup', component: DangKyComponent },
        ]
    },

      { path: 'lich-chieu', component: LichChieuComponent },
      { path: 'danh-sach-phim', component: DanhSachPhimComponent },
      { path: 'chi-tiet/:maphim', component: TrangChiTietComponent },
      { path: 'mua-ve/:malichchieu', component: MuaVeComponent},

    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routesHome)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

// Nhan dep trai
