export default function NameApp({ name1, name2 }) {
  return (
    <>
      <div className="primaryName">
        <h1>
          {name1} <span>{name2}</span>
          {""}
        </h1>
      </div>
    </>
  );
}
