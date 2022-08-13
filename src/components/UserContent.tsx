import { FC } from 'react';
import styled from 'styled-components';
import { GithubUser } from '../types/GithubUser';
import { BsFillGeoAltFill, BsLink45Deg, BsEnvelopeFill, BsTwitter } from 'react-icons/bs';

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.contentBackground};
  box-shadow: ${({ theme }) => theme.contentBoxShadow};
  padding: 40px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const CredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;

const AvatarImage = styled.img`
  width: 20%;
  border-radius: 50%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
`;

const JoinedDate = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const TwitterNickname = styled.p`
  color: ${({ theme }) => theme.palette.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 20px;
  margin-top: 10px;
`;

const StatsContainer = styled.div`
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

const StatsLabel = styled.h2`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
`;

const StatsText = styled.h1`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 10px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.text};
`;

interface Props {
  githubUser: GithubUser;
}

const UserContent: FC<Props> = ({ githubUser }) => {
  console.log(githubUser)
  return (
    <ContentContainer>
      <AvatarImage src={githubUser.avatar_url} alt={githubUser.name}/>
      <CredentialsContainer>
        <div>
          <HeaderContainer>
            <Header>{githubUser.login}</Header>
            <JoinedDate>Joined {githubUser.created_at.split('T')[0]}</JoinedDate>
          </HeaderContainer>
          {githubUser.twitter_username && <TwitterNickname>@{githubUser.twitter_username}</TwitterNickname>}
        </div>
        <StatsContainer>
          <div>
            <StatsLabel>Repos</StatsLabel>
            <StatsText>{githubUser.public_repos}</StatsText>
          </div>
          <div>
            <StatsLabel>Followers</StatsLabel>
            <StatsText>{githubUser.followers}</StatsText>
          </div>
          <div>
            <StatsLabel>Following</StatsLabel>
            <StatsText>{githubUser.following}</StatsText>
          </div>
        </StatsContainer>
        <Grid>
          <GridItem>
            <BsFillGeoAltFill />
            {githubUser.location || "Not available"}
          </GridItem>
          <GridItem>
            <BsLink45Deg />
            {githubUser.html_url}
          </GridItem>
          <GridItem>
            <BsEnvelopeFill />
            {githubUser.email || "Not available"}
          </GridItem>
          <GridItem>
            <BsTwitter />
            {githubUser.twitter_username || "Not available"}
          </GridItem>
        </Grid>
      </CredentialsContainer>
    </ContentContainer>
  )
}

export default UserContent;