import type { Chapter } from '../data/story'
import { scrollToChapter } from '../hooks/useStoryReading'

type ChapterIndexProps = {
  chapters: Chapter[]
  activeIndex: number
  isReading: boolean
}

function ChapterIndex({
  chapters,
  activeIndex,
  isReading,
}: ChapterIndexProps) {
  return (
    <aside
      className={`index${isReading ? ' index--visible' : ''}`}
      aria-label="Chapters"
      aria-hidden={!isReading || undefined}
      {...(!isReading ? { inert: true } : {})}
    >
      <span className="label" id="chapter-index-label">
        Chapters
      </span>
      <ol aria-labelledby="chapter-index-label">
        {chapters.map((chapter, index) => {
          const isActive = index === activeIndex
          const isDone = index < activeIndex

          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className={
                  isActive ? 'active' : isDone ? 'done' : undefined
                }
                aria-current={isActive ? 'location' : undefined}
                tabIndex={!isReading ? -1 : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToChapter(chapter.id)
                }}
              >
                <span className="index__y">{chapter.year}</span>
                <span className="index__n">{chapter.title}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

export default ChapterIndex
