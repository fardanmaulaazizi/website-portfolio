import ExperienceItem from "./ExperienceItem";

const EducationSegment = () => {
  const educationExperience = [
    {
      img: "/img/experience/logo-unsoed.png",
      title: "Universitas Jenderal Soedirman",
      position: "Bachelor in Informatics (GPA 3.96)",
      date: "Sep 2020 - Sep 2024",
      description: null,
    },
    {
      img: "/img/experience/logo-bangkit.png",
      title:
        "MSIB – Bangkit Academy Led by Google, Tokopedia, Gojek, & Traveloka",
      position: "Mobile Development",
      date: "Aug 2023 - Feb 2024",
      description: null,
    },
  ];
  return (
    <div>
      {educationExperience.map((item, index) => (
        <ExperienceItem
          key={index}
          img={item.img}
          title={item.title}
          position={item.position}
          date={item.date}
        >
          {item.description}
        </ExperienceItem>
      ))}
    </div>
  );
};

export default EducationSegment;
