import styled from "styled-components";
import useProfiles from "../../hooks/useProfiles";

const Body = styled.div`
  width: 660px;
  height: 250px;
  padding: 25px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  display: flex;
  margin-right: 40px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditButton = styled.button`
  width: 110px;
  height: 31px;
  margin: 0 15px 0 0;
  padding: 6px 41px;
  border-radius: 10px;
  border: solid 1px #22a7f0;
  background-color: #ffffff;
  color: #22a7f0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const DeleteButton = styled.button`
  width: 110px;
  height: 31px;
  margin: 0 0 0 15px;
  padding: 6px 32px;
  border-radius: 10px;
  border: solid 1px #d0021b;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d0021b;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  margin: 0 25px 29px 0;
  border-radius: 50%;
`;

const NameText = styled.h6`
  /* width: 153px; */
  height: 33px;
  margin: 0 0 0 25px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

const PositionText = styled.h6`
  width: 174px;
  height: 24px;
  margin: 0 0 0 25px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

const LocationText = styled.h6`
  /* width: 119px; */
  height: 22px;
  margin: 15px 0 0 25px;
  font-family: OpenSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #bfbfbf;
`;

const DescriptionText = styled.h6`
  width: 445px;
  height: 38px;
  margin: 12px 0 25px 25px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

export default function ProfileCard(props) {
  const profiles = useProfiles();

  return (
    <Body>
      <Container>
        <Row>
          <Image src={props.picUrl} alt="pic" />
          <Column>
            <NameText>{props.name} </NameText>
            <PositionText>{props.occupation} </PositionText>
            <LocationText>
              {props.city}, {props.state}
            </LocationText>
            <DescriptionText>{props.bio}</DescriptionText>
          </Column>
        </Row>
        <RowRight>
          <EditButton type="submit">Edit</EditButton>
          <DeleteButton
            type="submit"
            onClick={() =>
              profiles.deleteProfileById(
                props.index,
                props.profiles,
                props.setProfiles
              )
            }
          >
            Delete
          </DeleteButton>
        </RowRight>
      </Container>
    </Body>
  );
}
