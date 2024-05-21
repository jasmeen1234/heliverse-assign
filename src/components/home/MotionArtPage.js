import React from 'react';

const MotionArtPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mr-2"></span>
          <h1 className="text-4xl font-bold">MotionArt Effect</h1>
        </div>
        <div className="text-sm uppercase tracking-wide text-orange-500">
          Transform <span className="text-purple-500">Your Website</span> With Motion Art Effect
        </div>
        <h2 className="mt-6 text-5xl font-extrabold">
          Attract Your <br /> Visitors Attention <br /> With Colorful <span className="text-gradient bg-gradient-to-r from-purple-500 to-orange-500">Motion Art Effect</span>
        </h2>
        <p className="mt-6 text-lg">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
        </p>
        <button className="mt-8 px-6 py-2 bg-green-500 text-gray-900 rounded-full font-bold hover:bg-green-600">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default MotionArtPage;
