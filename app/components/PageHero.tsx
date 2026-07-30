import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  intro,
  current,
  marker = "KV / 01",
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  current: string;
  marker?: string;
  action?: { href: string; label: string };
}) {
  return (
    <section className="page-hero">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: current }]} />
        <div className="page-hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title mt-6 max-w-[15ch]">{title}</h1>
          </div>
          <div className="page-hero-copy">
            <p>{intro}</p>
            {action && (
              <Link href={action.href} className="text-link mt-8">
                {action.label}<span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
          <p className="page-marker" aria-hidden="true">{marker}</p>
        </div>
      </div>
    </section>
  );
}
