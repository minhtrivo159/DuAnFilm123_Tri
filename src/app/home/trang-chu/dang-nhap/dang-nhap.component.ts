import { Component, OnInit } from '@angular/core';
import { DangKyService } from 'src/app/Services/nguoi-dung/dang-ky.service';
import { Router } from '@angular/router';
import { $ } from 'jquery';
import { DangNhapService } from 'src/app/Services/nguoi-dung/dang-nhap.service';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  // status = true;
  // dangKyForm: any;
  // constructor(private dangKyService: DangKyService, private router: Router) { }

  dangNhapSub: Subscription;
  constructor(private dangNhapService: DangNhapService , private router: Router) { }
  ngOnInit() { }


  handleDangNhap(nguoiDung: any): void {
    this.dangNhapSub = this.dangNhapService.dangNhapNguoiDung(nguoiDung)
      .subscribe(
        res => {
          if (typeof res !== 'string') {
            localStorage.setItem('loginUser', JSON.stringify(res));
            this.router.navigate(['/home']);
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.dangNhapSub.unsubscribe();
  }
}
