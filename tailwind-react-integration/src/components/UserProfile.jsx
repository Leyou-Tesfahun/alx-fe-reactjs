// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 rounded-full mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center">John Doe</h1>
      <p className="text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
