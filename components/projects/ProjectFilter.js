export const ProjectFilter = ({ handleClick, active }) => {
  const items = ["All", "React", "Mongo", "Express"];

  return (
    <div className="text-2xl p-2 ml-5">
      {items.map((item) => (
        <button
          key={item}
          className={active === item.toLowerCase() && "active"}
          onClick={() => handleClick(item.toLocaleLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
