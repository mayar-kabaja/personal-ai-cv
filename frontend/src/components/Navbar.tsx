import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <Link href="/" className="navbar__brand">
        AI CV Assistant
      </Link>
      <ul className="navbar__links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
