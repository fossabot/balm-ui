import multiBootstrap from '../config/multi-bootstrap';
import UiTextfield from './input-controls/textfield';
import UiTextfieldHelptext from './input-controls/textfield-helptext';
import UiTextfieldIcon from './input-controls/textfield-icon';

const components = {
  UiTextfield,
  UiTextfieldHelptext,
  UiTextfieldIcon
};

multiBootstrap(components);

export default components;
export {
  UiTextfield,
  UiTextfieldHelptext,
  UiTextfieldIcon
};
