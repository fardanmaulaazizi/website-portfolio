import ExperienceItem from "./ExperienceItem";

const WorkSegment = () => {
  const workExperience = [
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Coordinator of Laboratory Assistant - Artificial Intelligence",
      date: "Feb 2024 - Jul 2024",
      description: [
        "Become a practicum coordinator with 8 practicum classes.",
        "Improving 160 students practicum knowledge and skills by assisting them through 6 practicum sessions.",
        "Teaching students about Fuzzy Logic, Expert System, Artificial Neural Networks, and Genetic Algorithms using Mathlab and Dosbox.",
      ],
    },
    {
      img: "/img/experience/logo-smpn-2-kalimanah.png",
      title: "SMPN2 Kalimanah",
      position: "Web Developer",
      date: "Aug 2023 - Dec 2023",
      description: [
        "Developed and maintained the official website for SMPN 2 Kalimanah.",
        "Designed a responsive interface using WordPress to ensure compatibility across various devices.",
        "Managed and updated website content, publishing >10 articles to enhance engagement.",
      ],
    },
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Laboratory Assistant of Artificial Intelligence",
      date: "Feb 2023 - Jul 2023",
      description: [
        "Become a practicum assistant staff with 1 practicum classes.",
        "Improving 12 students practicum knowledge and skills by assisting them through 6 practicum sessions.",
        "Teaching students about Fuzzy Logic, Expert System, Artificial Neural Networks, and Genetic Algorithms using Mathlab and Dosbox.",
      ],
    },
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Laboratory Assistant of Object-Oriented Programming",
      date: "Aug 2022 - Jan 2023",
      description: [
        "Become a practicum assistant staff with 7 practicum classes.",
        "Improving 82 students practicum knowledge and skills by assisting them through 8 practicum sessions.",
        "Teaching students about Class, Object, Inheritance, Polimorphism, Abstract Class, and Interface in Java (Programming Language).",
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
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Laboratory Assistant of Data Stuctures",
      date: "Aug 2022 - Jan 2023",
      description: [
        "Become a practicum assistant staff with 7 practicum classes.",
        "Improving 90 students practicum knowledge and skills by assisting them through 8 practicum sessions.",
        "Teaching students about Linked List, Stack, Queue, Recursive in C++ (Programming Language).",
      ],
    },
  ];

  return (
    <div>
      {workExperience.map((item, index) => (
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
      ))}
    </div>
  );
};

export default WorkSegment;
