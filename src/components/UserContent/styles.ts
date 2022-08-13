import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 50px;
  border-radius: ${({ theme }) => theme.borderRadius};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 30px;
    padding: 20px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 15%;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
`;

export const NicknameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Nickname = styled.h1`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 25px;
  }
`;

export const JoinedDate = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 15px;
  }
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;

export const StatsText = styled.h1`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 15px;
  }
`;

export const BioDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
`;