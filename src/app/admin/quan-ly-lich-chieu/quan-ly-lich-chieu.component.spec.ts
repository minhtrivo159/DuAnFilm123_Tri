import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu.component';

describe('QuanLyLichChieuComponent', () => {
  let component: QuanLyLichChieuComponent;
  let fixture: ComponentFixture<QuanLyLichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyLichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
