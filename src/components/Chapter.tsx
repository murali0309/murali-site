import type { Chapter as ChapterData, ChapterVisual } from '../data/story'

type ChapterProps = {
  chapter: ChapterData
  isFirst?: boolean
}

function ForkVisual() {
  return (
    <svg
      className="fork"
      width="320"
      height="150"
      viewBox="0 0 320 150"
      fontFamily="JetBrains Mono, monospace"
      fontSize="13"
      aria-label="Fork: Design at IIT or Computer Science in Birmingham"
    >
      <circle cx="8" cy="75" r="5" fill="#141414" />
      <path d="M8 75 H50" stroke="#141414" strokeWidth="1.5" />
      <path
        d="M50 75 C90 75 96 26 140 26 H156"
        stroke="#c9c8bf"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 5"
      />
      <circle
        cx="160"
        cy="26"
        r="4"
        fill="#FAFAF7"
        stroke="#a3a39c"
        strokeWidth="1.5"
      />
      <text x="174" y="30" fill="#a3a39c">
        Design · IIT
      </text>
      <path
        d="M50 75 C90 75 96 124 140 124 H156"
        stroke="#6D28D9"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="160" cy="124" r="5" fill="#6D28D9" />
      <text x="174" y="120" fill="#6D28D9" fontWeight="500">
        Computer Science
      </text>
      <text x="174" y="137" fill="#6D28D9" fontWeight="500">
        · Birmingham
      </text>
    </svg>
  )
}

function Visual({ visual }: { visual: ChapterVisual }) {
  if (visual.kind === 'placeholder') {
    return (
      <div className="ph">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          aria-hidden="true"
        >
          <path d="M12 2 3 7v10l9 5 9-5V7z" />
          <path d="M3 7l9 5 9-5M12 12v10" />
        </svg>
        {visual.label}
      </div>
    )
  }

  if (visual.kind === 'fork') {
    return <ForkVisual />
  }

  return (
    <a className="card" href={visual.href}>
      <div>
        <div className="card__t">{visual.title}</div>
        <div className="card__s">{visual.subtitle}</div>
      </div>
      <span className="card__cta">{visual.cta}</span>
    </a>
  )
}

function Chapter({ chapter, isFirst = false }: ChapterProps) {
  const isNext = chapter.year === 'Next'
  const headingId = `${chapter.id}-title`

  return (
    <article
      className={`ch${isNext ? ' ch--next' : ''}${isFirst ? ' ch--first' : ''}`}
      id={chapter.id}
      aria-labelledby={headingId}
    >
      {isNext ? (
        <div className="ch__box">
          <div className="year">{chapter.year}</div>
          <h2 id={headingId}>{chapter.title}</h2>
          <p>{chapter.text}</p>
        </div>
      ) : (
        <>
          <div className="year">{chapter.year}</div>
          <h2 id={headingId}>{chapter.title}</h2>
          <p>{chapter.text}</p>
          {chapter.visual ? <Visual visual={chapter.visual} /> : null}
        </>
      )}
    </article>
  )
}

export default Chapter
