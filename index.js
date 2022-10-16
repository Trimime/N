import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import ArmeRouge from "./ArmeRouge/ArmeRouge.js";
import ArmeBleu from "./ArmeBleu/ArmeBleu.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -178,
    y: -101,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 3
  }),
  Sprite2: new Sprite2({
    x: 180,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 4
  }),
  ArmeRouge: new ArmeRouge({
    x: 142,
    y: -101,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 2
  }),
  ArmeBleu: new ArmeBleu({
    x: -180,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
