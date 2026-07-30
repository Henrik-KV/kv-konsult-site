import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div className="container-shell"><p className="eyebrow">404 / Sidan finns inte</p><h1>Här tog spåret slut.</h1><p>Adressen kan vara gammal eller felskriven. Tjänsterna och kontaktvägarna finns kvar.</p><div><Link href="/" className="btn-primary">Till startsidan<span aria-hidden="true">↗</span></Link><Link href="/tjanster" className="btn-secondary">Se tjänster<span aria-hidden="true">↗</span></Link></div></div></main>;
}
