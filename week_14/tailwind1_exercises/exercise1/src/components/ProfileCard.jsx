import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto m-8 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-white to-green-600 h-24"></div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEWFXPCzfCOKg/profile-displayphoto-scale_400_400/B4DZeMtGNmGYAo-/0/1750412323463?e=1764201600&v=beta&t=nmqoRR2zCCz8Kubt3MiaoQJKNiQavOyVYstiQCBsit4"
          alt="Opnex_picture"
        />
      </div>

      {/* User Info */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Mr Opnex</h2>
        <p className="text-sm text-gray-500">Web Developer</p>
        <p className="text-sm text-gray-400 mt-1">Ogun, Nigeria</p>
      </div>

      {/* Stats */}
      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-lg font-bold text-gray-800">500k</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">86</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">1200k</p>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
      </div>

      {/* Bio */}
      <div className="px-6 py-4 text-center text-gray-600 text-sm">
        <p>
          Passionate about craeting responsive web page that solves users problems.
        </p>
      </div>

      {/* Follow Button */}
      <div className="flex justify-center pb-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-200">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
