import styled from 'styled-components';

export const Flexbox = styled.div`
  display: flex;
`;

export const ColumnFlexbox = styled(Flexbox)`
  flex-direction: column;
`;

export const CenteredFlex = styled(Flexbox)`
  justify-content: center;
  align-items: center;
`;

export const FlexWithSpacing = styled(Flexbox)<{
    spacing: string;
}>`
  > *:not(:last-child) {
    margin-right: ${props => props.spacing};
  }
`;

export const CenteredFlexWithSpacing = styled(CenteredFlex)<{
    spacing: string;
}>`
  > *:not(:last-child) {
    margin-right: ${props => props.spacing};
  }
`;

export const ColumnFlexWithPadding = styled(Flexbox)<{
    spacing: string;
}>`
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${props => props.spacing};
  }
`;

export const ColumnCenteredFlexWithPadding = styled(CenteredFlex)<{
    spacing: string;
}>`
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${props => props.spacing};
  }
`;

export const ColumnCenteredFlexWithMarginTop = styled(CenteredFlex)<{
    spacing: string;
}>`
  flex-direction: column;

  > * {
    margin-top: ${props => props.spacing};
  }
`;

export const ColumnCenteredFlex = styled(CenteredFlex)`
  flex-direction: column;
`;

export const VerticallyCenteredFlexEndWithSpacing = styled(CenteredFlexWithSpacing)`
  justify-content: flex-end;
`;

export const HorizontallyCenteredFlexWithSpaceBetween = styled(Flexbox)<{
    margin?: string;
}>`
  align-items: center;
  justify-content: space-between;
  ${props => (props.margin ? `margin:${props.margin}` : '')};
`;

export const InlineCenteredFlexWithSpacing = styled(CenteredFlexWithSpacing)`
  display: inline-flex;
`;

