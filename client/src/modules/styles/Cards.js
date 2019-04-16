import styled from "styled-components"
import Card from 'react-bootstrap/Card'

export const MovieCardDiv = styled.div`
  height: 50%;
  display: inline-block;
  float: left;
  width: 44%;
  background-color: white;
  border-radius: 0.5em;
  margin-bottom: 2.5%;
  margin-left: 2.5%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 #DCDCDC, 0 6px 20px 0 #DCDCDC;
  cursor: pointer;
  text-align: center;



  @media (max-width: 420px) {
    width: 44%;
    height: 240px;
    objectFit: cover;
    margin-left: 2.5%;
  }
  @media (min-width: 675px) {
    width: 20.6%;
    maxHeight: 40%;
    margin-left: 3%;
  }
  @media (min-width: 1024px) {
    width: 14.2%;
    margin-left: 4%;
  }

`

export const ButtBar = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: white;
  height: 20%;
`

export const myCard = styled(Card)`
  && {
  cursor: pointer;
  overflow: hidden;
  maxHeight: 90%;
  width: 100%;
  position: fixed;
  margin: 0 auto;
  }
`
//
// export const myCardTitle = styled(CardTitle)`
//   && {
//     whiteSpace: nowrap;
//     textOverflow: ellipsis;
//     overflow: hidden;
//   }
// `
//
// export const myCardMedia = styled(CardMedia)`
//   && {
//     height: 0%;
//     position: fixed;
//     overflow: hidden;
//     background-color: red;
//   }
// `

// export const myCardBg = styled.img`
//   && {
//   width: 100%;
//   }
// `
// Can't figure out how to style img tags correctly in StyledComponents
// so I'll do this for now
export const styles = {
  bgImage: {
    height: 'auto',
    width: '100%'
  },
  cbgImage: {
    width: '100%',
    height: '100%'
  }
};
