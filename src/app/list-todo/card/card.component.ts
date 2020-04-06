import { Component, OnInit, Input } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() todo;
  openCard: boolean = false;

  colors: string[] = ['#61bd4f','#eb5a46','#f2d600','#c377e0'];

  checkBorder(border: string): string {
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

  open(e): boolean {
    if(this.todo.text.length >= 30) return this.openCard = !this.openCard;
  }
 
  verifyLength(value: string): boolean {
    return value.length >= 30;
  }



  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  ngOnInit() {
  
  }


}
