const OptionButton = (props) => {
  const { title, isActive, onClick } = props;

  return (
    <button
      className={`rounded-lg px-3 py-2 dark:hover:bg-slate-500 ${isActive ? "pointer-events-none bg-emerald-600 text-white" : "bg-slate-200 text-emerald-600 hover:cursor-pointer hover:bg-emerald-100 dark:bg-slate-600 dark:text-white"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default OptionButton;
