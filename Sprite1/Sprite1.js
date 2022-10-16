/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 53,
        y: 41
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "arrière plan1";
    this.goto(-178, -98);
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.viesRouge = 5;
    while (true) {
      if (this.touching(this.sprites["ArmeBleu"].andClones())) {
        this.stage.vars.viesRouge += -1;
        yield* this.wait(0.3);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.viesRouge == 0) {
        this.stage.costume = "arrière plan3";
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(Color.rgb(199, 192, 0))) {
        if (this.keyPressed("up arrow")) {
          this.stage.vars.y += 10;
        } else {
          this.stage.vars.y = 0;
        }
      } else {
        this.stage.vars.y += -1;
      }
      this.y += this.stage.vars.y;
      yield;
    }
  }
}
