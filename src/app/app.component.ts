import { trigger, state, style, transition, animate, } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted <=> normal', animate(800)),
    ]),
    trigger('WildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        animate(400, style({
          'background-color': 'orange',
          borderRadius: '50px'
        })),
        animate(800, style({

        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100px)',
          opacity: 0
        }),
        animate(300)
      ]),
      transition('* => void', [
      animate(300,  style({
        opacity: 0,
        transform: 'translateX(100px)'
      }),)
      ]),
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildstate = 'normal';
list = ['Milk', 'Sugar', 'Bread'];

onAnimate() {
  this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  this.wildstate == 'normal' ? this.wildstate = 'highlighted' : this.wildstate = 'normal';
  }

onShrink() {
  this.wildstate == 'normal' ? this.wildstate = 'shrunken' : this.wildstate = 'normal';
}

onAdd(item: string) {
  this.list.push(item);
  }
onDelete(item: string) {
  this.list.splice(this.list.indexOf(item), 1);
  }
}
