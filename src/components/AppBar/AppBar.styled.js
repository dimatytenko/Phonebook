import styled from '@emotion/styled';

export const AppBarWrapper = styled.div`
  min-height: 90px;
  background-color: ${props => props.theme.backgrounds.appPrimary};
  display: flex;
  align-items: center;
`;

export const AppBarBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
