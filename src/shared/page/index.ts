import styled from "styled-components";
import {ColumnFlexbox} from "../../typography/flex";
import {Color} from "../../styles/colors";

export const Page = styled(ColumnFlexbox)`
  display: flex;
  height: 100vh;
  width: 100%;
  background: ${Color.Background};
  padding: 14px 64px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`