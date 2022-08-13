import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.contentBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  font-size: 20px;
`;

export { Container };