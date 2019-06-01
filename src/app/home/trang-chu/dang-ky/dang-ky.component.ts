import { Component, OnInit } from '@angular/core';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent implements OnInit {

  constructor(private dangKyService: DangKyService) { }

  ngOnInit() {
  }

  handleDangKy(nguoiDung: any) {
    nguoiDung.MaNhom = 'GP01';
    this.dangKyService.dangKyNguoiDung(nguoiDung)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
