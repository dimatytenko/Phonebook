import styled from '@emotion/styled';

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavigationLink = styled.div`
  display: flex;
  align-items: flex-end;
  transition: color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;
