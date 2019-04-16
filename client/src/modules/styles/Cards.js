import styled from "styled-components"
import Card from 'react-bootstrap/Card'

export const MovieCardDiv = styled.div`
  height: 420px;
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
  resizeMode: contain


  @media (max-width: 420px) {
    maxWidth: 44%;
    height: 300px;
    objectFit: cover;
    margin-left: 2.5%;
  }
  @media (min-width: 675px) {
    width: 28%;
    height: 400px;
    margin-left: 3%;
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: 450px;
    margin-left: 3.5%;
  }
  @media (min-width: 1700px) {
    width: 15%;
    height: 500px;
    margin-left: 3.5%;
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
    height: '85%',
    width: '100%'
  },
  cbgImage: {
    width: '100%',
    height: '100%'
  }
};
