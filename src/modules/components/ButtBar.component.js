import React from 'react';
import { HollowHearcon, Viewcon, Thumbcon, Commcon } from '../styles/CardButts'
import { ButtBar } from '../styles/Cards'

export default class Footer extends React.Component {
  render() {
    return (
      <ButtBar>
        <Viewcon>42</Viewcon>
      </ButtBar>
    );
  }
}
