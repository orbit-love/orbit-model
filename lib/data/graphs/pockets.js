import {
  createCombos,
  createNodes,
  createEdges,
} from "lib/data/graphs/generate";
import { colors } from "lib/graph/styles";

const combos = [
  ...createCombos("pocketA", 1, { x: -400, y: 80 }),
  ...createCombos("pocketB", 1, { x: 0, y: -80 }),
];

const nodes = [
  ...createNodes(3, "pocketA-1", { size: 30 }),
  ...createNodes(4, "pocketB-1", { size: 30 }),
];

nodes.forEach((node) => {
  if (node.id.match(/m1-pocket[ABC]-1/)) {
    node.style.fill = colors.indigo600;
    node.style.lineWidth = 0;
  }
});

const edges = createEdges(nodes);

edges.push(
  {
    source: "m1-pocketA-1",
    target: "m1-pocketB-1",
    style: {
      lineWidth: 3,
    },
  },
  {
    source: "m1-pocketA-1",
    target: "m1-pocketC-1",
    style: {
      lineWidth: 3,
    },
  }
);

const data = {
  nodes,
  edges,
  combos,
};

export default data;
