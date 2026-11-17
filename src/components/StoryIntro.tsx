import { scrollToChapter } from '../hooks/useStoryReading'

type StoryIntroProps = {
  /** When true, hide from assistive tech and keyboard (reading mode). */
  inert?: boolean
}

function StoryIntro({ inert = false }: StoryIntroProps) {
  return (
    <section
      className="intro"
      aria-hidden={inert || undefined}
      {...(inert ? { inert: true } : {})}
    >
      <div className="label">My Story</div>
      <h1>My Story</h1>
      <p className="lede">
        I'm Murali. I started out making things in Blender, and I'm working
        toward building the tools behind animated films.
      </p>
      <a
        className="scroll"
        href="#c1"
        aria-label="Scroll to read"
        tabIndex={inert ? -1 : undefined}
        onClick={(event) => {
          event.preventDefault()
          scrollToChapter('c1')
        }}
      >
        <span className="scroll__txt">Scroll to read</span>
        <span className="scroll__mouse" aria-hidden="true" />
        <span className="scroll__chev" aria-hidden="true" />
      </a>
    </section>
  )
}

export default StoryIntro
