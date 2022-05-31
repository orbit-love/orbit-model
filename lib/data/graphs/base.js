import { createSimpleNode, createSimpleEdge } from "lib/data/graphs/generate";

const nodes = [
  createSimpleNode("jennifer", 95),
  createSimpleNode("david", 50),
  createSimpleNode("ursula", 60),
  createSimpleNode("tony", 60),
  createSimpleNode("mary", 60),
  createSimpleNode("ted", 55),
];

const edges = [
  createSimpleEdge("jennifer", "david", 3),
  createSimpleEdge("jennifer", "ursula", 4),
  createSimpleEdge("jennifer", "tony", 7),
  createSimpleEdge("jennifer", "mary", 1),
  createSimpleEdge("mary", "david", 6),
  createSimpleEdge("mary", "ted", 4),
  createSimpleEdge("david", "ted", 4),
];

const edgesWithoutLabels = edges.map(({ source, target, _label, _style }) => ({
  source: source,
  target: target,
}));

export const withLabels = {
  nodes,
  edges,
};

export const noLabels = {
  nodes,
  edges: edgesWithoutLabels,
};

export default noLabels;
