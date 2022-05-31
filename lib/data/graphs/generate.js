import { colors } from "lib/graph/styles";

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
const createSimpleNode = (id, size = 50, props = {}) => {
  return createNodes(1, { id, size, ...props, label: capitalize(id) })[0];
};

// https://antv-g6.gitee.io/en/docs/manual/middle/elements/nodes/defaultNode
const createNodes = (n, comboId, props = {}) => {
  const nodes = [];
  if (typeof comboId === "object") {
    props = comboId;
  }
  for (var i = 1; i < n + 1; i++) {
    var id = props.id || "m" + i + "-" + comboId;
    const node = {
      id,
      size: 25,
      style: {},
      ...props,
    };
    if (comboId) {
      node.cluster = comboId;
      node.comboId = comboId;
    }
    nodes.push(node);
  }
  return nodes;
};

const createSimpleEdge = (source, target, weight, props = {}) => {
  return {
    source,
    target,
    label: weight,
    style: {
      lineWidth: weight,
    },
    ...props,
  };
};

// https://antv-g6.gitee.io/en/docs/manual/middle/elements/edges/defaultEdge
// filter out edges randomly like so:
// edges = edges.filter(() => (getRandomInt(100) >= 85 ? true : false));
const createEdges = (nodes, props = {}) => {
  const edges = [];
  for (var i = 0; i < nodes.length; i++) {
    var sourceNode = nodes[i];
    for (var j = 0; j < nodes.length; j++) {
      var targetNode = nodes[j];
      if (
        sourceNode.id != targetNode.id &&
        sourceNode.comboId === targetNode.comboId
      ) {
        edges.push({
          source: sourceNode.id,
          target: targetNode.id,
          ...props,
        });
      }
    }
  }
  return edges;
};

// https://antv-g6.gitee.io/en/docs/manual/middle/elements/combos/defaultCombo
const createCombos = (base, n, props = {}) => {
  const combos = [];
  for (var i = 1; i < n + 1; i++) {
    const id = base + "-" + i;
    const parentId = i == n ? null : base + "-" + (i + 1);
    const color = 5 + i;
    combos.push({
      id,
      parentId,
      // label: id,
      padding: 20,
      style: {
        fill: colors["slate" + color + "00"],
        stroke: colors["slate" + color + "00"],
      },
      ...props,
    });
  }
  return combos;
};

export {
  createSimpleNode,
  createSimpleEdge,
  createNodes,
  createCombos,
  createEdges,
};
