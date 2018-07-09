import multiBootstrap from '../config/multi-bootstrap';
import UiTemporaryDrawer from './drawer/temporary';
import UiPersistentDrawer from './drawer/persistent';
import UiPermanentDrawer from './drawer/permanent';
import UiDrawerHeader from './drawer/drawer-header';
import UiDrawerContent from './drawer/drawer-content';
import UiDrawerToolbarSpacer from './drawer/drawer-toolbar-spacer';

const components = {
  UiTemporaryDrawer,
  UiPersistentDrawer,
  UiPermanentDrawer,
  UiDrawerHeader,
  UiDrawerContent,
  UiDrawerToolbarSpacer
};

multiBootstrap(components);

export default components;
export {
  UiTemporaryDrawer,
  UiPersistentDrawer,
  UiPermanentDrawer,
  UiDrawerHeader,
  UiDrawerContent,
  UiDrawerToolbarSpacer
};
