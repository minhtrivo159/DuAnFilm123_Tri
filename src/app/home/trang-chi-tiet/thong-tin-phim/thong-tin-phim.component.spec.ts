import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinPhimComponent } from './thong-tin-phim.component';

describe('ThongTinPhimComponent', () => {
  let component: ThongTinPhimComponent;
  let fixture: ComponentFixture<ThongTinPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
