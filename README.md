# CleverReach Testprojekt!

Das hier ist das Testprojekt für CleverReach. Ziel war es, ein Formular zu erstellen, bei dem der Endnutzer seine Daten eingeben kann und als Resultat ein Vertrag zur Auftragsverarbeitung erstellt wird.

Ein Link zu der Preview ist hier zu finden: [https://cleverreach-test.vercel.app/](https://cleverreach-test.vercel.app/)

Meine benötigte Zeit betrug ungefähr 8 Stunden.

## Meine Herangehensweise

- NextJS als React Framework
- TailwindCSS für das Styling
- ReactHookForm für performante Form-Validation
- Zod als Typescript Form Resolver
- React-Signature-Canvas für die Integration des Unterschriften-Feldes
- Die Navigationsleisten dienen aktuell nur der Dekoration und haben keine hinterlegte Funktion.

## Ziel

Da ich mich in diesem Projekt nur auf das Frontend bezogen habe, habe ich die verarbeiteten Daten einfach in einem neuen Route ausgegeben, nachdem man das Formular absendet. Dazwischen könnte man einen Datenbankzugriff schalten, welcher die Daten auf einem Server ablegt. Als Möglichkeit für den Endnutzer das Formular zu abzuspeichern habe ich die CSS Datei für Print optimiert, sodass der Vertrag per Knopfdruck druckbar ist.

## Weiterführende Gedanken

Wenn ich in der Praxis (weiter) an dem Projekt arbeiten würde, würde ich die Components auslagern und eine UI-Library erstellen um die Components wiederverwendbar zu machen. Ebenfalls würde ich die Typography Components weiter ausarbeiten. Dies ermöglicht die einfache Erstellung von Varianten welche ich dann z.B. in Storybook für jeden Co-Developer gut dokumentiert darstellen kann. In diesem Projekt ist dies bisher einfach mit globalen Tailwind Klassen gelöst welche in der globals.scss Datei mit der @apply rule deklariert werden.

## Projekt testen

Gerne kannst du das Projekt klonen und die Funktionen auf Herz und Nieren testen.

Projekt Initialisieren

```bash
npm install
```

Development Server

```bash
npm run dev
```

Production Build

```bash
npm run build
```

## Build Logs

```bash
> cleverreach-test@0.1.0 build
> next build

info  - Linting and checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (3/3)
info  - Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                      27 kB           106 kB
├   /_app                                  0 B            77.2 kB
├ ○ /404                                   181 B          77.4 kB
└ λ /av-vertrag                            4.77 kB          84 kB
+ First Load JS shared by all              80.4 kB
  ├ chunks/framework-114634acb84f8baa.js   45.4 kB
  ├ chunks/main-010ff0b6bbe5ac8f.js        27.1 kB
  ├ chunks/pages/_app-981aec4472912c18.js  3.96 kB
  ├ chunks/webpack-b8f8d6679aaa5f42.js     755 B
  └ css/11d5a01771f2f7e3.css               3.22 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
