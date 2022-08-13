import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 30px;
  }
`;

export const Toggler = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 22px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const TogglerText = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 1px;
`;