# 🚀 Deployment Guide – KV Konsult

Denna guide beskriver hur du deployer sajten till Vercel och konfigurerar nödvändiga tjänster.

---

## Steg 1: Resend (E-post)

Kontaktformulären använder **Resend** för att skicka mejl. Det är gratis upp till 3 000 mejl/månad.

### 1.1 Skapa konto
1. Gå till [resend.com](https://resend.com)
2. Registrera ett konto (gratis)
3. Verifiera din e-post

### 1.2 Skapa API-nyckel
1. Gå till [API Keys](https://resend.com/api-keys)
2. Klicka **Create API Key**
3. Ge den ett namn (t.ex. "KV Konsult Production")
4. Kopiera nyckeln – du behöver den i Vercel

### 1.3 (Valfritt) Verifiera domän
Om du vill att mejlen ska skickas från `@kvkonsult.com`:
1. Gå till [Domains](https://resend.com/domains)
2. Lägg till `kvkonsult.com`
3. Följ instruktionerna för DNS-verifiering (TXT- och MX-poster)
4. När verifierad kan du använda `RESEND_FROM_EMAIL=KV Konsult <kontakt@kvkonsult.com>`

> **Tips:** Utan verifierad domän skickas mejl från Resends standardadress, men de kommer fram och innehåller rätt "reply-to".

---

## Steg 2: Vercel Deployment

### 2.1 Första deployment

1. **Pusha till GitHub** (om inte redan gjort):
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Importera i Vercel**:
   - Gå till [vercel.com/new](https://vercel.com/new)
   - Välj ditt GitHub-repo
   - Välj "Next.js" som framework (auto-detekteras)
   - Klicka **Deploy**

3. **Lägg till miljövariabler** (Settings → Environment Variables):
   
   | Variabel | Värde | Beskrivning |
   |----------|-------|-------------|
   | `RESEND_API_KEY` | `re_xxxx...` | Din API-nyckel från Resend |
   | `RESEND_FROM_EMAIL` | `KV Konsult <kontakt@resend.dev>` | Avsändaradress (använd `@resend.dev` om ej verifierad domän) |
   | `CONTACT_EMAIL` | `info@kvkonsult.com` | Mottagare för kontaktformulär |
   | `NEXT_PUBLIC_SITE_URL` | *(lämna tom först)* | Lägg till när du kopplar domän |

4. **Redeploya** efter att variablerna är tillagda:
   - Gå till **Deployments** → klicka på senaste → **Redeploy**

### 2.2 Din sajt är nu live!
Efter deployment får du en URL som:
```
https://kv-konsult-site.vercel.app
```

---

## Steg 3: Verifiera att allt fungerar

### ✅ Kontaktformulär
1. Gå till din Vercel-URL
2. Fyll i kontaktformuläret
3. Skicka och kontrollera att:
   - Grönt "Tack"-meddelande visas
   - Mejl kommer till `info@kvkonsult.com`

### ✅ Analytics
1. Gå till [vercel.com/analytics](https://vercel.com/analytics)
2. Välj ditt projekt
3. Du bör se trafik registreras (kan ta några minuter)

---

## Steg 4: Koppla kvkonsult.com (när ni är redo)

### 4.1 I Vercel
1. Gå till **Settings → Domains**
2. Lägg till `kvkonsult.com` och `www.kvkonsult.com`
3. Vercel ger dig DNS-instruktioner

### 4.2 I ert domänhotell (DNS)
Lägg till följande poster (exakta värden från Vercel):

| Typ | Host | Värde |
|-----|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### 4.3 Uppdatera miljövariabel
1. I Vercel → Settings → Environment Variables
2. Lägg till/uppdatera: `NEXT_PUBLIC_SITE_URL=https://kvkonsult.com`
3. Redeploya

### 4.4 SSL/HTTPS
Vercel hanterar SSL automatiskt. Certifikatet genereras inom några minuter efter DNS är korrekt konfigurerat.

---

## Miljövariabler – Sammanfattning

| Variabel | Krävs | Beskrivning |
|----------|-------|-------------|
| `RESEND_API_KEY` | ✅ Ja | API-nyckel för e-postskick |
| `RESEND_FROM_EMAIL` | ❌ Nej | Avsändaradress (default: Resends) |
| `CONTACT_EMAIL` | ❌ Nej | Mottagare (default: info@kvkonsult.com) |
| `NEXT_PUBLIC_SITE_URL` | ❌ Nej | Canonical URL (sätt vid domänkoppling) |

---

## Felsökning

### Mejl skickas inte
1. Kontrollera att `RESEND_API_KEY` är korrekt i Vercel
2. Kolla Resends dashboard för fel: [resend.com/emails](https://resend.com/emails)
3. Kontrollera att du redeployat efter att ha lagt till variablerna

### Analytics visas inte
- Vercel Analytics aktiveras automatiskt på Pro-plan
- På Hobby-plan: Kontrollera att projektet är deployt till Vercel (funkar ej lokalt)

### Build-fel
- Kör `npm run build` lokalt för att se fel
- Kontrollera att alla filer är committade till Git

---

## Support

Vid frågor, kontakta utvecklaren eller se:
- [Next.js dokumentation](https://nextjs.org/docs)
- [Vercel dokumentation](https://vercel.com/docs)
- [Resend dokumentation](https://resend.com/docs)
