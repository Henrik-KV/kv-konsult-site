import Link from "next/link";
import Brand from "./Brand";
import { contacts, navItems } from "../lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="mt-6 max-w-sm text-sm leading-6 text-ink-muted">AI och digital utveckling som blir begriplig, införd och användbar i den svenska arbetsvardagen.</p>
          </div>
          <div>
            <p className="footer-label">Navigera</p>
            <ul className="footer-links">
              {navItems.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Direktkontakt</p>
            <ul className="footer-contacts">
              {contacts.map((person) => (
                <li key={person.email}>
                  <span>{person.name}</span>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-action">
            <p className="font-sans text-3xl font-medium leading-tight">Har ni en konkret fråga?</p>
            <Link href="/kontakt" className="text-link mt-5">Skriv till oss<span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KV Konsult AB</p>
          <div><Link href="/integritetspolicy">Integritet</Link><Link href="/villkor">Villkor</Link></div>
        </div>
      </div>
    </footer>
  );
}
