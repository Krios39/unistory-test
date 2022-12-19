import {
    CenteredFlexWithSpacing,
    ColumnCenteredFlex, ColumnCenteredFlexWithPadding,
    ColumnFlexWithPadding, FlexWithSpacing,
    HorizontallyCenteredFlexWithSpaceBetween
} from "../../../typography/flex";
import {BigText, Header, HeaderBig, SmallText, Text} from "../../../typography/text";
import styled from "styled-components";
import {Color} from "../../../styles/colors";
import {BackgroundPlanet} from "./background-planet";

export const Info = () => {

    const stats = new Array(3).fill({name: 'Lorem ipsum dolor', count: '12, 345'})

    return (
        <InfoComponent style={{position: 'relative'}}>
            <ColumnFlexWithPadding style={{zIndex: 2}} spacing={'45px'}>
                <InfoText>
                    Explore Your own planet <br/>
                    In <TextWithStroke>our New</TextWithStroke> metaverse
                </InfoText>

                <Text style={{width: '420px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
            </ColumnFlexWithPadding>

            <ColumnCenteredFlexWithPadding spacing={'34px'}>
                <Header>
                    ROADMAP STAT
                </Header>
                <ColumnCenteredFlex>
                    {stats.map((stat, index) => {
                            return (
                                <Stat key={index} spacing={'12px'}>
                                    <StatCountText color={Color.Alt}>{stat.count}</StatCountText>
                                    <StatNameText>{stat.name}</StatNameText>
                                </Stat>
                            )
                        }
                    )}
                </ColumnCenteredFlex>
            </ColumnCenteredFlexWithPadding>

            <BackgroundPlanet animate={true}/>
        </InfoComponent>
    )
}

const InfoComponent = styled(HorizontallyCenteredFlexWithSpaceBetween)`
  position: relative;
`



const Stat = styled(ColumnFlexWithPadding)`
  padding: 8px 45px;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 0.5px solid #D2C4C4;
  }
`

const StatCountText = styled(Header)`
  text-align: center;
`

const StatNameText = styled(BigText)`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 700;
`

const TextWithStroke = styled.span`
  color: ${Color.Background};
  -webkit-text-stroke: 1px ${Color.Main}
`

const InfoText = styled(HeaderBig)`
  font-size: 120px;
  line-height: 144px;
  background: radial-gradient(circle at 851px 140px, ${Color.Alt} 160px, ${Color.Main} 0%, ${Color.Main});
  -webkit-background-clip: text;
  color: transparent;
`

