import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import LoginPage from './LoginPage';
import Message from './Message';
import "./assets/fonts/FreckleFace-Regular.ttf";

function App() {
  return (
    <div>
      <Message />
      <LoginPage />
    </div>
  );
}

export default App;
