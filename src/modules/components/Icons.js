import styled from "styled-components"
import {Heart} from 'styled-icons/boxicons-solid/Heart'
import {ListUl} from 'styled-icons/boxicons-regular/ListUl'
import {Person} from 'styled-icons/material/Person'
import {Filter} from 'styled-icons/feather/Filter'
import {Search} from 'styled-icons/octicons/Search'

export const Searcon = styled(Search)`
  height: 44px;
  width: 42px;
  position: relative;
  float: left;
  padding-left: 50px;
  padding-top: 25px;
  color: red;
`

export const Ricon = styled(Filter)`
  height: 42px;
  width: 42px;
  position: relative;
  padding-right: 25px;
  float: right;
  padding-top: 25px;
`

export const Procon = styled(Person)`
  height: 50px;
  width: 50px;
  position: relative;
  float: left;
  padding-left: 154px;
  padding-top: 20px;
  color: lightgray;
`

export const Licon = styled(ListUl)`
  height: 44px;
  width: 42px;
  position: relative;
  float: left;
  padding-left: 25px;
  padding-top: 25px;
`

export const Hearcon = styled(Heart)`
  height: 50px;
  width: 50px;
  position: relative;
  float: left;
  padding-left: 154px;
  padding-top: 20px;
  color: lightgray;
`
