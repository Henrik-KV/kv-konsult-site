"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import { navItems } from "../lib/content";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => closeRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <header className="site-header">
      <div className="container-shell header-shell flex h-[72px] items-center justify-between gap-6">
        <Brand />
        <nav aria-label="Huvudnavigation" className="desktop-navigation hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link" aria-current={active ? "page" : undefined}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/kontakt?type=avstamning" className="nav-cta desktop-booking hidden lg:inline-flex"><span>Boka ett första samtal</span><span aria-hidden="true">↗</span></Link>
          <button type="button" className="menu-button responsive-menu lg:hidden" aria-label="Öppna meny" aria-expanded={open} onClick={() => setOpen(true)}>
            <span /><span />
          </button>
        </div>
        <noscript>
          <nav className="noscript-nav" aria-label="Mobilnavigation utan JavaScript">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href="/kontakt">Kontakt</a>
          </nav>
        </noscript>
      </div>

      <dialog ref={dialogRef} className="mobile-dialog" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="mobile-dialog-inner">
          <div className="flex h-[72px] items-center justify-between border-b border-ink/15 px-5">
            <Brand />
            <button ref={closeRef} type="button" className="dialog-close" aria-label="Stäng meny" onClick={() => setOpen(false)}><span /><span /></button>
          </div>
          <nav aria-label="Mobilnavigation" className="px-5 py-8">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                    <span className="font-mono text-[0.65rem] text-ink-muted">0{index + 1}</span>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/kontakt?type=avstamning" className="mobile-contact-link" onClick={() => setOpen(false)}><span>Boka första samtalet</span><span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
