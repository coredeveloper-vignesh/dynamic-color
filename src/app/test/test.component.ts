import { Component, OnInit } from '@angular/core';
import { ChangeTitleNameService } from '../change-title-name.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private _changeTitleNameService: ChangeTitleNameService) {}
  val: any;

  ChangeColor(e) {
    document.documentElement.style.setProperty('--secondary-color', e);
    this._changeTitleNameService.sendData(e);
  }

  value:any
  ngOnInit() {
    this._changeTitleNameService.title.subscribe((res) => this.value=res);
  }
}
