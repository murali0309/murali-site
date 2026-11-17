import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Placeholder home page. More coming soon.</p>
      <p>
        <Link to="/story">Go to My Story</Link>
      </p>
    </main>
  )
}

export default Home
