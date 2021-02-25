import ProfileService from "../services/ProfileService";
import HttpStatus from "http-status-codes";

export const useProfiles = () => {
  const profilesService = new ProfileService();

  const initializeProfiles = async (setProfilesList) => {
    let response = await profilesService.getProfiles();

    if (response.status !== HttpStatus.OK) {
      //error
      setProfilesList([]);
    } else {
      const body = await response.json();
      setProfilesList(body);
    }
  };

  const deleteProfileById = async (id, profilesList, setProfilesList) => {
    setProfilesList(profilesList.filter((profile, index) => index !== id));
  };

  const saveProfile = async (profile, profilesList, setProfilesList) => {
    setProfilesList([...profilesList, profile]);
  };

  const updateProfile = async (
    profile,
    index,
    profilesList,
    setProfilesList
  ) => {
    profilesList[index - 1] = profile;
    setProfilesList(profilesList);
  };

  // const initializeProfiles = () => {
  //   return [
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  //       name: "Will Byers",
  //       occupation: "Developer",
  //       city: "Chicago",
  //       state: "IL",
  //       bio:
  //         "Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  //       name: "Kimberly Montgomery",
  //       occupation: "Hair stylist",
  //       city: "Phoenix",
  //       state: "AR",
  //       bio:
  //         "Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/men/12.jpg",
  //       name: "Andrew Carter",
  //       occupation: "Skydiver",
  //       city: "Seattle",
  //       state: "WA",
  //       bio:
  //         "Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/14.jpg",
  //       name: "Joyce Harvey",
  //       occupation: "Front-End Developer",
  //       city: "Manhattan",
  //       state: "NY ",
  //       bio:
  //         "Performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/20.jpg",
  //       name: "Margaret Ortiz",
  //       occupation: "Creative Director",
  //       city: "Miami",
  //       state: "FL",
  //       bio: "Is thought or pointed hearing he."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/men/33.jpg",
  //       name: "Matthew Lewis",
  //       occupation: "Writer",
  //       city: "Indianapolis",
  //       state: "IN",
  //       bio: "Proposal indulged no do do sociable he throwing settling."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  //       name: "Susan Greene",
  //       occupation: "Dog Walker",
  //       city: "Chicago",
  //       state: "IL",
  //       bio:
  //         "Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/34.jpg",
  //       name: "Debra Ford",
  //       occupation: "Small Business Owner",
  //       city: "New Orleans",
  //       state: "LA",
  //       bio:
  //         " Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/men/23.jpg",
  //       name: "Ralph Ramos",
  //       occupation: "Lawyer",
  //       city: "Los Angeles",
  //       state: "CA",
  //       bio:
  //         "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is."
  //     },
  //     {
  //       picUrl: "https://randomuser.me/api/portraits/women/21.jpg",
  //       name: "Carol Woods",
  //       occupation: "Graphic Designer",
  //       city: "San Francisco",
  //       state: "CA"
  //     }
  //   ];
  // };

  return { initializeProfiles, deleteProfileById, saveProfile, updateProfile };
};

export default useProfiles;
