export default function Base_Component({
  title,
  title_color,
  teacher,
  color,
  botten_color,
}) {
  return (
    <div className={"rounded-lg w-45 h-40 mt-4 mx-3 shadow " + color}>
      <h1 className={"text-xl flex justify-center " + title_color}>{title}</h1>
      <p className="ml-3 mt-1">{teacher}</p>
      <div
        className={
          "my-6 p-2 text-white rounded-3xl flex justify-center items-center mx-6 " +
          botten_color
        }
      >
        learn more
      </div>
    </div>
  );
}
