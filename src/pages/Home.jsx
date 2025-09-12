import { Section } from "../components/Section.jsx";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.gif";
import heroBg from "../assets/banner.png";
import DiscordBanner from "../components/DiscordBanner.jsx";
import {
  Users,
  FlaskConical,
  Coins,
  ShieldCheck,
  Leaf,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,#262520_0%,transparent_60%)]" />
        <div className="absolute inset-0 texture opacity-20" />

        <div className="relative z-10 p-6 sm:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* Contenuto sinistra */}
            <div className="flex-1 flex flex-col gap-4">
              <span className="inline-flex w-max px-3 py-1 rounded-full border border-[#736751]/40 text-[#D9CAB8]/90 text-xs tracking-wider backdrop-blur">
                FiveM Roleplay • Urban Fantasy
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                FALLEN WORLD
                <span className="block text-[#A69981] font-medium text-lg sm:text-2xl">
                  La città resiste. Ma tu sei pronto a farlo?
                </span>
              </h1>
              <p className="max-w-2xl text-[#D9CAB8]/80">
                Dalle ceneri di un mondo spezzato emergono nuove fazioni,
                rituali arcani e tecnologie proibite. Tra rovine illuminate da
                neon tremolanti e antiche magie risvegliate, ogni scelta
                scriverà il destino del tuo personaggio.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/regolamento"
                  className="px-4 py-2 rounded-xl bg-[#736751] text-[#0D0C0A] hover:shadow-glow transition"
                >
                  Entra nelle Regole
                </Link>
                <Link
                  to="/lore"
                  className="px-4 py-2 rounded-xl border border-[#736751] hover:bg-[#262520] transition"
                >
                  Scopri la Storia
                </Link>
              </div>
            </div>

            {/* Logo destra */}
            <img
              src={logo}
              alt="Fallen World logo"
              loading="lazy"
              className="shrink-0 w-full max-w-[14rem] sm:max-w-[18rem] h-auto rounded-2xl opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain"
            />
          </div>
        </div>
      </section>

      <Section title="Cosa ti aspetta" kicker="feature">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Comunità Rinata",
              d: "Dopo anni di oscurità e silenzio, i superstiti hanno una sola possibilità: ricostruire insieme. Famiglie, clan e alleanze si intrecciano per dare vita a nuove comunità in un mondo che non perdona.",
              Icon: Users,
            },
            {
              t: "Arti Arcane & Ingegno",
              d: "La cometa non ha solo mutato la Terra: ha risvegliato energie sopite. Tra ruderi e laboratori dimenticati, potrai fondere scienza e magia per forgiare strumenti, pozioni e reliquie uniche.",
              Icon: FlaskConical,
            },
            {
              t: "Economia Selvaggia",
              d: "Le vecchie monete non hanno più valore. Ora conta ciò che sai fare e ciò che puoi offrire: cacciare, pescare, scavare, commerciare o scambiare reliquie contaminate. Sta a te decidere come sopravvivere.",
              Icon: Coins,
            },
          ].map((f, i) => (
            <li
              key={i}
              className="group p-4 rounded-xl border border-[#262520] bg-[#0D0C0A]/40 hover:bg-[#262520]/40 transition"
            >
              <div className="flex items-start gap-3">
                {/* ICONA con glow + animazione */}
                <span className="relative inline-grid w-12 h-12 place-items-center rounded-xl bg-[#262520] border border-[#736751]/30 text-[#A69981] overflow-visible">
                  {/* Alone glow (radial) che appare all'hover */}
                  <span className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 group-hover:opacity-60 transition duration-300 blur-md bg-[radial-gradient(closest-side,rgba(166,153,129,0.65),transparent)]" />
                  {/* Ring sottile all'hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/30 transition" />
                  {/* Icona */}
                  <f.Icon
                    className="relative w-10 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <h3 className="text-lg text-[#D9CAB8]">{f.t}</h3>
                  <p className="text-sm text-[#D9CAB8]/75">{f.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Comunità" kicker="feature">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Faro",
              d: "Avamposto di segnalazione sulle scogliere: antenne rattoppate, rituali-faro e turni di vedetta contro ciò che la nebbia porta a riva.",
              tags: ["BIT", "OCCUPATA"],
            },
            {
              t: "Grapeseed",
              d: "Campi riconvertiti a serre arcane e idroponica. Qui il baratto è legge e la notte profuma di ozono e salvia.",
              tags: ["BIT", "OCCUPATA"],
            },
            {
              t: "Giardinetti",
              d: "Quartieri residenziali inghiottiti dal verde, orti comunitari e talismani appesi ai lampioni.",
              tags: ["FREE", "OCCUPATA"],
            },
            {
              t: "Grande Boscaglia",
              d: "Una macchia ancestrale cresciuta oltre ogni mappa. Sentieri che cambiano, totem di ferro e resina.",
              tags: ["FREE", "OCCUPATA"],
            },
            {
              t: "Hotel Sud",
              d: "Grattacielo trasformato in cittadella verticale: mercati ai mezzanini e turbine sul tetto.",
              tags: ["FREE", "OCCUPATA"],
            },
            {
              t: "Villa Sud",
              d: "Enclave di vecchie dimore fortificate. Archivi salvati, laboratori discreti e diplomazia tagliente.",
              tags: ["FREE", "OCCUPATA"],
            },
            {
              t: "Stab City",
              d: "Baraccopoli su ruote e rottami. Officine, bikers e contratti di scorta.",
              tags: ["FREE", "OCCUPATA"],
            },
            // Nuove BIT libere
            {
              t: "Castelleto",
              d: "Antico borgo fortificato, ora rifugio tra mura crepate e rituali al chiaro di luna.",
              tags: ["BIT"],
            },
            {
              t: "Diga",
              d: "Struttura idroelettrica semi-funzionante: turbine arrugginite, acqua che canta e segreti nascosti nei condotti.",
              tags: ["BIT"],
            },
            {
              t: "Molo Sandy",
              d: "Vecchio porto adattato a mercato nero e approdi clandestini. Qui si compra ciò che non dovrebbe esistere.",
              tags: ["BIT"],
            },
            {
              t: "Arcade",
              d: "Sala giochi abbandonata, luci al neon difettose e server nascosti nei sotterranei. Il confine tra realtà e illusione è sottile.",
              tags: ["BIT"],
            },
            {
              t: "Motel Paleto",
              d: "Stanze sgangherate, neon sfarfallanti e segreti di passaggio. Qui ogni porta nasconde una storia.",
              tags: ["BIT"],
            },
            {
              t: "Antenna",
              d: "Traliccio radio attivo a intermittenza, usato per segnali criptati e contatti con l’ignoto.",
              tags: ["BIT"],
            },
          ].map((c, i) => {
            // Scelta icona + glow per priorità OCCUPATA > BIT > FREE
            const hasOcc = c.tags.includes("OCCUPATA");
            const hasBit = c.tags.includes("BIT");
            const hasFree = c.tags.includes("FREE");

            const Icon = hasOcc
              ? Lock
              : hasBit
              ? ShieldCheck
              : hasFree
              ? Leaf
              : ShieldCheck;

            // Glow per tag
            const glow = hasOcc
              ? "bg-[radial-gradient(closest-side,rgba(248,113,113,0.6),transparent)]" // red-400
              : hasBit
              ? "bg-[radial-gradient(closest-side,rgba(234,179,8,0.55),transparent)]" // yellow-400
              : "bg-[radial-gradient(closest-side,rgba(74,222,128,0.55),transparent)]"; // green-400

            return (
              <article
                key={i}
                className="group relative p-4 rounded-xl border border-[#262520] bg-[#0D0C0A]/50 hover:bg-[#0D0C0A]/70 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Icona a sinistra con glow */}
                  <span className="relative inline-grid w-12 h-12 place-items-center rounded-xl bg-[#262520] border border-[#736751]/30 text-[#A69981] overflow-visible">
                    <span
                      className={`pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 group-hover:opacity-60 transition duration-300 blur-md ${glow}`}
                    />
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/30 transition" />
                    <Icon
                      className="relative w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>

                  {/* Titolo + badge a destra */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg text-[#D9CAB8]">{c.t}</h3>
                      <div className="flex gap-1">
                        {hasBit && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full border border-yellow-400/40 text-yellow-300">
                            BIT
                          </span>
                        )}
                        {hasFree && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full border border-green-400/40 text-green-300">
                            FREE
                          </span>
                        )}
                        {hasOcc && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full border border-red-400/40 text-red-300">
                            OCCUPATA
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[#D9CAB8]/75 mt-2">{c.d}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <div className="max-w-7xl mx-auto p-4 space-y-8">
        <DiscordBanner
          bgSrc={heroBg}
          logoSrc={logo}
          title="Fallen World • Discord"
          subtitle="News, whitelisting, ticket e spoiler sugli eventi."
          inviteUrl="https://discord.gg/il-tuo-invito"
          buttonText="Unisciti ora"
        />
      </div>
    </div>
  );
}
