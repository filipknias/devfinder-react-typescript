import { FC } from 'react';
import { Container } from './styles';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

interface Props {
  errorMessage: string;
}

const ErrorMessage: FC<Props> = ({ errorMessage }) => {
  return (
    <Container>
      <BsFillExclamationCircleFill />
      {errorMessage}
    </Container>
  )
}

export default ErrorMessage;