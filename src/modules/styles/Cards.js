import styled from "styled-components"
import { Card, CardTitle, CardMedia } from 'material-ui';

export const MovieCardDiv = styled.div`
  height: 50%;
  display: inline-block;
  float: left;
  width: 20.6%;
  background-color: white;
  border-radius: 0.5em;
  margin-bottom: 2.5%;
  margin-left: 2.5%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 #DCDCDC, 0 6px 20px 0 #DCDCDC;
  cursor: pointer;
  text-position: center;
`

export const myCard = styled(Card)`
  && {
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  width: 90%;
  position: relative;
  margin: 0 auto;
  }
`

export const myCardTitle = styled(CardTitle)`
  && {
    whiteSpace: nowrap;
    textOverflow: ellipsis;
    overflow: hidden;
  }
`

export const myCardMedia = styled(CardMedia)`
  && {
    height: 90%;
    position: fixed;
    overflow: hidden;
    background-color: red;
  }
`

// export const myCardBg = styled.img`
//   && {
//   width: 100%;
//   }
// `
// Can't figure out how to style img tags correctly in StyledComponents
// so I'll do this for now
export const styles = {
  bgImage: {
    height: '80%',
    width: '100%'
  },
  cbgImage: {
    width: '100%',
    height: '100%'
  }
};
