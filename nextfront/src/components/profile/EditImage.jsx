export default function EditableProfileImage({ image, setImage }) {
    const handleImageChange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImage(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  
    return (
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <label
          htmlFor="profile-image"
          className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-2 cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
    )
  }
  
  