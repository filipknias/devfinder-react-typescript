import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;