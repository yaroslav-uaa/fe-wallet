import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';
import { toast, cssTransition } from 'react-toastify';

const Notify = {
  Error: text => animateCss(toast.error, text),
  Success: text => animateCss(toast.success, text),
  Warn: text => animateCss(toast.warn, text),
  Dark: text => animateCss(toast.dark, text),
  Info: text => animateCss(toast.info, text),
};

export default Notify;

function animateCss(type, text) {
  type(text, {
    transition: bounce,
  });
}
const bounce = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});
