/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 45,
        y: 39
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.viesBleu = 5;
    this.stage.vars.viesRouge = 5;
    while (true) {
      if (this.touching(this.sprites["ArmeRouge"].andClones())) {
        this.stage.vars.viesBleu += -1;
        yield* this.wait(0.3);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(180, -97);
    while (true) {
      if (this.keyPressed(3)) {
        this.x += 10;
      }
      if (this.keyPressed(1)) {
        this.x += -10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.viesBleu == 0) {
        this.stage.costume = "arrière plan2";
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(Color.rgb(199, 192, 0))) {
        if (this.keyPressed(5)) {
          this.stage.vars.gravit += 10;
        } else {
          this.stage.vars.gravit = 0;
        }
      } else {
        this.stage.vars.gravit += -1;
      }
      this.y += this.stage.vars.gravit;
      yield;
    }
  }
}
