import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLichChieuComponent } from './item-lich-chieu.component';

describe('ItemLichChieuComponent', () => {
  let component: ItemLichChieuComponent;
  let fixture: ComponentFixture<ItemLichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
