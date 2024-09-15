const ExperienceItem = (props) => {
  const { img, title, position, date, children } = props;
  return (
    <div className="mb-5 flex flex-col self-stretch rounded-md bg-slate-100 p-5 dark:bg-slate-600">
      <div>
        <div>
          <img src={img} alt={title} width={50} className="mb-3" />
        </div>
        <div>
          <h3 className="text-md font-bold dark:text-slate-300">{title}</h3>
          <h4 className="text-md dark:text-slate-300">{position}</h4>
        </div>
        <div>
          <h4 className="text-gray-500 dark:text-slate-400">{date}</h4>
        </div>
      </div>
      <div className="dark:text-slate-300">{children}</div>
    </div>
  );
};

export default ExperienceItem;
