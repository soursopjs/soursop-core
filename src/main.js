import ProgressBar from './lib/progressbar';
import Modal from './lib/modal';
import Button from './lib/button';
import Checkbox from './lib/inputs/checkbox';
import InputText from './lib/inputs/input-text';
import Textarea from './lib/inputs/textarea';
import Select from './lib/inputs/select';
import MessageDialog from './lib/dialogboxes/messagedialog';
import DialogBoxesConstants from './lib/dialogboxes/constants';

export default {
    ProgressBar,
    Modal,
    Button,
    inputs: {
        Textarea,
        Select,
        Checkbox,
        InputText,
    },
    dialogboxes: {
        constants: DialogBoxesConstants,
        MessageDialog,
    },
};
