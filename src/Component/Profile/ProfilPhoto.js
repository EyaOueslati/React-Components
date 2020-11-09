import React from "react";
import ProfilImage from "../../img/Photos-App.jpg";

const MyPhoto = () => {
  return (
    <img
      src={ProfilImage}
      alt="profil"
      style={{ height: 300, alignSelf: "center", marginTop: 10 }}
    />
  );
};
export default MyPhoto;