"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Ett sidfel inträffade", error.digest || error.name); }, [error]);
  return <main className="not-found"><div className="container-shell"><p className="eyebrow">Tekniskt fel</p><h1>Sidan kunde inte visas.</h1><p>Försök igen. Om felet återkommer går det bra att kontakta oss direkt via info@kvkonsult.com.</p><button type="button" className="btn-primary" onClick={reset}>Försök igen<span aria-hidden="true">↻</span></button></div></main>;
}
