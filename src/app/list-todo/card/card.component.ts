import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() todo;
  openCard: boolean = false;

  colors = ['#61bd4f','#eb5a46','#f2d600','#c377e0'];

  checkBorder(border) {
    switch (border) {
      case 'value1':
        return this.colors[0]
        break;
      case 'value2':
        return this.colors[1]
        break;
      case 'value3':
        return this.colors[2]
        break;
      case 'value4':
        return this.colors[3]
        break;
      default:
        return this.colors[3]
        break;
    }
  }

  open() {
    if(this.todo.text.length > 20) this.openCard = !this.openCard;
  }
  verifyLength(value) {
    return value.length > 20;
  }

  ngOnInit() {}
}
