import { FC } from 'react';
import { GithubUser } from '../../types/api';
import { BsFillGeoAltFill, BsLink45Deg, BsEnvelopeFill, BsTwitter } from 'react-icons/bs';
import * as Styles from './styles';

interface Props {
  githubUser: GithubUser;
}

const UserContent: FC<Props> = ({ githubUser }) => {
  console.log(githubUser)
  return (
    <Styles.Container>
      <Styles.Avatar src={githubUser.avatar_url} alt={githubUser.name}/>
      <Styles.Content>
        <Styles.HeadingSection>
          <Styles.Nickname>{githubUser.login}</Styles.Nickname>
          <Styles.JoinedDate>Joined {githubUser.created_at.split('T')[0]}</Styles.JoinedDate>
        </Styles.HeadingSection>
        <Styles.StatsContainer>
          <div>
            <Styles.StatsLabel>Repos</Styles.StatsLabel>
            <Styles.StatsText>{githubUser.public_repos}</Styles.StatsText>
          </div>
          <div>
            <Styles.StatsLabel>Followers</Styles.StatsLabel>
            <Styles.StatsText>{githubUser.followers}</Styles.StatsText>
          </div>
          <div>
            <Styles.StatsLabel>Following</Styles.StatsLabel>
            <Styles.StatsText>{githubUser.following}</Styles.StatsText>
          </div>
        </Styles.StatsContainer>
        <Styles.Grid>
          <Styles.GridItem>
            <BsFillGeoAltFill />
            {githubUser.location || "Not available"}
          </Styles.GridItem>
          <Styles.GridItem>
            <BsLink45Deg />
            <a href={githubUser.html_url} target="_blank">{githubUser.html_url}</a>
          </Styles.GridItem>
          <Styles.GridItem>
            <BsEnvelopeFill />
            {githubUser.email || "Not available"}
          </Styles.GridItem>
          <Styles.GridItem>
            <BsTwitter />
            {githubUser.twitter_username || "Not available"}
          </Styles.GridItem>
        </Styles.Grid>
      </Styles.Content>
    </Styles.Container>
  )
}

export default UserContent;