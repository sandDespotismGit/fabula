import WithoutDepthStore from "./page_store.js";
export default class RootStore {
  withoutDepth = new WithoutDepthStore();
  depthChangeBack = new WithoutDepthStore();
  depthNewPhoto = new WithoutDepthStore();
}
