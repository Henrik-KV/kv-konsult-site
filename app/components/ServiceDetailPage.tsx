import Link from "next/link";
import ContactCTA from "./ContactCTA";
import PageHero from "./PageHero";

export type ServiceDetailProps = {
  current: string;
  eyebrow: string;
  marker: string;
  title: React.ReactNode;
  intro: string;
  forWhom: string;
  problem: string;
  steps: readonly { title: string; text: string }[];
  outputs: readonly string[];
  preparation: readonly string[];
  related: readonly { label: string; href: string }[];
  contactPackage?: string;
};

export default function ServiceDetailPage({ current, eyebrow, marker, title, intro, forWhom, problem, steps, outputs, preparation, related, contactPackage }: ServiceDetailProps) {
  const contactHref = contactPackage ? `/kontakt?type=paket&packages=${contactPackage}` : "/kontakt?type=avstamning";
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} current={current} marker={marker} action={{ href: contactHref, label: "Ta ett första samtal" }} />
      <section className="section-pad service-answers" aria-labelledby="answers-heading">
        <div className="container-shell"><p className="eyebrow">Det viktigaste först</p><h2 id="answers-heading" className="sr-only">Målgrupp och problem</h2>
          <div className="answer-grid mt-10"><article><p className="answer-index">01 / För vem?</p><h3>{forWhom}</h3></article><article><p className="answer-index">02 / Vilket problem?</p><h3>{problem}</h3></article></div>
        </div>
      </section>
      <section className="section-pad service-process" aria-labelledby="process-heading">
        <div className="container-shell"><div className="section-intro-grid"><p className="eyebrow">Så går leveransen till</p><h2 id="process-heading" className="section-title">Tydliga beslut mellan varje steg.</h2></div>
          <ol className="process-list mt-16">{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>
      <section className="section-pad deliverable-section" aria-labelledby="deliverables-heading">
        <div className="container-shell deliverable-grid"><div><p className="eyebrow">Det ni får</p><h2 id="deliverables-heading" className="section-title mt-6">Leverans som går att ta vidare.</h2></div><ol>{outputs.map((output, index) => <li key={output}><span>0{index + 1}</span><p>{output}</p></li>)}</ol></div>
      </section>
      <section className="preparation-section" aria-labelledby="prepare-heading"><div className="container-shell preparation-grid"><div><p className="eyebrow">Er förberedelse</p><h2 id="prepare-heading">Det här behöver ni ha med.</h2></div><ul>{preparation.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="related-section" aria-labelledby="related-heading"><div className="container-shell related-grid"><h2 id="related-heading" className="eyebrow">Relaterat</h2><div>{related.map((item) => <Link key={item.href} href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>)}</div></div></section>
      <ContactCTA heading="Är det här rätt omfattning?" text="Vi börjar med er situation och säger tydligt om ett mindre upplägg räcker. Under första samtalet avgränsar vi mål, berörda personer och ett rimligt nästa steg." />
    </main>
  );
}
