export default function NameApp({ name1, name2 }) {
  return (
    <>
      <div className="primaryName">
        <h1>
          {name1} <span>{name2}</span> {/* solo va el nombre de la app */}
          {""}
        </h1>
      </div>
    </>
  );
}
