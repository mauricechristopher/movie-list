import React from 'react';
import _ from 'lodash';
import { RefreshIndicator } from 'material-ui'
import styled from 'styled-components'

// const styles = {
//   refreshStyle: {
//     position: 'relative',
//     display: 'block',
//     margin: '0 auto'
//   }
// };

const Refresh = styled(RefreshIndicator)`
  && {
    position: relative;
    display: block;
    margin: 0 auto;
  }
`

export default class Loader extends React.Component {
  render() {
    return (
      <Refresh
        top={0}
        left={0}
        size={80}
        status={'loading'}
      />
    );
  }
}
