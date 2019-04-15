import React from 'react';
import TopBar from '../styles/TopBar.js'
import { Licon, Title, Ricon } from '../styles/Icons.js'

export default class Header extends React.Component {
  render() {
    return (
      <TopBar>
        <Licon></Licon>
        <Title>Movies</Title>
        <Ricon></Ricon>
      </TopBar>
    );
  }
}
