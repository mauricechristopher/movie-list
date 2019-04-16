import styled from "styled-components"

export const Container = styled.div`
  border-radius: 0.5em;
  position: fixed;
  overflow: hidden;
  top: 8%;
  height: 27%;
  width: 90%;
  margin: 0 auto;
  margin-left: 5%;
  background-color: slategrey;
  text-align: center;
  box-shadow: 0 4px 8px 0 #DCDCDC, 0 6px 20px 0 #DCDCDC;
`;

export const Children  = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

export const Dot = styled.span`
  font-size: 1em;
  cursor: pointer;
  user-select: none;
  color: white;
`;

export const Dots = styled.span`
  bottom: 15%;
  cursor: pointer;
  z-index: 100;
  position: relative;
  display: block;
  margin: 0 auto;
  height: 100%;
`;
