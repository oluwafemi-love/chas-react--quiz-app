# 🦍 React TS - Quiz App

I denna uppgift kommer ni att bygga en mobile first quiz-applikation. "Mobile first" innebär att man designar och stylar med en mobilskärms storlek som utgångspunkt. Designen ska fortfarande vara responsiv för alla skärmstolekar. Ni kommer jobba i sprints om 14 dagar, skapa ett system med tickets för varje enskild uppgift och kunna jobba relativt enskilt med era egna branches men samtidigt ha full koll på vem i gruppen som gör vad och vad som återstår att göra.

## 📦 Leverabler

1. En quiz-app som utvecklats så långt ni realistiskt hinner med under gällande period
2. En kanban board med tickets som tilldelats till rätt personer och flyttats till rätt kolumner baserat på status
3. En renskriven logg

## 🎯 Delmål

## 🖼️ 1. Välj ut en design

- [ ] **Genomförd**

Ni har fria händer vad gäller design. Nedan finns två exempel:

[Designexempel 1](https://dribbble.com/shots/19036723-Quiz-mobile-app-concept)

[Designexempel 2](https://dribbble.com/shots/25565149-Quizo-Quiz-Mobile-App)

### Appen ska också fungera på desktop/stora skrämar. Skifta mellan stor skärm och mobilvy för att säkerställa att stylingen täcker båda fall

### Tips 1

Börja smått med ett par kategorier av frågor där spelaren kryssar i ett av flera svarsalternativ. Bygg sedan vidare med fritext, multiple choice, tidsbegränsningar per fråga, versus mode etc.

## 2. 🧑‍🔬 Förberedelser

- [ ] **Genomförd**

1. Skapa ett nytt React-projekt - `npm create vite@latest my-react-app -- --template react-ts`

   - Byt ut `my-react-app` mot projektets faktiska namn

2. Bestäm vilka dependencies som ska användas. Utnyttja Reacts ekosystem av tredjepartsbibliotek. Använd färdiga UI-komponenter från exempelvis [shadcn](https://ui.shadcn.com/), förbättra det visuella och användarupplevelsen med t.ex. [motion](https://motion.dev/) eller [dnd kit](https://dndkit.com/), underlätta logiktunga uppgifter med bilbiotek som [lodash](https://lodash.com/) etc.

   - Kanske finns det redan NPM-paket specifikt för quiz-applikationer? Säkerställ att paketet har många nedladdningar, fortfarande underhålls och att uppdateringar har publicerats relativt nyligen. Då är paketet troligtvis relevant och säkert att använda.

### Tips 2

Om ni jobbar med formulär är det bäst att installera ett bibliotek som hanterar detta, då formulärhantering i React kan vara något knepigare än vad ni är vana vid. En stark rekommendation är att använda TanStack Form - `@tanstack/react-form`. Det är väldigt snabbt och smidigt att [konfigurera med hjälp av deras guide](https://tanstack.com/form/latest/docs/overview) som innehåller tydliga kodexempel.

## 3. Strukturera era sprints

- [ ] **Genomförd**

### För sprintledaren

1. Skapa ett Trello-konto och sätt upp en enkel Kanban board
2. Bjud in resten av gruppen och gå igenom grunderna i Kanban

   - Jobba i 14-dagarssprints
   - Börja varje sprint med planering - Dra in tickets från "backlog" till "todo".
   - Förklara verifieringssteget - Jobba med branches, pull requests, code review etc.
   - Synka hela gruppen tillsammans 1-2 gånger i veckan
   - Ha en sprintsummering på slutet av varje 14-dagarsperiod. Retros och andra ceremonier är valfria, men gå alltid igenom nya, mergade ändringar, förbättringar samt eventuella buggar

### För övriga gruppmedlemamar

1. Håll er första sprint planning och skapa relevanta tickets tillsammans.

   - Om det blir överkurs att introducera epics _och_ stories så räcker det med bara stories/tickets

2. Bestäm en rutin för hur ni ska hantera pull requests och code reviews

   - Jobba med nya branches för varje ticket
   - Skapa alltid en ny branch efter att du mergat in i main
   - Reviewa varandras pull requests. Alla behöver inte titta på allt, men 1-2 personer ska titta igenom och godkänna innan något mergas till main.

3. Ta hjälp av varandra

   - Kombinera era olika kunskaper och dela dem med varandra för bästa möjliga resultat

### Nu har ni allt som behövs för att börja jobba på ert quiz-projekt! 🎉

## 4. För en kontinuerlig logg

Varje individ ska föra en log för varje sprint. Skriv kort ned några svar på följande frågor:

- Vad har jag lärt mig denna sprint?
- Vilka problem har jag stött på?
- Vad kan jag göra bättre till nästa sprint?
- Vad gör jag nu som jag inte gjorde förra sprinten (Både positivt och negativt)?

### Inför sista fredagen av detta projekt

Renskriv dina anteckningar och summera dem till en kort och koncis punktlista med de viktigaste insikterna. Detta kommer var och en att redovisa på slutet.


<!-- English -->

# 🦍 React TS - Quiz App

In this assignment, you will build a mobile first quiz application. "Mobile first" means that you design and style with a mobile screen size as a starting point. The design should still be responsive for all screen sizes. You will work in sprints of 14 days, create a system with tickets for each individual task and be able to work relatively individually with your own branches but at the same time have full control over who in the group is doing what and what remains to be done.

## 📦 Deliverables

1. A quiz app that is developed as far as you can realistically manage during the current period
2. A kanban board with tickets assigned to the right people and moved to the right columns based on status
3. A clean log

## 🎯 Interim goals

## 🖼️ 1. Choose a design

- [ ] **Completed**

You have free rein when it comes to design. Below are two examples:

[Design Example 1](https://dribbble.com/shots/19036723-Quiz-mobile-app-concept)

[Design Example 2](https://dribbble.com/shots/25565149-Quizo-Quiz-Mobile-App)

### The app should also work on desktop/large screens. Switch between large screen and mobile view to ensure that the styling covers both cases

### Tip 1

Start small with a couple of categories of questions where the player checks one of several answer options. Then build further with free text, multiple choice, time limits per question, versus mode etc.

## 2. 🧑‍🔬 Preparations

- [ ] **Done**

1. Create a new React project - `npm create vite@latest my-react-app -- --template react-ts`

- Replace `my-react-app` with the actual name of the project

2. Decide which dependencies to use. Take advantage of React's ecosystem of third-party libraries. Use ready-made UI components from e.g. [shadcn](https://ui.shadcn.com/), improve the visuals and user experience with e.g. [motion](https://motion.dev/) or [dnd kit](https://dndkit.com/), facilitate logic-heavy tasks with autobiotech like [lodash](https://lodash.com/) etc.

- Maybe there are already NPM packages specifically for quiz applications? Make sure the package has a lot of downloads, is still being maintained, and that updates have been published relatively recently. Then the package is likely relevant and safe to use.

### Tip 2

If you work with forms, it is best to install a library that handles this, as form handling in React can be a bit trickier than you are used to. A strong recommendation is to use TanStack Form - `@tanstack/react-form`. It is very quick and easy to [configure using their guide](https://tanstack.com/form/latest/docs/overview) which contains clear code examples.

## 3. Structure your sprints

- [ ] **Done**

### For the sprint leader

1. Create a Trello account and set up a simple Kanban board

2. Invite the rest of the team and go over the basics of Kanban

- Work in 14-day sprints

- Start each sprint with planning - Pull tickets from "backlog" to "todo".

- Explain the verification step - Work with branches, pull requests, code review etc.
- Sync the whole team together 1-2 times a week
- Have a sprint summary at the end of each 14-day period. Retros and other ceremonies are optional, but always review new, merged changes, improvements and any bugs

### For other team members

1. Hold your first sprint planning and create relevant tickets together.

- If introducing epics _and_ stories is too much, just stories/tickets will suffice

2. Decide on a routine for how you will handle pull requests and code reviews

- Work with new branches for each ticket

- Always create a new branch after you merge into main

- Review each other's pull requests. Not everyone needs to look at everything, but 1-2 people should look through and approve before something is merged into main.

3. Get help from each other

- Combine your different knowledge and share it with each other for the best possible result

### Now you have everything you need to start working on your quiz project! 🎉

## 4. For a continuous log

Each individual should keep a log for each sprint. Write down some answers to the following questions:

- What have I learned this sprint?

- What problems have I encountered?

- What can I do better for the next sprint?

- What am I doing now that I didn't do last sprint (Both positive and negative)?

### Before the last Friday of this project

Clear your notes and summarize them into a short and concise bulleted list with the most important insights. This will be reported by each person at the end.


