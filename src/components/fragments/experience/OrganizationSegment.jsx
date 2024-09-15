import ExperienceItem from "./ExperienceItem";

const OrganizationSegment = () => {
  const organizationExperience = [
    {
      img: "/img/experience/logo-bem-ft-unsoed.png",
      title: "BEM FT Unsoed",
      position: "Communication and Information Media Division",
      date: "Jan 2021 - Jan 2022",
      description: [
        'Taking responsibility for the "Video Kreatif" program.',
        "Assisting in creating the Instagram feed concept for BEM FT Unsoed.",
        "Supporting BEM FT Unsoed in design-related activities.",
        "Actively participating in various BEM FT Unsoed events and activities.",
      ],
    },
    {
      img: "/img/experience/logo-salman-ft-unsoed.png",
      title: "Salman MM Teknik Unsoed",
      position: "Public Relations and Creative Industries Division",
      date: "Jan 2021 - Jan 2022",
      description: [
        "Actively participating in various events and activities.",
        "Assisting in creating the Instagram feed concept for BEM FT Unsoed.",
        "Supporting BEM FT Unsoed in design-related activities.",
        "Actively participating in various BEM FT Unsoed events and activities.",
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
