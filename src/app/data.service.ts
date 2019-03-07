import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private emails = new BehaviorSubject<any>([
    "The initial goal",
    "Another silly life goal"
  ]);
  email = this.emails.asObservable();
  constructor() {}

  changeGoal(email) {
    this.emails.next(email);
  }
}
