import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrap } from './Modal.style';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { children, width, height, padding } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWrap width={width} height={height} padding={padding}>
          {children}
        </ModalWrap>
      </Backdrop>,
      modalRoot,
    );
  }
}

export default Modal;
