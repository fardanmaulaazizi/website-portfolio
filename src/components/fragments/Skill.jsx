const Skill = (props) => {
  const { title, img } = props;
  return (
    <div className="flex basis-[calc(50%-0.5rem)] flex-col items-center rounded-lg bg-slate-100 p-5 shadow-sm md:basis-[calc(25%-0.75rem)] dark:bg-slate-600">
      <img src={img} alt={title} className="mb-3 w-10" />
      <p className="dark:text-slate-300">{title}</p>
    </div>
  );
};

export default Skill;
