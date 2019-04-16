import React from 'react';
import BotBar from "../styles/BotBar.js"
import { Hearcon, Procon, Searcon } from "../styles/Icons.js"

export default class Footer extends React.Component {
  render() {
    return (
      <BotBar>
        <Searcon />
        <Hearcon />
        <Procon />
      </BotBar>
    );
  }
}
