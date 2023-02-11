import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Wrapper } from 'components/Wrapper.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Wrapper>
    <App />
  </Wrapper>
);
