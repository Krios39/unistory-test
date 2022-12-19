import styled from "styled-components";
import {HalfCircleLoader} from "./half-circle-loader";

interface BackgroundPlanetProps {

    animate?:boolean
    className?: string
}

export const BackgroundPlanet = (props: BackgroundPlanetProps) => {
    return (
        <PlanetComponent className={props.className}>
            <BiggestCircke/>
            <Circle/>
            <BackgroundCircleWithGradient/>
            <BackgroundCircle/>
            <HalfCircleLoader animate={props.animate || false}/>
            <Image src={'/planet.png'}/>
        </PlanetComponent>
    )
}

const PlanetComponent = styled.div`
  left: 692px;
  top: -20px;
  position: absolute;
  z-index: 1;
`

const DefaultCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`


const BackgroundCircle = styled(DefaultCircle)`
  height: 446px;
  width: 446px;
  background: #1E1E20;
  z-index: 2;
`

const BiggestCircke = styled(DefaultCircle)`
  height: 384px;
  width: 384px;
  border: 1px solid #323232;
  z-index: 3;
`

const Circle = styled(DefaultCircle)`
  height: 370px;
  width: 370px;
  border: 1px solid #323232;
  z-index: 3;

`

const BackgroundCircleWithGradient = styled(DefaultCircle)`
  width: 526px;
  height: 526px;
  background: radial-gradient(circle at 50%, #171719 65%, #fff 200%);
  z-index: 1;
`

const Image = styled.img`
  position: relative;
  height: 320px;
  width: 320px;
  z-index: 2;
`