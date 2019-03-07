import { Component, OnInit } from "@angular/core";
import {
  style,
  trigger,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  itemEmail: string = "fdjklsjlfjklsfjkl";
  emails = [];
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.email.subscribe(res => (this.emails = res));
    this._data.changeGoal(this.emails);
  }
  onCountItem() {
    this.emails.push(this.itemEmail);
    this.itemEmail = "";
    this.itemCount = this.emails.length;
    this._data.changeGoal(this.emails);
  }
}
