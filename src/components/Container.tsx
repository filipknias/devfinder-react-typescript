import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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