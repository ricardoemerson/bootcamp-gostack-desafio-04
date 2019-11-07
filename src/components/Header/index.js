import React from 'react';

import { Container } from './styles';

import facebook from '../../assets/facebook-1.png';
import account from '../../assets/account-circle-material.png'

export default function Header() {
  return (
    <Container>
      <nav>
        <img src={ facebook } alt="Facebook" />

        <a className="current-user">
          <span>Ricardo</span>
          <img src={ account } alt="Conta"/>
        </a>
      </nav>
    </Container>
  );
}
