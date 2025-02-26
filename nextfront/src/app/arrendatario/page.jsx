"use client";
import { useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import EditableProfileImage from "../../components/profile/EditImage";
import EditableName from "../../components/profile/EditName";
import Menu from "../../components/profile/Menu2";
import "../../../src/globals.css";

export default function Profile() {
  const [name, setName] = useState("Usuario");
  const [profileImage, setProfileImage] = useState("/default-profile.png");
  const { favorites } = useFavorites();

  const handleSave = () => {
    console.log("Saving profile data:", { name, profileImage });
  };

  return (
    <>
      {/* Fondo con desenfoque */}
      <div className="background-blur"></div>

      {/* Contenedor principal */}
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-black/20 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">Perfil</h1>
            </div>
            <div className="flex flex-col items-center mb-6">
              <EditableProfileImage image={profileImage} setImage={setProfileImage} />
              <EditableName name={name} setName={setName} />
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}
