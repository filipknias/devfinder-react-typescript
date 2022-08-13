import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const CenterContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;

const Container: FC<Props> = ({ children }) => {
  return (
    <CenterContainer>
      {children}
    </CenterContainer>
  )
}

export default Container;