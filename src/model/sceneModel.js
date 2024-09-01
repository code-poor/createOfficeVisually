import baseModel from './baseModel.js';
class sceneModel {
  getScene() {
    const sceneData = baseModel.getValue('sceneData');
    return sceneData;
  }
}
export default sceneModel;
