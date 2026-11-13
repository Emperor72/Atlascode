import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.fullstack;

export const meta: ProgramMeta = {
  slug: 'full-stack-web-development',
  title: 'Online Full-Stack Web Development Bootcamp | Atlas Code',
  description:
    'Become a job-ready developer in 12 weeks with our live online full-stack bootcamp for the UK, US and Canada: React, Node.js, PostgreSQL and real projects.',
  h1: 'Online Full-Stack Web Development Bootcamp',
  lead: 'Twelve intensive weeks of live online classes to go from solid basics to shipping complete web applications with JavaScript, TypeScript, React, Node.js and PostgreSQL, then presenting your team project at an online demo day.',
  crumb: 'Full-Stack Web Development',
  summary:
    'Learn to build and deploy complete web applications with JavaScript, TypeScript, React, Node.js and PostgreSQL in 12 full-time weeks of live online classes, in UK or US Eastern time.',
  badge: 'Full-time · 12 weeks · Online',
  related: [
    '/programs/part-time-web-development/',
    '/admissions/',
    '/blog/how-to-become-web-developer-uk/',
    '/blog/javascript-vs-python-beginners/',
  ],
  course: {
    name: 'Online Full-Stack Web Development Bootcamp',
    price: p.price,
    hours: 540,
    weeks: 12,
    mode: 'Online',
  },
};

