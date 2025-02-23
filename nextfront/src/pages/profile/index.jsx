"use client"

import { useState } from "react"
import EditableProfileImage from "../../components/profile/EditImage"
import EditableName from "../../components/profile/EditName"
import Menu from "../../components/profile/Menu"

export default function Profile() {
  const [name, setName] = useState("Usuario")
  const [profileImage, setProfileImage] = useState("/default-profile.png")

  const handleSave = () => {
    console.log("Saving profile data:", { name, profileImage })
  }

  return (
    <div className="min-h-screen backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white/30 backdrop-blur-md rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Perfil</h1>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
            <div className="flex flex-col items-center mb-6">
              <EditableProfileImage image={profileImage} setImage={setProfileImage} />
              <EditableName name={name} setName={setName} />
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}
