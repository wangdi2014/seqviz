import PUC from "./parts/pUC";
import { Viewer } from "./viewer";

const defaultOptions = {
  viewer: "both",
  showAnnotations: true,
  showPrimers: true,
  showComplement: true,
  showIndex: true,
  zoom: { linear: 50 },
  bpColors: { A: "#FFF" },
  colors: [],
  onSelection: () => {},
  onSearch: () => {},
  searchNext: {
    key: "a",
    meta: false,
    ctrl: false,
    shift: false,
    alt: false
  },
  searchQuery: { query: "GCGG" },
  backbone: "",
  enzymes: [],
  annotations: [
    {
      name: "test_annotation",
      start: 0,
      end: 15,
      direction: "FORWARD" // old prop-type, still supported
    }
  ]
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  let viewer = Viewer(div, { ...defaultOptions, ...PUC });

  viewer.render();
});

it("renders while querying an iGEM part", () => {
  const div = document.createElement("div");
  let viewer = Viewer(div, {
    ...defaultOptions,
    part: "BBa_K1598008",
    backbone: "pSB1C3"
  });

  viewer.render();
});

it("updates props with setState", () => {
  const div = document.createElement("div");
  let viewer = Viewer(div, { ...defaultOptions, ...PUC });

  viewer.render();

  viewer.setState({ bpColors: {} });
});
