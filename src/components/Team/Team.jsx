// eslint-disable-next-line no-unused-vars
import React from 'react';

const teamMembers = [
  {
    name: 'Indira Ramesh-Naik',
    role: 'Product Manager',
    imageUrl: '/assets/Team/Indira Ramesh-Naik.png',
    linkedIn: 'https://linkedin.com/in/rameshindira',
  },
  {
    name: 'Olamide Ojo',
    role: 'Product Manager',
    imageUrl: '/assets/Team/Olamide Ojo.png',
    linkedIn: 'https://www.linkedin.com/in/olamide-ojo-11a1b6207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'Omobolanle Akindeinde',
    role: 'Designer',
    imageUrl: '/assets/Team/Omobolanle Akindeinde.png',
    linkedIn: 'https://www.linkedin.com/in/bolanle-akindeinde-00a2b6196/',
  },
  {
    name: 'Emmanuel Kingson',
    role: 'Designer',
    imageUrl: '/assets/Team/Emmanuel Kingson.png',
    linkedIn: 'https://ng.linkedin.com/in/emmanuelkingson',
  },
  {
    name: 'Ruth Shekinah',
    role: 'Designer',
    imageUrl: 'public/assets/Team/Ruth Shekinah.png',
    linkedIn: 'https://www.linkedin.com/in/paulshekinah/',
  },
  {
    name: 'Owughikem Nkemakolam Samuel',
    role: 'Frontend Developer',
    imageUrl: '/assets/Team/Nkemakolam Samuel.png',
    linkedIn: 'https://www.linkedin.com/in/owughikem-nkemakolam-samuel',
  },
  {
    name: 'Ikechukwu David Atuma',
    role: 'Frontend Developer',
    imageUrl: '/assets/Team/David Atuma.png',
    linkedIn: 'https://www.linkedin.com/in/ikechukwu-atuma',
  },
  {
    name: 'Abdulazeez Mahmud Enesi',
    role: 'Frontend Developer',
    imageUrl: '/assets/Team/Mahmud Enesi.png',
    linkedIn: 'https://www.linkedin.com/in/enesifrontenddev/',
  },
];

const TeamSection = () => {
  return (
    <section className="mb-[5vw]">
      <h2 className="text-center text-[6.5vw] md:text-[3vw] font-bold mb-8 font-Lora uppercase text-textColor">Meet The Team</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            key={index}>
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-[65vw] md:h-[35vw] lg:h-[18vw] object-cover"
              />
              <div className="bg-productBg border border-darkGreen  text-center py-[0.5vw]">
              <h3 className="text-lg font-semibold text-textColor underline font-Lora">{member.name}</h3>
              <p className="text-textColor font-OpenSans">{member.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
