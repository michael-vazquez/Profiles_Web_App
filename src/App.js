import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import useProfiles from "./hooks/useProfiles";
import Modal from "react-modal";
import NewProfileModal from "./components/modals/NewProfileModal";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddModal = styled(Modal)`
  /* position: absolute; */
  /* display: flex; */
  width: 543px;
  /* height: 472px; */
  margin: auto;
  /* height: 100%; */
  /* text-align: center; */
  /* align-content: center; */
  /*margin: 76px 415px 170px 144px;
  padding: 25px 25px 32px 100px; */
  border-radius: 30px;
  /* box-shadow: 0 16px 29px 0 rgba(0, 0, 0, 0.3); */
  background-color: #f8f8f8;
  border-color: "none";
`;

export default function App() {
  React.useEffect(() => {
    profiles.initializeProfiles(setProfilesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const profiles = useProfiles();
  const [profilesList, setProfilesList] = useState([]);
  const [addModalIsOpen, setaddModalIsOpen] = useState(false);

  const openAddModal = () => {
    setaddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setaddModalIsOpen(false);
  };

  // const customStyles = {
  //   content: {
  //     // top: "50%",
  //     // left: "50%",
  //     // right: "50%",
  //     // bottom: "50%",
  //     // // marginRight: "-50%",
  //     // transform: "translate(50%, 50%)"
  //     // position: "absolute",
  //     // top: "50%",
  //     // left: "50%",
  //     // marginTop: "-50px",
  //     // marginLeft: "-50px"
  //     // margin: "auto"
  //     // width: "50%"
  //   }
  // };

  return (
    <StyledApp>
      <Row>
        <Header />
      </Row>
      <Row>
        <Main
          profiles={profilesList}
          setProfiles={setProfilesList}
          addProfile={openAddModal}
        />
      </Row>
      <AddModal
        isOpen={addModalIsOpen}
        // style={customStyles}
        contentLabel="Add New Profile Modal"
      >
        <NewProfileModal
          profiles={profilesList}
          setProfiles={setProfilesList}
          closeAddModal={closeAddModal}
        />
      </AddModal>
    </StyledApp>
  );
}