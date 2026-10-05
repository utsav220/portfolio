import { useState } from "react";
import { navLinks, profile } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav__bar">
        <a className="nav__mark" href="#top" onClick={close}>
          {profile.name}
          <span>/</span>SDET
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
