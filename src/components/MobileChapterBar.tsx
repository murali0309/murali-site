import type { Chapter } from '../data/story'

type MobileChapterBarProps = {
  chapters: Chapter[]
  activeIndex: number
  isReading: boolean
}

function MobileChapterBar({
  chapters,
  activeIndex,
  isReading,
}: MobileChapterBarProps) {
  const chapter = chapters[activeIndex] ?? chapters[0]
  if (!chapter) return null

  const progress = ((activeIndex + 1) / chapters.length) * 100

  return (
    <div
      className={`mbar${isReading ? ' mbar--visible' : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-hidden={!isReading || undefined}
    >
      <span className="mbar__num">
        {activeIndex + 1}/{chapters.length}
      </span>
      <span className="mbar__y">{chapter.year}</span>
      <span className="mbar__n">{chapter.title}</span>
      <span className="mbar__prog" aria-hidden="true">
        <i style={{ width: `${progress}%` }} />
      </span>
    </div>
  )
}

export default MobileChapterBar
