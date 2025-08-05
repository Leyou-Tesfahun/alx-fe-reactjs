// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ name, age, bio, avatarUrl }) => {
  return (
    <div
      className="bg-gray-100 shadow-lg rounded-lg mx-auto
                 p-4 sm:p-4 md:p-8
                 max-w-xs sm:max-w-xs md:max-w-sm
                 my-20
                 hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4
                     hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      )}
      <h2
        className="text-lg sm:text-lg md:text-xl font-semibold text-center
                   hover:text-blue-500 transition-colors duration-300"
      >
        {name}
      </h2>
      <p className="text-sm sm:text-sm md:text-base text-center mt-2">Age: {age}</p>
      <p className="text-sm sm:text-sm md:text-base text-center mt-1">{bio}</p>
    </div>
  );
};

export default UserProfile;

