import React, { useState } from "react";
import styled from "styled-components";
import useProfiles from "../../hooks/useProfiles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  margin: 25px;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CloseImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 25px 25px 6px 0;
  object-fit: contain;
`;

const SaveButton = styled.button`
  width: 110px;
  height: 31px;
  margin: 0 15px 0 0;
  padding: 6px 37px 6px 38px;
  border-radius: 10px;
  border: solid 1px #22a7f0; /* #bfbfbf; */
  background-color: #ffffff;
  /* background-color: #bfbfbf; */
  color: #22a7f0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const CancelButton = styled.button`
  width: 110px;
  height: 31px;
  margin: 0 0 0 15px;
  padding: 6px 30px 6px 31px;
  border-radius: 10px;
  border: solid 1px #22a7f0;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #22a7f0;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 15px 0 0;
  background-color: #d8d8d8;
  border-radius: 50%;
  text-indent: -10000px;
`;

const Title = styled.h6`
  /* width: 213px; */
  height: 33px;
  margin: 6px 120px 25px 65px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4a4a4a;
`;

const TextField = styled.input`
  width: 340px;
  height: 31px;
  margin: 0 0 9px;
  /* padding: 6px 202px 6px 10px; */
  border-radius: 10px;
  border: solid 1px #bfbfbf;
  background-color: #ffffff;
`;

const TextArea = styled.textarea`
  width: 340px;
  height: 110px;
  margin: 7px 0 0;
  /* padding: 6px 62px 85px 10px; */
  border-radius: 10px;
  border: solid 1px #bfbfbf;
  background-color: #ffffff;
`;

export default function NewProfileModal(props) {
  const profiles = useProfiles();

  const [profile, setProfile] = useState({
    picUrl: "",
    name: "",
    occupation: "",
    city: "",
    bio: ""
  });

  const handleProfileChange = (prop) => (event) => {
    setProfile({ ...profile, [prop]: event.target.value });
  };

  const handleSaveProfile = () => {
    profiles.saveProfile(profile, props.profiles, props.setProfiles);
    props.closeAddModal();
  };

  return (
    <Container>
      <RowRight>
        <CloseImage
          src="assets/add-icon.png"
          alt="close"
          onClick={props.closeAddModal}
        />
      </RowRight>
      <Title>Add New Profile</Title>
      <Content>
        <Image src={profile.picUrl ?? "/"} />
        <Container>
          <TextField
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            placeholder="Picture URL"
            value={profile.url}
            onChange={handleProfileChange("picUrl")}
          />
          <TextField
            type="text"
            id="names"
            name="names"
            placeholder="Names"
            value={profile.name}
            onChange={handleProfileChange("name")}
          />
          <TextField
            type="text"
            id="occupation"
            name="occupation"
            placeholder="Occupation"
            value={profile.occupation}
            onChange={handleProfileChange("occupation")}
          />
          <TextField
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={profile.city}
            onChange={handleProfileChange("city")}
          />
          <TextArea
            name="bio"
            rows="5"
            placeholder="Short bio (500 characters max)"
            value={profile.bio}
            onChange={handleProfileChange("bio")}
          />
          <Row>
            <SaveButton type="submit" onClick={handleSaveProfile}>
              Save
            </SaveButton>
            <CancelButton type="submit" onClick={props.closeAddModal}>
              Cancel
            </CancelButton>
          </Row>
        </Container>
      </Content>
    </Container>
  );
}
