import {ReactNode} from "react";
import Scrollbars, {positionValues} from "react-custom-scrollbars-2";
import styled from "styled-components";
import {Color} from "../../styles/colors";

interface ScrollbarProps {
    children: ReactNode,
    onScrollFrame?: (values: positionValues) => void
}

export const Scrollbar = (props: ScrollbarProps) => {

    return (
        <Scrollbars
            autoHeight
            autoHeightMax={`calc(${document.body.scrollHeight}px - 700px)`}
            hideTracksWhenNotNeeded
            renderThumbVertical={(props) => <VerticalThumb {...props}/>}
            renderTrackVertical={(props) => <VerticalTrack {...props}/>}
            renderView={({style, ..._props}) => <View className={'aaaaa'} style={{
                ...style,
                width: 'calc(100% - 30px)'
            }} {..._props} />}
            onScrollFrame={props.onScrollFrame}
        >
            {props.children}
        </Scrollbars>

    )
}

const VerticalTrack = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  width: 3px !important;

  &:after {
    content: "";
    background: ${Color.Main};
    height: inherit;
    top: inherit;
    right: 1px;
    width: 0.5px;
    position: absolute;
  }
`

const VerticalThumb = styled.div`
  width: 3px;
  background-color: ${Color.Alt};
  border-radius: 2px;
  z-index: 1;

`

const View = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`