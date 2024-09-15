import ExperienceItem from "./ExperienceItem";

const WorkSegment = () => {
  const workExperience = [
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Laboratory Assistant",
      date: "Feb 2022 - Jul 2024",
      description: [
        "Laboratory Assistant of Data Structures (Feb 2022 – Jul 2022)",
        "Laboratory Assistant of Object Oriented Programming (Aug 2022 – Jan 2023)",
        "Laboratory Assistant of Artificial Intelligence (Feb 2023 – Jul 2023)",
        "Coordinator of Laboratory Assistant of Artificial Intelligence (Feb 2024 – Jul 2024)",
      ],
    },
    {
      img: "/img/experience/logo-smpn-2-kalimanah.png",
      title: "SMPN2 Kalimanah",
      position: "Web Developer",
      date: "Aug 2023 - Dec 2023",
      description: [
        "Developed Website for SMPN 2 Kalimanah.",
        "Utilized WordPress to create a simple and elegant design.",
        "Implemented responsive design to ensure compatibility across devices.",
        "Managed content updates, including images, announcements, and event agenda.",
      ],
    },
    {
      img: "/img/experience/logo-pt-rumah-mocaf-indonesia.png",
      title: "PT Rumah Mocaf Indonesia",
      position: "Web Developer",
      date: "Jan 2023 - Feb 2023",
      description: [
        "Developed Web-Based Human Resources Information System using the waterfall software development method and implementing programs with PHP language.",
        "Adapted to changing requirements and feedback from stakeholders.",
        "Participated in various company activity",
      ],
    },
  ];

  return (
    <div>
      {
        workExperience.map((item, index) => (
          <ExperienceItem
            key={index}
            img={item.img}
            title={item.title}
            position={item.position}
            date={item.date}
          >
            <ul className="list-disc pl-5">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))
      }

    </div>
  );
};

export default WorkSegment;
