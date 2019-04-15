import styled from "styled-components"
import {Heart} from 'styled-icons/boxicons-solid/Heart'
import {ListUl} from 'styled-icons/boxicons-regular/ListUl'
import {Person} from 'styled-icons/material/Person'
import {Filter} from 'styled-icons/feather/Filter'
import {Search} from 'styled-icons/octicons/Search'

export const Licon = styled(ListUl)`
  height: 50%;
  position: relative;
  float: left;
  margin-left: 5%;
`

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 300;
  position: relative;
  display: inline-block;
  margin: 0 auto;
  text-position: center;
`

export const Ricon = styled(Filter)`
  height: 50%;
  position: relative;
  float: right;
  margin-right: 5%;
`

export const Procon = styled(Person)`
  height: 65%;
  position: relative;
  display: inline-block;
  float: right;
  margin-right: 15%;
  color: lightgray;
`

export const Searcon = styled(Search)`
  height: 50%;
  margin-top: 1%;
  position: relative;
  display: inline-block;
  float: left;
  margin-left: 15%;
  color: red;
`

export const Hearcon = styled(Heart)`
  height: 60%;
  position: relative;
  display: inline-block;
  color: lightgray;
  margin: 0 auto;
`
