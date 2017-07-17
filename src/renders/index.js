import jsonRender from './jsonRender';
import deepRender from './deepRender';
import surfaceRender from './surfaceRender';

// it returns a function from the exported modules
// it woks like a hub
export default (type) => {
  switch (type) {
    case jsonRender:
      return jsonRender;
    case deepRender:
      return deepRender;
    default:
      return surfaceRender;
  }
};
