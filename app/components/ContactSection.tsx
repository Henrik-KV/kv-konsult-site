"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* Floating Color Orbs för contact section */
function ContactOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-40 right-0 h-[400px] w-[600px] rounded-full bg-sky-600/10 blur-[120px]" />
      <div className="absolute top-1/4 -left-20 h-[300px] w-[300px] rounded-full bg-cyan-500/8 blur-[100px]" />
    </div>
  );
}

/* Paket-data - samma som på kontaktsidan */
const allPackages = [
  { id: "m365-bas", name: "Microsoft 365 Bas", category: "Föreläsningar" },
  { id: "m365-bas-plus", name: "Microsoft 365 Bas+", category: "Föreläsningar" },
  { id: "workshop-m365", name: "Workshop: Microsoft 365 & Copilot", category: "Workshops" },
  { id: "workshop-ai", name: "Workshop: Generell AI", category: "Workshops" },
  { id: "workshop-halv", name: "Skräddarsydd workshop – halvdag", category: "Workshops" },
  { id: "workshop-hel", name: "Skräddarsydd workshop – heldag", category: "Workshops" },
  { id: "nulagesanalys", name: "AI Nulägesanalys", category: "Analys" },
  { id: "ledningsworkshop", name: "Ledningsgruppsworkshop", category: "Analys" },
  { id: "ai-partner-lite", name: "AI-partner Lite", category: "Partnerskap" },
  { id: "ai-partner-full", name: "AI-partner Full", category: "Partnerskap" },
  { id: "webb-lopande", name: "Webbsida + löpande stöd", category: "Webb" },
  { id: "webb-engang", name: "Webbsida: Engångsleverans", category: "Webb" },
];

