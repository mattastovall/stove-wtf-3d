import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1698912554926",
  root: "1698912280628",
  nodes: {
    geo1: "1698912280628",
    "geo1/MAT": "1698912280628",
    COP: "1698912280628",
    lights: "1698914203860",
    cameras: "1698912280628",
  },
  shaders: {},
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
