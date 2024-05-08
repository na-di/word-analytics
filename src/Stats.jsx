function Stats({
  nuberOfCharacters,
  instagremCharacters,
  facebookCararacters,
  nuberOfWord,
  twiterOfCararacters,
  gogleTitle,
  gogleMetaDescripion,
}) {
  return (
    <section className="stats">
      <Stat lebel={'Words'} nuber={nuberOfWord} />
      <Stat lebel={'Characters'} nuber={nuberOfCharacters} />
      <Stat lebel={'Instagram'} nuber={instagremCharacters} />
      <Stat lebel={'Facebook'} nuber={facebookCararacters} />
      <Stat lebel={'X/Twitter'} nuber={twiterOfCararacters} />
      <Stat lebel={'Google Title'} nuber={gogleTitle} />
      <Stat lebel={'Meta Description'} nuber={gogleMetaDescripion} />
    </section>
  );
}

function Stat({ lebel, nuber }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${nuber < 0 ? 'stat__number--limit' : ''}`}
      >
        {nuber}
      </span>
      <h2 className="second-heading">{lebel}</h2>
    </section>
  );
}

export default Stats;
