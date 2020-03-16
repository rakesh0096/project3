import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<any>({});
  currentData = this.dataSource.asObservable(); 

  constructor(data: any) {
    this.dataSource.next(data);
   }
}
