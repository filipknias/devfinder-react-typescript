import { FC, ReactNode } from 'react';
import { Center } from './styles';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <Center>
      {children}
    </Center>
  )
}

export default Container;