import styled from 'styled-components'
import { Heart } from 'styled-icons/feather/Heart'
import { Eye } from 'styled-icons/feather/Eye'
import { ThumbsUp } from 'styled-icons/feather/ThumbsUp'
import { CommentDiscussion } from 'styled-icons/octicons/CommentDiscussion'

export const HollowHearcon = styled(Heart)`
position: relative;
display: inline-block;
color: lightgray;
margin: 0 auto;
`

export const Viewcon = styled(Eye)`
  position: relative;
  float: left;
  margin-left: 8%;
  display: block;
  color: lightgray;
  width: 20%;
  height: 20%;
  padding-right: 13%;
`

export const Thumbcon = styled(ThumbsUp)`
position: relative;
margin: 0 auto;
float: left;
display: inline-block;
color: lightgray;
text-position: center;
width: 18%;
height: 20%;
`

export const Commcon = styled(CommentDiscussion)`
position: relative;
margin-right: 8%;
float: right;
display: inline-block;
color: lightgray;
text-position: center;
width: 18%;
height: 20%;
`
