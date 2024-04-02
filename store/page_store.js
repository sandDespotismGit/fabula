import { makeAutoObservable } from "mobx";

class WithoutDepthStore {
  base64Input = "";
  style = "";
  result = "";
  loading = false;
  depth = "";
  keypoint = "";
  dimensions = [1024, 1024]
  keypointIndex = 0;
  constructor() {
    makeAutoObservable(this);
  }
  updateInput = (newBase64) => {
    this.base64Input = newBase64;
  };
  updateStyle = (newStyle) => {
    this.style = newStyle;
  };
  updateResult = (newResult) => {
    this.result = newResult;
  };
  updateLoading = (state) => {
    this.loading = state;
  };
  updateKeypoint = (keypoint) => {
    this.keypoint = keypoint;
  };
  updateKeypointIndex = (index) => {
    this.keypointIndex = index;
  };
  updateDimensions = (width, height) => {

    this.dimensions = [width, height]
  }
}
export default WithoutDepthStore;
