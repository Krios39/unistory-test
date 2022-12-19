import styled from 'styled-components';
import {Color} from "../styles/colors";

 const Span = styled.span<{ color?: Color }>`
  color: ${({color}) => color ? color : Color.Main};
  text-align: left;
`;

const StrongSpan = styled(Span)`
  font-weight: 700;
 letter-spacing: 1px;
`

export const Text = styled(Span)`
 font-family: 'Avenir Next Cyr', sans-serif;
 font-size: 16px;
  line-height: 19px;
 ]

`

export const BigText = styled(Text)`
  font-size: 18px;
  line-height: 22px;
`

export const SmallText = styled(Text)`
  font-size: 14px;
  line-height: 18px;
`


export const Header = styled(StrongSpan)`
  font-size: 28px;
  line-height: 34px;
`;

export const HeaderBig = styled(Header)`
  font-size: 32px;
  line-height: 38px;
`;


export const HeaderSmall = styled(Header)`
  font-size: 24px;
  line-height: 29px;
`;

export const Title = styled(StrongSpan)`
  font-size: 48px;
  line-height: 58px;
`

export const SmallTitle = styled(Title)`
  font-size: 36px;
  line-height: 43px;
`
