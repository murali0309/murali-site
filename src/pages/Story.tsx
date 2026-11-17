import { useMemo } from 'react'
import Nav from '../components/Nav'
import StoryIntro from '../components/StoryIntro'
import ChapterIndex from '../components/ChapterIndex'
import MobileChapterBar from '../components/MobileChapterBar'
import Chapter from '../components/Chapter'
import CurrentlyBox from '../components/CurrentlyBox'
import Footer from '../components/Footer'
import { chapters } from '../data/story'
import { useStoryReading } from '../hooks/useStoryReading'
import '../styles/story.css'

function Story() {
  const chapterIds = useMemo(
    () => chapters.map((chapter) => chapter.id),
    [],
  )
  const { isReading, activeIndex } = useStoryReading(chapterIds)

  return (
    <div
      className={`story-page${isReading ? ' story-page--reading' : ''}`}
    >
      <Nav inert={isReading} />
      <ChapterIndex
        chapters={chapters}
        activeIndex={activeIndex}
        isReading={isReading}
      />
      <MobileChapterBar
        chapters={chapters}
        activeIndex={activeIndex}
        isReading={isReading}
      />
      <div className="topfade" aria-hidden="true" />
      <StoryIntro inert={isReading} />

      <main className="wrap">
        <section className="story" aria-label="Story chapters">
          {chapters.map((chapter, index) => (
            <Chapter
              key={chapter.id}
              chapter={chapter}
              isFirst={index === 0}
            />
          ))}
        </section>

        <CurrentlyBox />

        <section className="closing" aria-labelledby="closing-heading">
          <h2 id="closing-heading">Want to see what I've made?</h2>
          <div className="closing__links">
            <a href="#">Work →</a>
            <a href="#">Learning Log →</a>
            <a href="#">Contact →</a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Story
