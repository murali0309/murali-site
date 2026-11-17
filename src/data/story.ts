export type ChapterVisual =
  | { kind: 'placeholder'; label: string }
  | { kind: 'fork' }
  | {
      kind: 'card'
      title: string
      subtitle: string
      href: string
      cta: string
    }

export type Chapter = {
  id: string
  year: string
  title: string
  text: string
  visual?: ChapterVisual
}

export const chapters: Chapter[] = [
  {
    id: 'c1',
    year: '[year]',
    title: 'Two sparks',
    text: 'During my BTech in Electronics and Communications, I met the core ideas of computers and programming. Around the same time, I opened Blender and got hooked: modelling 3D objects, lighting them, and rendering them into my own showreel.',
    visual: {
      kind: 'placeholder',
      label: 'Early Blender render (placeholder)',
    },
  },
  {
    id: 'c2',
    year: '[year]',
    title: 'The pause',
    text: 'After graduating, I took a year to step back and figure out which direction I really wanted to go.',
  },
  {
    id: 'c3',
    year: '[year]',
    title: 'The crossroads',
    text: "I had two paths in front of me: a master's in Design at an IIT, or a master's in Computer Science in Birmingham. I chose Computer Science and moved to the UK.",
    visual: { kind: 'fork' },
  },
  {
    id: 'c4',
    year: '[year]',
    title: 'Building things',
    text: "During my master's, I built a prototype AI companion to support primary school students, my first real taste of designing technology for people.",
    visual: {
      kind: 'card',
      title: 'AI Companion for Primary Students',
      subtitle: 'University prototype',
      href: '#',
      cta: 'Read case study →',
    },
  },
  {
    id: 'c5',
    year: '[year] – now',
    title: 'The real world',
    text: 'After graduating, I worked part-time in convenience stores and on contract on production lines. In my spare time, I kept learning frontend and full-stack development, and the foundations of computer graphics programming, using AI tools as my study partners.',
  },
  {
    id: 'c6',
    year: 'Next',
    title: "Where I'm heading",
    text: 'I want to bring my two sparks back together as a computer graphics and pipeline developer, building the tools that help studios make films, with full-stack skills alongside.',
  },
]
