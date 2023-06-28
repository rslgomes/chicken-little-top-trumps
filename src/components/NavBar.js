import Link from 'next/link';
import NavRoutes from '../lib/NavRoutes.json';

export default function NavBar() {
  const { routes } = NavRoutes;
  return (
    <div className="nav">
      <input
        type="checkbox"
        id="nav-check"
      />
      <div className="nav-header">
        <div className="nav-title">
          XicoLiro
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>

      <div className="nav-links">
        { routes.map((route) => (
          <Link
            key={ route.id }
            href={ route.path }
          >
            { route.name }
          </Link>
        ))}
      </div>
    </div>
  );
}
