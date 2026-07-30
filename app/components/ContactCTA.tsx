import Link from "next/link";

export default function ContactCTA({
  heading = "Börja med ett avgränsat samtal.",
  text = "På 30 minuter går vi igenom er situation, vad som är mest angeläget och om KV Konsult är rätt nästa steg. Ni behöver inte ha en färdig kravbild.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container-shell cta-grid">
        <p className="eyebrow text-paper/70">Nästa steg</p>
        <div>
          <h2 id="cta-heading" className="font-sans text-[clamp(2.4rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.045em] text-paper">
            {heading}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-paper/75 md:text-lg">{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/kontakt?type=avstamning" className="btn-light">Boka första samtalet<span aria-hidden="true">↗</span></Link>
          <a href="mailto:info@kvkonsult.com" className="text-link text-paper">info@kvkonsult.com<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
