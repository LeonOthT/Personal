// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
      <img
        className="w-24 h-24 rounded-full border-4 border-white -mt-12"
        src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/241488423_2837491956561024_9125446391873673979_n.jpg?stp=dst-jpg_tt7&_nc_cat=104&cb=99be929b-defccdb7&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=n7a46Snmb00Q7kNvgF7UAT5&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=A0WUO8bVXkqBcySsHo4VJhA&oh=00_AYC1efdkyC7NP4OqVMgydQboExPDvl2WCwvLy0UGW3oQZg&oe=672A4942" // Thay link ảnh tại đây nếu có ảnh cụ thể
        alt="Profile"
      />
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold text-gray-800">Ông Trần Hải Triều</h2>
        <p className="text-gray-600 mt-2">
          Sinh viên ngành Kỹ thuật phần mềm tại Đại học FPT
        </p>
        <p className="mt-4 text-gray-700">Kỹ năng: Giao tiếp, tổ chức, và tin học văn phòng</p>
        <a
          href="#"
          className="text-blue-500 mt-4 inline-block"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Home;
