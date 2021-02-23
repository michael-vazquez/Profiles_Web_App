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
  flex-direction: column;
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

const YesButton = styled.button`
  width: 110px;
  height: 31px;
  margin: 0 15px 0 0;
  padding: 6px 41px 6px 42px;
  border-radius: 10px;
  border: solid 1px #22a7f0; /* #bfbfbf; */
  background-color: #22a7f0;
  /* background-color: #bfbfbf; */
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const NoButton = styled.button`
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

const Text = styled.h6`
  height: 24px;
  /* margin: 15px 24px 29px 0; */
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4a4a4a;
`;

export default function NewProfileModal(props) {
  const profiles = useProfiles();

  const handleDeleteProfile = () => {
    profiles.deleteProfileById(
      props.profileToDelete,
      props.profiles,
      props.setProfiles
    );
    props.closeDeleteModal();
  };

  return (
    <Container>
      <RowRight>
        <CloseImage
          src="assets/add-icon.png"
          alt="close"
          onClick={props.closeDeleteModal}
        />
      </RowRight>
      <Title>Delete Profile</Title>
      <Content>
        <Text>
          Are you sure you want to delete{" "}
          {props.profiles[props.profileToDelete].name}?
        </Text>
        <Row>
          <YesButton type="submit" onClick={handleDeleteProfile}>
            Yes
          </YesButton>
          <NoButton type="submit" onClick={props.closeDeleteModal}>
            No
          </NoButton>
        </Row>
      </Content>
    </Container>
  );
}
