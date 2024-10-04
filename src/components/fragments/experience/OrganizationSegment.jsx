import ExperienceItem from "./ExperienceItem";

const OrganizationSegment = () => {
  const organizationExperience = [
    {
      img: "/img/experience/logo-bem-ft-unsoed.png",
      title: "BEM FT Unsoed",
      position: "Communication and Information Media Division",
      date: "Jan 2021 - Jan 2022",
      description: [
        'Led the "Video Kreatif" program, producing 6 videos.',
        "Assisted in developing the Instagram feed concept for BEM FT Unsoed.",
        "Actively participated in multiple events and activities organized by BEM FT Unsoed.",
      ],
    },
    {
      img: "/img/experience/logo-salman-ft-unsoed.png",
      title: "Salman MM Teknik Unsoed",
      position: "Public Relations and Creative Industries Division",
      date: "Jan 2021 - Jan 2022",
      description: [
        'Led the "Syiar Via Medsos" program, producing 17 article instagram feed.',
        "Assisted in developing the Instagram feed concept for Salman MM Teknik Unsoed.",
        "Actively participated in multiple events and activities organized by Salman MM Teknik Unsoed.",
      ],
    },
  ];
  return (
    <div className="transition duration-300">
      {organizationExperience.map((experience, index) => (
        <ExperienceItem
          key={index}
          img={experience.img}
          title={experience.title}
          position={experience.position}
          date={experience.date}
        >
          <ul className="list-disc pl-5">
            {experience.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </ExperienceItem>
      ))}
    </div>
  );
};

export default OrganizationSegment;
