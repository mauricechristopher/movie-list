import React from 'react';
import { ButtBar, HollowHearcon, Viewcon, Thumbcon, Commcon } from '../styles/CardButts'

export default class Footer extends React.Component {
  render() {
    return (
      <ButtBar>
        <Viewcon>42</Viewcon>
      </ButtBar>
    );
  }
}
