import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  // template: `<h1>Hello {{name}}!</h1>`,
  styleUrls: ['./hello.component.css'],
  // styles: ['h1 {color: springgreen;}']
})
export class HelloComponent {
    name : string = 'Indore';
    color : string = '';

    greet() : void {
      const nameVal = (<HTMLInputElement>document.getElementById('userNameId')).value;
      if(nameVal !== "")
      alert('Welcome ' + nameVal);
    };

    onInput(e, inputType) : void {
      e = <HTMLInputElement>e;
      if(inputType == 'color') this.color = e.target.value;
      else this.name = e.target.value;
    }
}
