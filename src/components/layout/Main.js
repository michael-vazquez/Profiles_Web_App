import styled from "styled-components";
import ProfileCard from "../profile/ProfileCard";

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  margin: 56px 40px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  height: 47px;
  margin: 0;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

const Button = styled.button`
  width: 168px;
  height: 31px;
  margin: 10px 0px 0px 32px;
  padding: 6px 15px;
  border-radius: 10px;
  border: solid 1px #22a7f0;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin: 2px 8px 2px 0;
  object-fit: contain;
`;

const Text = styled.h6`
  width: 150px;
  height: 19px;
  margin: 0 0 0 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #22a7f0;
`;

const ProfileContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
`;

export default function Main(props) {
  return (
    <Body>
      <Container>
        <Row>
          <Title> User Profiles ({props.profiles.length}) </Title>
          <Button type="submit" onClick={props.addProfile}>
            <Row>
              <Image src="assets/add-icon.png" alt="add" />
              <Text>Add New Profile </Text>
            </Row>
          </Button>
        </Row>
        <ProfileContainer>
          {props.profiles.map((profile, index) => (
            <ProfileCard
              {...props}
              key={index}
              index={index}
              picUrl={profile.picUrl}
              name={profile.name}
              occupation={profile.occupation}
              city={profile.city}
              state={profile.state}
              bio={profile.bio}
            />
          ))}
        </ProfileContainer>
      </Container>
    </Body>
  );
}
