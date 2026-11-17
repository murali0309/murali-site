import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/story', label: 'Story', end: false },
  { to: '#', label: 'Work', end: false },
  { to: '#', label: 'Writing', end: false },
  { to: '#', label: 'Contact', end: false },
] as const

type NavProps = {
  /** When true, hide from assistive tech and keyboard (reading mode). */
  inert?: boolean
}

function Nav({ inert = false }: NavProps) {
  return (
    <nav
      className="nav"
      aria-label="Primary"
      aria-hidden={inert || undefined}
      {...(inert ? { inert: true } : {})}
    >
      <div className="nav__in">
        <Link className="nav__logo" to="/" tabIndex={inert ? -1 : undefined}>
          Murali<span>.</span>
        </Link>
        <div className="nav__links">
          {links.map((link) =>
            link.to === '#' ? (
              <span key={link.label} className="nav__placeholder">
                {link.label}
              </span>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                tabIndex={inert ? -1 : undefined}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
