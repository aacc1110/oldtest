import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import MyModal from './MyModal';
import ModalPortal from './ModalPortal';
import PhoneForm from './components/PhoneForm';
import Counter from './hooks/Counter';
import Form from './hooks/Form';
import Post from './Post';
import Greeting from './hookname';
import ShotText from './ShortText';
import SecurityForm from './hooks/SecurityForm';
import ReducerCount from './store';
import ShoppingLint from './store/ShoppingList';
import TextContext from './context/TextContext';

// 흰 배경, 내용 중간 정렬
const Background = styled.div`
  justify-content: center;

  padding-top: 60px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({
      modal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const modalvi = this.state.modal;
    return (
      <Background>
        <div className="App">
          <h1>안녕 리액트!!!</h1>
          <PhoneForm />
          <button type="button" onClick={this.handleOpenModal}>
            모달 열기
          </button>
          {modalvi && (
            <ModalPortal>
              <MyModal onClose={this.handleCloseModal} />
              <SecurityForm />
            </ModalPortal>
          )}
          <Counter />
          <Form />
          <Post />
          <Greeting />
          <ShotText />
          <SecurityForm />
          <ReducerCount />
          <ShoppingLint />
          <TextContext />
        </div>
      </Background>
    );
  }
}

export default App;
