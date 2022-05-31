import { colors, fonts } from "lib/graph/styles";

export const defaultNodeStyle = {
  fill: colors.slate200,
  stroke: colors.slate200,
  lineWidth: 1,
};

export const defaultNode = {
  type: "circle",
  style: defaultNodeStyle,
  labelCfg: {
    style: {
      fontFamily: fonts.family,
      fontStyle: fonts.style,
      fontSize: 12,
    },
  },
};

// labelCfg may not be supported here
export const nodeStateStyles = {
  selected: {
    lineWidth: 3,
    fill: "#FFFFFF",
    stroke: colors.indigo500,
    shadowColor: "",
    labelCfg: {
      style: {},
    },
  },
};

export const defaultEdgeStyle = {
  stroke: colors.slate600,
  shadowColor: "",
  lineWidth: 1,
};

export const defaultEdge = {
  type: "linear",
  style: defaultEdgeStyle,
  labelCfg: {
    refY: 20,
    style: {
      fill: colors.slate200,
      stroke: colors.slate400,
      fontSize: 17,
    },
  },
};

export const defaultComboStyle = {
  fill: colors.slate900,
  stroke: colors.slate700,
  fillOpacity: 0.15,
  shadowColor: "",
};

// https://antv-g6.gitee.io/en/docs/api/Items/comboProperties
export const defaultCombo = {
  style: defaultComboStyle,
  labelCfg: {
    style: {
      fill: colors.slate200,
    },
  },
};

export const comboStateStyles = {
  selected: {
    fill: colors.slate400,
    stroke: colors.indigo500,
    lineWidth: 2,
    shadowColor: "",
  },
};
