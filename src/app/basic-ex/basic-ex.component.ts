import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "basic-ex",
  templateUrl: "./basic-ex.component.html",
  styleUrls: ["./basic-ex.component.css"],
  animations: [
    trigger("changeDivSize", [
      state(
        "initial",
        style({
          backgroundColor: "green",
          width: "100px",
          height: "100px"
        })
      ),
      state(
        "final",
        style({
          backgroundColor: "red",
          width: "200px",
          height: "200px"
        })
      ),
      transition("initial=>final", animate("1500ms")),
      transition("final=>initial", animate("1000ms"))
    ])
  ]
})
export class BasicExComponent {
  currentState = "initial";
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
}
