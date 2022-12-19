import {CenteredFlexWithSpacing} from "../../../typography/flex";
import {Color} from "../../../styles/colors";
import styled from "styled-components";
import {SmallText} from "../../../typography/text";

export const HalfCircleLoader = ({animate}:{animate:boolean}) => {
    return (
        <HalfCircleLoaderComponent>

            {animate &&
                <QuaterInfo>
                    <CenteredFlexWithSpacing spacing={'8px'}>
                        <QuarterText color={Color.Background}>Q1 2022</QuarterText>
                        <QuaterLitleDot/>
                    </CenteredFlexWithSpacing>
                </QuaterInfo>
            }
            <SpinnedCircleContainer>
                <SpinnedCircle animate={animate}/>
            </SpinnedCircleContainer>
        </HalfCircleLoaderComponent>
    )
}

const QuarterText = styled(SmallText)`
  font-family: 'Bebas Neue', sans-serif;
`

const QuaterLitleDot = styled.div`
  height: 12px;
  width: 12px;
  background: ${Color.Main};
  border-radius: 50%;
  box-shadow: -2px -2px 6px rgba(50, 50, 50, 0.25), 2px 2px 6px rgba(50, 50, 50, 0.25);
  position: relative;


  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 3px;
    width: 3px;
    background: ${Color.Alt};
    border-radius: 50%;
  }
`


const QuaterInfo = styled.div`
  position: absolute;
  padding: 8px 12px;
  border-radius: 15px;
  background: ${Color.Main};
  top: -17px;
  left: CALC(50% - 23px);
  transform: translateX(-50%);
  z-index: 2;
`

const HalfCircleLoaderComponent = styled.div`
  position: absolute;
  height: 486px;
  width: 486px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  &:after, &:before {
    content: '';
    position: absolute;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: ${Color.Alt};

  }

  &:after {
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
  }

`

const SpinnedCircleContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(100%, -50%);
  height: 486px;
  width: 243px;
  overflow: hidden;
`

const SpinnedCircle = styled.div<{animate:boolean}>`
  position: absolute;
  left: -100%;
  height: 486px;
  width: 486px;
  border-radius: 50%;

  border: 1px solid ${Color.Alt};
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  
  transform: rotate(45deg);
  
  ${({animate})=> animate && `animation: donut-spin 5s linear infinite;`}
  
  
  @keyframes donut-spin {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`