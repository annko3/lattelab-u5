import React from "react";
import person from "../assets/images/person.png";

const TeamCard = ({ name, role, description, instagram }) => {
  return (
    <div className="border-2 bg-white border-brown-pink p-[2rem] flex flex-col gap-4.5">
      <img
        className="w-25 rounded-full bg-[#f0f8ff] mx-auto"
        src={person}
        alt="persona"
      />
      <h3 className="font-bold text-2xl mb-5 text-brown-dark">{name}</h3>
      <p>{role}</p>
      <p>{description}</p>
      <a
        className="bg-brown-medium text-white border-1 border-brown-dark p-[8px] rounded-xl flex items-center gap-2 justify-center"
        target="_blank"
        href={instagram}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        Instagram
      </a>
    </div>
  );
};

export default TeamCard;
