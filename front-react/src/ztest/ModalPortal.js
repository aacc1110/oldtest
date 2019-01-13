import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  const e1 = document.getElementById('modal');
  return ReactDOM.createPortal(children, e1);
};

export default ModalPortal;
