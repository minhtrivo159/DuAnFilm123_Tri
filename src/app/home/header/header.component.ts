import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
// isShowContent: false;

export class HeaderComponent implements OnInit {

  @Output() selectEmit = new EventEmitter();
  @Output() emitStatus = new EventEmitter();
  status = true;
  emitStatusChild() {
    this.emitStatus.emit(this.status);
  }
  select(value) {
    if (value === 'Phim') {
      this.selectEmit.emit('Phim');
    } else if (value === 'CumRap') {
      this.selectEmit.emit('CumRap');
    } else if (value === 'TinTuc') {
      this.selectEmit.emit('TinTuc');
    } else if (value === 'UngDung') {
      this.selectEmit.emit('UngDung');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
