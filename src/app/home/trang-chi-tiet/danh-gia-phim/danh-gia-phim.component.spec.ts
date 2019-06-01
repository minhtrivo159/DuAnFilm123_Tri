import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaPhimComponent } from './danh-gia-phim.component';

describe('DanhGiaPhimComponent', () => {
  let component: DanhGiaPhimComponent;
  let fixture: ComponentFixture<DanhGiaPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhGiaPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
