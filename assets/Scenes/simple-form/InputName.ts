import { _decorator, Component, Label, EditBox } from "cc";
const { ccclass, property } = _decorator;

@ccclass("InputName")
export class InputName extends Component {
  @property(Label)
  public labelText1: Label = null!;

  @property(EditBox)
  public editBox1: EditBox = null!;

  start() {}

  setFocus(event: EditBox, custom: string) {
    if (custom === "1") {
      this.labelText1.string = "Olá, " + this.editBox1.string;
      this.editBox1.string = "";
    }
  }
}
