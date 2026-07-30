import Breadcrumbs from "./Breadcrumbs";

export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <main className="legal-page">
    <header className="legal-header"><div className="container-shell"><Breadcrumbs items={[{ label: "Start", href: "/" }, { label: title }]} /><p className="eyebrow mt-16">Juridiskt</p><h1>{title}</h1><p>{intro}</p></div></header>
    <section className="section-pad"><div className="container-shell prose-legal">{children}</div></section>
  </main>;
}
