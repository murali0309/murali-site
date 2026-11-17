const rows = [
  { label: 'Building', value: "[what you're building]", tbd: true },
  { label: 'Learning', value: "[what you're learning]", tbd: true },
  { label: 'Looking for', value: 'Graphics / pipeline developer roles', tbd: false },
] as const

function CurrentlyBox() {
  return (
    <section className="currently" aria-labelledby="currently-heading">
      <h2 className="currently__label label" id="currently-heading">
        <b aria-hidden="true" />
        Currently
      </h2>
      <dl>
        {rows.map((row) => (
          <div className="currently__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd className={row.tbd ? 'tbd' : undefined}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default CurrentlyBox
