import styled from '@emotion/styled';

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AuthLink = styled.div`
  display: flex;
  align-items: flex-end;
  transition: color ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;
