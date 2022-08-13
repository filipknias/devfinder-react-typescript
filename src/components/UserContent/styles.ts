import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  padding: 40px;
  display: flex;
  align-items: flex-start;
  gap: 50px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Credentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

export const Avatar = styled.img`
  width: 20%;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
`;

export const NicknameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nickname = styled.h1`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
`;

export const JoinedDate = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

export const TwitterNickname = styled.p`
  color: ${({ theme }) => theme.palette.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 20px;
  margin-top: 10px;
`;

export const StatsContainer = styled.div`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.bodyBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  color: ${({ theme }) => theme.text};
`;

export const StatsLabel = styled.h2`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
`;

export const StatsText = styled.h1`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 10px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.text};
`;

export const BioDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
`;