export default function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Program at a glance</p>
          <h2 className="section-title" id="key-facts">Key facts</h2>
          <dl className="key-facts">
            <div><dt>Duration</dt><dd>12 weeks, full-time (about 540 hours)</dd></div>
            <div><dt>Schedule</dt><dd>Monday to Friday, 9:00–17:30 in your cohort’s time zone</dd></div>
            <div><dt>Format</dt><dd>Live online, in {site.timezones.uk} or {site.timezones.na}</dd></div>
            <div><dt>Language of instruction</dt><dd>English</dd></div>
            <div><dt>Tuition</dt><dd>{p.priceLabel}</dd></div>
            <div><dt>Next start</dt><dd>{p.nextStart}</dd></div>
          </dl>
          <nav className="toc" aria-label="On this page">
            <p className="toc-title">On this page</p>
            <ol>
              <li><a href="#who">Who this bootcamp is for</a></li>
              <li><a href="#outcomes">What you’ll be able to do</a></li>
              <li><a href="#curriculum">Week-by-week curriculum</a></li>
              <li><a href="#typical-day">A typical day</a></li>
              <li><a href="#projects">Projects you’ll build</a></li>
              <li><a href="#tools">Tools and technologies</a></li>
              <li><a href="#careers">Careers after the bootcamp</a></li>
              <li><a href="#tuition">Tuition and next steps</a></li>
              <li><a href="#faq">Program FAQ</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Is it right for you?</p>
          <h2 className="section-title" id="who">Who this bootcamp is for</h2>
          <p className="section-intro">
            Our online full-stack web development bootcamp is built for motivated people in {site.marketsLabel} who want
            to change what they do every day — and who can commit to twelve demanding weeks. You learn from home, live,
            with a small cohort that keeps the same hours as you.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Students and recent graduates</h3>
              <p>
                You have a degree or a few years of university — in computing, economics, science or something else
                entirely — and you want the practical, project-based skills that employers ask for in interviews but that
                lectures rarely cover.
              </p>
            </article>
            <article className="card">
              <h3>Career changers</h3>
              <p>
                You work in hospitality, retail, teaching, logistics or administration and you are ready to move into
                tech. Many people make this switch later in life; our guide to{' '}
                <Link href="/blog/career-change-to-tech-after-30/">changing careers into tech after 30</Link> covers what
                to expect honestly.
              </p>
            </article>
            <article className="card">
              <h3>Freelancers and self-taught coders</h3>
              <p>
                You have built a few WordPress sites or followed YouTube tutorials, but you hit a ceiling. You want
                structure, code review and a real back end so you can take on bigger, better-paid client work.
              </p>
            </article>
          </div>
          <h3>Prerequisites</h3>
          <ul className="checklist">
            <li>
              No computer science degree is required, but you need to have written some code before day one. Our{' '}
              <Link href="/programs/intro-to-coding/">Intro to Coding online weekend workshop</Link> or the free pre-work
              we send after admission is enough.
            </li>
            <li>
              A laptop that can run a modern browser, VS Code and Node.js comfortably (8 GB of RAM recommended), a
              reliable broadband connection, a webcam and a headset with a microphone.
            </li>
            <li>Comfortable reading English technical documentation and taking part in live discussions in English.</li>
            <li>
              Availability for the full live schedule, Monday to Friday, plus a few hours of review some evenings and
              weekends.
            </li>
            <li>
              Passing our short <Link href="/admissions/">admissions process</Link>: an application, a video call with
              the team and a logic-and-basics exercise.
            </li>
          </ul>
          <p>
            If you work full-time and cannot step away for three months, the{' '}
            <Link href="/programs/part-time-web-development/">part-time online web development program</Link> covers the
            same curriculum over 24 weeks of evenings and Saturdays.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            By the end of the twelve weeks, you should be able to take a feature from an idea on a shared whiteboard to
            code running on the internet. Concretely, you will be able to:
          </p>
          <ul className="checklist">
            <li>Use Git and GitHub daily: branches, pull requests, code review and resolving merge conflicts in a team.</li>
            <li>
              Build responsive, accessible interfaces with semantic HTML and modern CSS (Flexbox, Grid, custom
              properties), tested on phones as well as desktops.
            </li>
            <li>
              Write clean, modern JavaScript (ES2023): functions, arrays and objects, modules, promises and async/await,
              and DOM manipulation.
            </li>
            <li>Add TypeScript types to a codebase to catch bugs earlier and make code easier to maintain.</li>
            <li>Build single-page applications in React with components, hooks, routing, forms and data fetching.</li>
            <li>Design and build REST APIs with Node.js and Express, including validation and error handling.</li>
            <li>Model data in PostgreSQL and query it with Prisma, including relations and migrations.</li>
            <li>
              Implement authentication — sign-up, login, password hashing, sessions or tokens — and protect routes
              properly.
            </li>
            <li>Write automated tests for both front-end and back-end code and debug systematically instead of guessing.</li>
            <li>
              Deploy a full-stack application with environment variables, a hosted database and a public URL you can
              share with recruiters.
            </li>
            <li>
              Collaborate in a distributed team with agile rituals and async communication, then present your product
              confidently at our online demo day.
            </li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Curriculum</p>
          <h2 className="section-title" id="curriculum">Week-by-week curriculum</h2>
          <p className="section-intro">
            The program moves from foundations to full applications, with each week building on the last. Every module
            ends with a hands-on project that is reviewed by an instructor.
          </p>
          <ol className="timeline">
            <li>
              <h3>Week 1 · Developer workflow and web foundations</h3>
              <p>
                Command line, VS Code, Git and GitHub from the first morning. How the web works: HTTP, browsers, DNS.
                Semantic HTML, forms and your first pages pushed to a shared repository.
              </p>
            </li>
            <li>
              <h3>Week 2 · CSS, responsive design and accessibility</h3>
              <p>
                Box model, Flexbox and Grid, mobile-first layouts and design tokens with custom properties. Accessibility
                fundamentals: contrast, keyboard navigation, labels and landmarks. You rebuild a real-world style landing
                page from a design file.
              </p>
            </li>
            <li>
              <h3>Weeks 3–4 · JavaScript in depth</h3>
              <p>
                Variables, types, functions, arrays and objects, then modules, closures and modern ES2023 syntax. DOM
                events, fetch and async/await. You build an interactive browser app that consumes a public API, and
                practise problem-solving with daily algorithm katas.
              </p>
            </li>
            <li>
              <h3>Week 5 · TypeScript basics and tooling</h3>
              <p>
                Why types matter, interfaces, unions and generics at a practical level. npm, bundlers and linters. You
                migrate your JavaScript project to TypeScript and see which bugs the compiler catches.
              </p>
            </li>
            <li>
              <h3>Weeks 6–7 · React</h3>
              <p>
                Components, props and state, hooks, effects, forms and client-side routing. Fetching data, loading and
                error states, and organising a growing front end. You build a multi-page React application with a clean
                component structure.
              </p>
            </li>
            <li>
              <h3>Week 8 · Node.js, Express and REST APIs</h3>
              <p>
                Building a server, routing, middleware, validation and error handling. REST conventions, status codes and
                API documentation. Your React app gets its own back end.
              </p>
            </li>
            <li>
              <h3>Week 9 · PostgreSQL, Prisma and authentication</h3>
              <p>
                Relational modelling, SQL essentials, then Prisma for schemas, migrations and queries. Password hashing,
                sessions and JSON Web Tokens, role-based access and common security pitfalls.
              </p>
            </li>
            <li>
              <h3>Week 10 · Testing and deployment</h3>
              <p>
                Unit and integration tests, testing React components and API endpoints, and a short introduction to
                continuous integration. Deploying the front end, API and database, managing environment variables and
                reading production logs.
              </p>
            </li>
            <li>
              <h3>Weeks 11–12 · Final team project and demo day</h3>
              <p>
                In remote teams of three or four, you plan, build and ship a complete product using sprints, a shared
                board and pull-request reviews. The program closes with an online demo day, where each team presents its
                product live and answers questions.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Daily rhythm</p>
          <h2 className="section-title" id="typical-day">A typical day at the bootcamp</h2>
          <p className="section-intro">
            Days are live, structured and hands-on: most of your time is spent writing code with your cohort, not
            watching slides. Times below are in your cohort’s time zone ({site.timezones.uk} or {site.timezones.na}).
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Time</th><th scope="col">Activity</th></tr>
              </thead>
              <tbody>
                <tr><td>9:00–9:30</td><td>Video stand-up and warm-up kata: what you did yesterday, what blocked you, a short coding challenge.</td></tr>
                <tr><td>9:30–11:00</td><td>Live lesson with an instructor: new concept, live coding in a shared environment and questions.</td></tr>
                <tr><td>11:00–12:30</td><td>Remote pair programming in breakout rooms, with instructors and TAs dropping in to unblock you.</td></tr>
                <tr><td>12:30–13:30</td><td>Lunch break — time to step away from the screen.</td></tr>
                <tr><td>13:30–16:30</td><td>Project work: building the week’s project alone or in a team, with code reviews and 1:1 help on request.</td></tr>
                <tr><td>16:30–17:30</td><td>Review session, screen-shared demos of the day’s progress and a recap of key points.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Tip:</strong> Every live lesson is recorded, so you can rewatch a tricky concept later. Fridays
              often end with a short 1:1 video check-in so we can spot difficulties early and adjust support before you
              fall behind. Read more about how our <Link href="/online-learning/">live online classroom</Link> works.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects">Projects you’ll build</h2>
          <p className="section-intro">
            You leave with a GitHub profile full of real code and several deployed projects you can show in interviews.
          </p>
          <div className="grid grid-2">
            <article className="card">
              <h3>Responsive business website</h3>
              <p>
                An accessible, mobile-first site for a small business — think an independent café, a gym or a local
                tradesperson — built from a design mock-up with semantic HTML and modern CSS.
              </p>
            </article>
            <article className="card">
              <h3>Interactive JavaScript app</h3>
              <p>
                A browser application that fetches data from a public API, handles loading and errors, and stores user
                preferences, written first in JavaScript and then migrated to TypeScript.
              </p>
            </article>
            <article className="card">
              <h3>Full-stack booking or marketplace app</h3>
              <p>
                A React front end, Express API and PostgreSQL database with authentication, user roles and protected
                routes — the kind of application small businesses and startups commission all the time.
              </p>
            </article>
            <article className="card">
              <h3>Final team product</h3>
              <p>
                A product designed and built by your remote team over two weeks with sprints, tests and continuous
                deployment, then presented live at online demo day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Stack</p>
          <h2 className="section-title" id="tools">Tools and technologies</h2>
          <p className="section-intro">
            We teach a modern JavaScript stack because it lets you use one language across the front end and the back
            end. If you are still deciding which language to start with, read our comparison of{' '}
            <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link>.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Workflow</h3>
              <p>
                Git, GitHub, pull requests, VS Code, the terminal, npm, ESLint and Prettier, a shared project board for
                sprints, video calls and a team chat workspace for async communication.
              </p>
            </article>
            <article className="card">
              <h3>Front end</h3>
              <p>
                HTML5, CSS3 (Flexbox, Grid, custom properties), JavaScript ES2023, TypeScript, React, React Router and
                browser developer tools.
              </p>
            </article>
            <article className="card">
              <h3>Back end and data</h3>
              <p>
                Node.js, Express, REST APIs, PostgreSQL, Prisma, authentication with hashing and tokens, automated
                testing and cloud deployment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the bootcamp</p>
          <h2 className="section-title" id="careers">Careers this bootcamp prepares you for</h2>
          <p>
            Graduates of a full-stack program typically apply for entry-level roles such as{' '}
            <strong>junior full-stack developer</strong>, <strong>front-end developer (React)</strong>,{' '}
            <strong>junior back-end or Node.js developer</strong>, <strong>web developer</strong> or{' '}
            <strong>freelance web developer</strong>. Some use the skills to build their own product or to automate work
            in their current organisation.
          </p>
          <p>
            Junior roles exist across {site.marketsLabel} in digital agencies, startups, in-house product and IT teams,
            and remote-first companies that hire across time zones. Our overview of{' '}
            <Link href="/blog/junior-tech-jobs-uk-us-canada/">junior tech jobs in the UK, US and Canada</Link> explains
            what employers look for, and our <Link href="/blog/remote-developer-jobs-guide/">remote developer jobs guide</Link>{' '}
            covers how remote hiring works. Salaries vary widely by country, city, company and your previous experience,
            so treat any figure you read online as a rough indication, not a promise.
          </p>
          <p>
            A bootcamp does not guarantee a job: your results depend on your effort during and after the program, the
            portfolio you build and the current market. What we do provide is structured support through{' '}
            <Link href="/career-services/">Atlas Code career services</Link> — CV and LinkedIn reviews, GitHub portfolio
            feedback, mock technical interviews over video and guidance on your job search. For the bigger picture, read
            our step-by-step guide on{' '}
            <Link href="/blog/how-to-become-web-developer-uk/">how to become a web developer in the UK</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the full-time online program is <strong>{p.priceLabel}</strong>. A deposit of {site.deposit}{' '}
            secures your seat once you are admitted.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Check the options</h3>
              <p>Payment plans, financing and scholarship opportunities are explained on our tuition page.</p>
              <Link className="card-link" href="/tuition-financing/">See tuition and financing options</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>Fill in the short application, then have a video call with our team and complete a basic logic exercise.</p>
              <Link className="card-link" href="/admissions/">Read how admissions work</Link>
            </article>
            <article className="card">
              <h3>3. Pick your cohort</h3>
              <p>
                The next full-time cohort starts {p.nextStart}. Choose a UK or US Eastern time cohort; seats are limited to
                keep groups small.
              </p>
              <Link className="card-link" href="/upcoming-cohorts/">View upcoming cohort dates</Link>
            </article>
          </div>
          <p>
            Want to see how studying online works first? Visit our{' '}
            <Link href="/online-learning/">online learning experience</Link> page, or{' '}
            <Link href="/contact/">contact an advisor</Link> to book a short video call.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq">Full-stack bootcamp FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do I need any experience before joining?',
                a: 'You do not need a degree in computer science, but you should have written some basic HTML, CSS and JavaScript. Complete our pre-work or join the Intro to Coding online weekend workshop first if you are starting from zero.',
              },
              {
                q: 'Which time zones do the live classes run in?',
                a: `Each cohort runs on one schedule: either ${site.timezones.uk} or ${site.timezones.na}. You choose the cohort that suits your location and daily life, and all live sessions, stand-ups and demo day follow that time zone.`,
              },
              {
                q: 'Do I need to live in the UK, the US or Canada?',
                a: 'The program is designed for learners in the UK, the US and Canada, and classes run in those time zones. You can join from elsewhere if you can attend live sessions at the cohort times. If you plan to work in a particular country, having the right to work there is your responsibility; we cannot sponsor visas.',
              },
              {
                q: 'Can I work or study at the same time?',
                a: 'Not realistically. The program runs live Monday to Friday from 9:00 to 17:30 in your cohort time zone, with extra review in the evenings. If you need to keep your job, choose the part-time online web development program instead.',
              },
              {
                q: 'What equipment do I need?',
                a: 'A recent Windows, macOS or Linux laptop with 8 GB of RAM or more, a reliable broadband connection, a webcam and a headset with a microphone. A second monitor is helpful for coding while watching a live lesson, but it is not required.',
              },
              {
                q: 'What happens if I miss a live session?',
                a: 'Live lessons are recorded and shared with your cohort, and instructors and TAs can help you catch up online. Attendance at live sessions is expected, though, because pair programming and team projects depend on it.',
              },
              {
                q: 'Why JavaScript and not Python or PHP?',
                a: 'JavaScript runs in every browser and, with Node.js, on the server too, so you learn one language for the whole stack. Many concepts transfer directly to Python or PHP later. If you prefer working with data, look at our Data Analytics bootcamp.',
              },
            ]}
          />
          <p>
            Prefer working with data rather than building apps? Compare this program with the{' '}
            <Link href="/programs/data-analytics/">online Data Analytics bootcamp</Link> or the{' '}
            <Link href="/programs/ui-ux-design/">online UI/UX Design bootcamp</Link>.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to build your first full-stack application?</h2>
          <p>
            Join the next full-time online cohort on {p.nextStart}. Apply in a few minutes, or talk to an advisor about
            whether this program fits your goals.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
