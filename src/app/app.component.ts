import { trigger, state, style, transition, animate, keyframes, group, } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    //animated boxes
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
    ]),
    //animated boxes with the option to shrink
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
    //list item enter and leave animation
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
    //
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            trasnform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transfrom: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ])
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

  animationStarted(event: any) {
    console.log(event);
  }
  animationEnded(event: any) {
    console.log(event);
  }
}
