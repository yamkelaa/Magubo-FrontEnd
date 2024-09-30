const ValuesCard = ({name, mainValue, summary, image}) => {

  return (
    <article className="value-card">
      <section className="value-image" style={{ backgroundImage: `url(${image})` }}
></section>
      <p className="value-heading">{name}</p>
      <p className="value">{summary}</p>
    </article>
  )
}
export default ValuesCard