import { Component } from '@angular/core';
import {Observable, Observer, range} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable: Observable<string>;

  constructor(){
    this.observable = range(1,10)

      .pipe(
        tap(x => {
          localStorage.setItem(''+x,''+x);
        }),
        filter(value => value > 5),
            map(value => {
            return 'Row ' + value;
            }),
            map(value => 'Second map ' + value)
      );


    // let observable: Observable<number>
    //   = Observable.create((observer: Observer<number> ) => {
    //   for(let i = 1; i <=10;i++){
    //     observer.next(i);
    //   }
    // });
  }

  onClick(){
    let observable: Observable<string>
      = Observable.create((observer: Observer<string> ) => {
        observer.next("Vasya");
        observer.next("Petya");
        observer.next("Sofa");
        observer.complete();
    });

    // let observable1: Observable<string>
    //   = Observable.create(function (observer: Observer<string>) {
    //
    // });


    observable.subscribe(
      value => {
        console.log(value);
      },
      error => {

      },
      () => {
        console.log("Complete");
      }
    );
  }


  onClick2(){
    this.observable
      .subscribe(
      value =>
          console.log(value)
    )
  }
}