/* Generera meddelande baserat på valda paket */
function generateMessageFromPackages(packageIds: string[]): string {
  if (packageIds.length === 0) return "";
  
  const packageNames = packageIds
    .map(id => allPackages.find(p => p.id === id)?.name)
    .filter(Boolean);
  
  if (packageNames.length === 1) {
    return `Vi är intresserade av paketet "${packageNames[0]}". Kontakta oss gärna med förslag på datum och pris.`;
  } else {
    const bulletList = packageNames.map(name => `– ${name}`).join("\n");
    return `Vi är intresserade av följande upplägg:\n${bulletList}\n\nHör gärna av er med förslag på datum och nästa steg.`;
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  // Spåra om användaren har redigerat meddelandet manuellt
  const userHasEditedMessage = useRef(false);

  // Hantera paketval - uppdatera ALDRIG meddelandet om användaren har redigerat det
  const handlePackageToggle = (packageId: string) => {
    const newPackages = selectedPackages.includes(packageId)
      ? selectedPackages.filter(id => id !== packageId)
      : [...selectedPackages, packageId];
    
    setSelectedPackages(newPackages);
    
    // Endast uppdatera meddelandet om användaren INTE har redigerat det manuellt
    if (!userHasEditedMessage.current) {
      const newMessage = generateMessageFromPackages(newPackages);
      setFormData(prev => ({ ...prev, message: newMessage }));
    }
  };

  // Markera att användaren har börjat redigera meddelandet
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    userHasEditedMessage.current = true;
    setFormData({ ...formData, message: e.target.value });
    if (errors.message) setErrors({ ...errors, message: "" });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Ange ditt namn";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Ange din e-postadress";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ange en giltig e-postadress";
    }
    if (!formData.organization.trim()) {
      newErrors.organization = "Ange organisation";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Skriv ett meddelande";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Samla ihop valda paket för att skicka med
    const selectedPackageNames = selectedPackages
      .map(id => allPackages.find(p => p.id === id)?.name)
      .filter(Boolean);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPackages: selectedPackageNames,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Något gick fel');
      }

      // Succé!
      setSubmitStatus({
        type: 'success',
        message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.',
      });
      setFormData({ name: '', email: '', organization: '', message: '' });
      setSelectedPackages([]);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Kunde inte skicka meddelandet. Försök igen.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gruppera paket efter kategori
  const packagesByCategory = allPackages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) acc[pkg.category] = [];
    acc[pkg.category].push(pkg);
    return acc;
  }, {} as Record<string, typeof allPackages>);

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-slate-900 py-12 sm:py-20 md:py-28"
    >
      <ContactOrbs />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
          {/* Formulär */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Skicka ett <span className="text-cyan-400">meddelande</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Beskriv kort vad ni behöver hjälp med så återkommer vi inom en arbetsdag.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              {/* Status-meddelande */}
              {submitStatus && (
                <div
                  className={`rounded-xl border p-4 ${
                    submitStatus.type === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                      : 'border-red-500/30 bg-red-500/10 text-red-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus.type === 'success' ? (
                      <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="home-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Namn <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="home-name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-white/10'} bg-slate-800/50 px-4 py-3.5 text-white placeholder-slate-500 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                  placeholder="Ditt namn"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="home-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  E-post <span className="text-sky-400">*</span>
                </label>
                <input
                  type="email"
                  id="home-email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/10'} bg-slate-800/50 px-4 py-3.5 text-white placeholder-slate-500 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                  placeholder="din.epost@exempel.se"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="home-organization"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Organisation <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="home-organization"
                  value={formData.organization}
                  onChange={(e) => {
                    setFormData({ ...formData, organization: e.target.value });
                    if (errors.organization) setErrors({ ...errors, organization: "" });
                  }}
                  className={`w-full rounded-xl border ${errors.organization ? 'border-red-500' : 'border-white/10'} bg-slate-800/50 px-4 py-3.5 text-white placeholder-slate-500 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                  placeholder="Företag eller kommun"
                />
                {errors.organization && (
                  <p className="mt-1 text-sm text-red-400">{errors.organization}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="home-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Meddelande <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="home-message"
                  rows={5}
                  value={formData.message}
                  onChange={handleMessageChange}
                  className={`w-full resize-none rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/10'} bg-slate-800/50 px-4 py-3.5 text-white placeholder-slate-500 transition-all duration-200 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20`}
                  placeholder="Berätta kort vad ni behöver hjälp med..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Paketval */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Vilka tjänster är ni intresserade av? <span className="text-slate-500">(valfritt)</span>
                </label>
                <div className="space-y-4">
                  {Object.entries(packagesByCategory).map(([category, packages]) => (
                    <div key={category}>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">{category}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {packages.map((pkg) => (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => handlePackageToggle(pkg.id)}
                            className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                              selectedPackages.includes(pkg.id)
                                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                                : "border border-white/10 bg-slate-800/50 text-slate-300 hover:border-sky-500/30 hover:text-white"
                            }`}
                          >
                            {selectedPackages.includes(pkg.id) && (
                              <span className="mr-1">✓</span>
                            )}
                            {pkg.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/40 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Skickar...
                    </>
                  ) : (
                    <>
                      Skicka meddelande
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </form>
          </div>

          {/* Kontaktinfo - samma layout som kontaktsidan */}
          <div className="lg:pl-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Kontakta oss <span className="text-cyan-400">direkt</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Nå oss via e-post eller ring någon av oss direkt.
            </p>

            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 sm:grid-cols-1">
              {/* Henrik Karlström */}
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-slate-800/40 p-4 sm:p-6 transition-all duration-300 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10">
                <h3 className="text-lg sm:text-xl font-bold text-white">Henrik Karlström</h3>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <a
                    href="mailto:Henrik@kvkonsult.com"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-sky-400"
                  >
                    <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Henrik@kvkonsult.com
                  </a>
                  <a
                    href="tel:+46703317677"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +46 70 331 76 77
                  </a>
                </div>
              </div>

              {/* Eric Vidmark */}
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-slate-800/40 p-4 sm:p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-lg sm:text-xl font-bold text-white">Eric Vidmark</h3>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <a
                    href="mailto:Eric@kvkonsult.com"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-sky-400"
                  >
                    <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Eric@kvkonsult.com
                  </a>
                  <a
                    href="tel:+46702474756"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +46 70 247 47 56
                  </a>
                </div>
              </div>

              {/* Ulrika Andersson */}
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-slate-800/40 p-4 sm:p-6 transition-all duration-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10">
                <h3 className="text-lg sm:text-xl font-bold text-white">Ulrika Andersson</h3>
                <div className="mt-3 sm:mt-4 space-y-2">
                  <a
                    href="mailto:ulrika@kvkonsult.com"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-sky-400"
                  >
                    <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    ulrika@kvkonsult.com
                  </a>
                  <a
                    href="tel:+46703328508"
                    className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +46 70 332 85 08
                  </a>
                </div>
              </div>
            </div>

            {/* Vad händer sedan? - samma som på kontaktsidan */}
            <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-800/20 p-4 sm:p-6">
              <h3 className="font-semibold text-white">Vad händer <span className="text-cyan-400">sedan?</span></h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Vi läser igenom ert meddelande",
                  "Vi återkommer inom 24 timmar",
                  "Vi bokar in ett kostnadsfritt samtal",
                  "Vi ger konkreta förslag utifrån era behov",
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-xs font-medium text-sky-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra CTA */}
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-400 transition-all duration-300 hover:bg-sky-500/20 hover:border-sky-500/50"
              >
                Gå till kontaktsidan
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
