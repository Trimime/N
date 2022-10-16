/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ArmeBleu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ArmeBleu/costumes/costume1.svg", {
        x: 29.432906934244244,
        y: 13.256206973978607
      })
    ];

    this.sounds = [new Sound("pop", "./ArmeBleu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.keyPressed(0)) {
        this.goto(this.sprites["Sprite2"].x, this.sprites["Sprite2"].y);
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Sprite2"].y - this.y,
            this.sprites["Sprite2"].x - this.x
          )
        );
        this.visible = true;
        while (!this.touching("edge")) {
          this.move(-20);
          yield;
        }
        this.visible = false;
      }
      yield;
    }
  }
}
