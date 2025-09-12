# Fallen World — Sito Ufficiale (`fw-website`)

Sito web ufficiale del server **FiveM** _Fallen World_.
Qui presentiamo il progetto, le **comunità** (distinte tra _bit_ e _free_), i **regolamenti**, la **lore** del server, la **lista Team Lore** e la **lista staff**.
Il sito è sviluppato e mantenuto attivamente da **MaDGiiRL** (developer).

---

## 🧰 Stack tecnico

- **React 19** (`react`, `react-dom`)
- **Vite 7** come bundler/dev server
- **Tailwind CSS 4** con **plugin ufficiale Vite**
- **React Router 7** per routing SPA
- **Lucide React** per le icone

---

## 🗂️ Struttura contenuti

Il sito espone:

- **Comunità**
  - _Occupate_: elenco community già assegnate, con contatti/leader e stato.
  - _Libere_: community disponibili per candidature.
- **Regolamenti**
  - Regole RP e regole tecniche (server, anticheat, ticket, sanzioni).
- **Lore del server**
  - Timeline, fazioni, luoghi chiave, eventi canon.
- **Team Lore**
  - Lista del team che cura la lore: ruoli, responsabilità, contatti.
- **Staff**
  - Elenco staffer con ruolo (owner, admin, mod, helper) e orari indicativi.
- **Note legali**
  - _Termini & Condizioni_, _Privacy Policy_ (con modali accessibili).
- **Community & Supporto**
  - Link Discord invito: `https://discord.gg/p8pPKJ6Sex`.

---

## 🧩 Componenti chiave

- `Footer.jsx`
  - Banner “Termini & Condizioni” e “Privacy” (aprono **modali**)
  - Link **Discord** (stesso stile dei banner) 
- `Modal.jsx`
  - Modale accessibile
- `TermsContent.jsx` / `PrivacyContent.jsx`
  - Testi legali (aggiornamento: **12 settembre 2025**)
- Icone con **lucide-react**:

```jsx
import { MessageCircle } from "lucide-react"; 
```

---

## 🎨 Stile & UI

- **Tailwind CSS 4**: plugin Vite ufficiale, configurazione minimale.
- Palette scura personalizzata (toni #0D0C0A, #262520, #736751, #A69981, #D9CAB8).
- Focus ring e hover consistenti su tutti i controlli.
- Layout responsive (flex-wrap/gap sui banner, modali adattive su mobile).

---

## 🧑‍⚖️ Regolamenti & Sanzioni

- Le pagine **Regolamento** e **Termini** definiscono condotta, anticheat, UGC e sanzioni.

---

## 🔐 Privacy

- La **Privacy Policy** spiega basi giuridiche, sicurezza, conservazione, diritti e canale di contatto (ticket Discord).
- Per segnalazioni di vulnerabilità: contatto staff in privato.

---

## 📄 Avvertenze legali

- **FiveM** è un progetto indipendente non affiliato a Rockstar Games.
- Tutti i marchi citati sono dei rispettivi proprietari.
- I contenuti UGC restano degli autori, con licenza d’uso non esclusiva per moderazione e promozione (vedi _Termini_).

---

## 📬 Contatti

- Discord: **https://discord.gg/p8pPKJ6Sex**
- Ticket: canale dedicato su Discord
