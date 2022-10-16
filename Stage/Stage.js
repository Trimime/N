/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière plan1", "./Stage/costumes/arrière plan1.svg", {
        x: 277,
        y: -115
      }),
      new Costume("arrière plan3", "./Stage/costumes/arrière plan3.svg", {
        x: 277,
        y: 156.42649446720648
      }),
      new Costume("arrière plan2", "./Stage/costumes/arrière plan2.svg", {
        x: 277,
        y: 154.68282773564462
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.y = 0;
    this.vars.viesRouge = 4;
    this.vars.viesBleu = 4;
    this.vars.gravit = 0;

    this.watchers.viesRouge = new Watcher({
      label: "vies rouge",
      style: "large",
      visible: true,
      value: () => this.vars.viesRouge,
      x: 240,
      y: 180
    });
    this.watchers.viesBleu = new Watcher({
      label: "vies bleu",
      style: "large",
      visible: true,
      value: () => this.vars.viesBleu,
      x: 670,
      y: 180
    });
  }
}
