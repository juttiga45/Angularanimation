import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "pipe-ex",
  templateUrl: "./pipe-ex.component.html",
  animations: [
    trigger("balloonEffect", [
      state(
        "initial",
        style({
          backgroundColor: "green",
          transform: "scale(1)"
        })
      ),
      state(
        "final",
        style({
          backgroundColor: "red",
          transform: "scale(1.5)"
        })
      ),
      transition("final=>initial", animate("1000ms")),
      transition("initial=>final", animate("1500ms"))
    ])
  ]
})
export class PipeExComponent {
  currentState = "initial";
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
}
