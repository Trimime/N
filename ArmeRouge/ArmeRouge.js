/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ArmeRouge extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arme rouge", "./ArmeRouge/costumes/arme rouge.svg", {
        x: 28.084566394691223,
        y: 13.256206533240459
      })
    ];

    this.sounds = [new Sound("pop", "./ArmeRouge/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.keyPressed("space")) {
        this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Sprite1"].y - this.y,
            this.sprites["Sprite1"].x - this.x
          )
        );
        this.visible = true;
        while (!this.touching("edge")) {
          this.move(20);
          yield;
        }
        this.visible = false;
      }
      yield;
    }
  }
}
