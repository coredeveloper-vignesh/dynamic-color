import { Component, OnInit, VERSION } from '@angular/core';
import { ChangeTitleNameService } from './change-title-name.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private _changeTitleNameService: ChangeTitleNameService) {}

  value: any;
  ngOnInit(): void {
    this._changeTitleNameService.title.subscribe((res) => {
      this.value = res;
      console.log('t1' + res);
    });

    this._changeTitleNameService.sendData('typical');
  }

  ChangeUI() {
    let val1 = (Math.random() * 10).toFixed();
    let val2 = (Math.random() * 10).toFixed();
    let val3 = Math.random().toFixed();
    let res1 = '' + val1 + val2 + val3 + val1 + val2 + val3;
    let res2 = '' + 'd' + 'a' + val3 + 'b' + val2 + 'c';
    console.log('#' + res1);
    console.log('#' + res2);

    document.documentElement.style.setProperty('--secondary-color', `#${res1}`);
    document.documentElement.style.setProperty('--primary-color', `#${res2}`);
  }

  ChangeValue(e) {
    this._changeTitleNameService.sendData(e);
  }
}
