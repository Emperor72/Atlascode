import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.fullstack;

export const meta: ProgramMeta = {
  slug: 'full-stack-web-development',
  title: 'Full-Stack Web Development Bootcamp in Agadir | Atlas Code',
  description:
    'Become a job-ready developer in 12 weeks at our full-stack web development bootcamp in Agadir: React, Node.js, PostgreSQL, real projects, career support.',
  h1: 'Full-Stack Web Development Bootcamp',
  lead: 'Twelve intensive weeks on our Agadir campus to go from solid basics to shipping complete web applications with JavaScript, TypeScript, React, Node.js and PostgreSQL, then presenting your team project on demo day.',
  crumb: 'Full-Stack Web Development',
  summary:
    'Learn to build and deploy complete web applications with JavaScript, TypeScript, React, Node.js and PostgreSQL in 12 full-time weeks on our Agadir campus.',
  badge: 'Full-time · 12 weeks',
  related: [
    '/programs/part-time-web-development/',
    '/admissions/',
    '/blog/how-to-become-web-developer-morocco/',
    '/blog/javascript-vs-python-beginners/',
  ],
  course: {
    name: 'Full-Stack Web Development Bootcamp',
    price: p.price,
    hours: 540,
    weeks: 12,
    mode: 'Onsite',
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
            <div><dt>Schedule</dt><dd>Monday to Friday, 9:00–17:30</dd></div>
            <div><dt>Format</dt><dd>Onsite, on our campus in {site.address.city}</dd></div>
            <div><dt>Language of instruction</dt><dd>English &amp; French, with Darija support</dd></div>
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
            Our full-stack web development bootcamp in Agadir is built for motivated people who want to change what they
            do every day — and who can commit to twelve demanding weeks. Learners come from Agadir itself, but also from
            Inezgane, Aït Melloul, Taroudant, Tiznit and further afield.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Students and recent graduates</h3>
              <p>
                You have a degree or a few years of university — in IT, economics, science or something else entirely —
                and you want the practical, project-based skills that employers ask for in interviews but that lectures
                rarely cover.
              </p>
            </article>
            <article className="card">
              <h3>Career changers</h3>
              <p>
                You work in tourism, retail, teaching, logistics or administration and you are ready to move into tech.
                Many people make this switch later in life; our guide to{' '}
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
              <Link href="/programs/intro-to-coding/">Intro to Coding weekend workshop</Link> or the free pre-work we send
              after admission is enough.
            </li>
            <li>
              A laptop that can run a modern browser, VS Code and Node.js comfortably (8 GB of RAM recommended). If this
              is a barrier, tell us during admissions.
            </li>
            <li>Comfortable reading English or French technical documentation; you do not need to be fluent in both.</li>
            <li>
              Availability for the full schedule, Monday to Friday, plus a few hours of review some evenings and weekends.
            </li>
            <li>
              Passing our short <Link href="/admissions/">admissions process</Link>: an application, a conversation with
              the team and a logic-and-basics exercise.
            </li>
          </ul>
          <p>
            If you work full-time and cannot step away for three months, the{' '}
            <Link href="/programs/part-time-web-development/">part-time web development program</Link> covers the same
            curriculum over 24 weeks of evenings and Saturdays.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            By the end of the twelve weeks, you should be able to take a feature from an idea on a whiteboard to code
            running on the internet. Concretely, you will be able to:
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
            <li>Work in a small team with agile rituals, then present your product confidently on demo day.</li>
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
                practice problem-solving with daily algorithm katas.
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
                In teams of three or four, you plan, build and ship a complete product using sprints, a shared board and
                pull-request reviews. The program closes with demo day, where each team presents its product live and
                answers questions.
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
            Days are structured but hands-on: most of your time is spent writing code, not listening to slides.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Time</th><th scope="col">Activity</th></tr>
              </thead>
              <tbody>
                <tr><td>9:00–9:30</td><td>Stand-up and warm-up kata: what you did yesterday, what blocked you, a short coding challenge.</td></tr>
                <tr><td>9:30–11:00</td><td>Live lesson with an instructor: new concept, live coding and questions.</td></tr>
                <tr><td>11:00–12:30</td><td>Guided exercises in pairs, with instructors circulating to unblock you.</td></tr>
                <tr><td>12:30–13:30</td><td>Lunch break — time to step away from the screen.</td></tr>
                <tr><td>13:30–16:30</td><td>Project work: building the week’s project alone or in a team, with code reviews.</td></tr>
                <tr><td>16:30–17:30</td><td>Review session, demos of the day’s progress and a recap of key points.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Tip:</strong> Fridays often end with a short individual check-in so we can spot difficulties early
              and adjust support before you fall behind.
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
                An accessible, mobile-first site for a local business — think a surf school or a riad in Agadir — built
                from a design mock-up with semantic HTML and modern CSS.
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
                routes — the kind of application many Moroccan businesses need.
              </p>
            </article>
            <article className="card">
              <h3>Final team product</h3>
              <p>
                A product designed and built by your team over two weeks with sprints, tests and continuous deployment,
                then presented live on demo day.
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
                Git, GitHub, pull requests, VS Code, the terminal, npm, ESLint and Prettier, and a shared project board
                for sprints.
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
            Graduates of a full-stack program typically apply for junior roles such as{' '}
            <strong>junior full-stack developer</strong>, <strong>front-end developer (React)</strong>,{' '}
            <strong>junior back-end or Node.js developer</strong>, <strong>web integrator</strong> or{' '}
            <strong>freelance web developer</strong>. Some use the skills to build their own product or digitise a family
            business.
          </p>
          <p>
            Demand exists in Moroccan digital agencies, offshoring and nearshoring companies, startups, and in remote
            roles for European clients — our article on{' '}
            <Link href="/blog/remote-developer-jobs-from-morocco/">remote developer jobs from Morocco</Link> explains how
            that market works, and <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link>{' '}
            looks at the local picture. Salaries vary widely by city, company and your previous experience, so treat any
            figure you read online as a rough indication, not a promise.
          </p>
          <p>
            A bootcamp does not guarantee a job: your results depend on your effort during and after the program, the
            portfolio you build and the current market. What we do provide is structured support through{' '}
            <Link href="/career-services/">Atlas Code career services</Link> — CV and LinkedIn reviews, GitHub portfolio
            feedback, mock technical interviews and guidance on your job search. For the bigger picture, read our
            step-by-step guide on{' '}
            <Link href="/blog/how-to-become-web-developer-morocco/">how to become a web developer in Morocco</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the full-time program is <strong>{p.priceLabel}</strong>. A deposit of {site.deposit} secures
            your seat once you are admitted.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Check the options</h3>
              <p>Payment plans, financing and scholarship opportunities are explained on our tuition page.</p>
              <Link className="card-link" href="/tuition-financing/">See tuition and financing options</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>Fill in the short application, then talk with our team and complete a basic logic exercise.</p>
              <Link className="card-link" href="/admissions/">Read how admissions work</Link>
            </article>
            <article className="card">
              <h3>3. Pick your cohort</h3>
              <p>The next full-time cohort starts {p.nextStart}. Seats are limited to keep groups small.</p>
              <Link className="card-link" href="/upcoming-cohorts/">View upcoming cohort dates</Link>
            </article>
          </div>
          <p>
            Want to see where you will study first? Visit our <Link href="/campus/">Agadir campus and student life</Link>{' '}
            page, or call {site.phone} to arrange a visit.
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
                a: 'You do not need a degree in computer science, but you should have written some basic HTML, CSS and JavaScript. Complete our pre-work or join the Intro to Coding weekend workshop first if you are starting from zero.',
              },
              {
                q: 'Is this a formation développeur web recognised in Morocco?',
                a: 'This is a private, intensive developer training program in Agadir focused on practical skills. You receive an Atlas Code certificate of completion; it is not a state diploma. Employers in tech generally look at your portfolio and technical interview performance more than the certificate itself.',
              },
              {
                q: 'Can I work or study at the same time?',
                a: 'Not realistically. The program runs Monday to Friday from 9:00 to 17:30, with extra review in the evenings. If you need to keep your job, choose the part-time web development program instead.',
              },
              {
                q: 'Which language are classes taught in?',
                a: 'Classes are taught in English and French, with Darija support when a concept needs a different explanation. Code, documentation and most job interviews in tech use English terms, so you will build that vocabulary along the way.',
              },
              {
                q: 'Do I need my own laptop?',
                a: 'Yes, a personal laptop is strongly recommended so you can keep coding at home. Any recent Windows, macOS or Linux machine with 8 GB of RAM will do. Talk to us during admissions if this is a problem.',
              },
              {
                q: 'Why JavaScript and not Python or PHP?',
                a: 'JavaScript runs in every browser and, with Node.js, on the server too, so you learn one language for the whole stack. Many concepts transfer directly to Python or PHP later. If you prefer working with data, look at our Data Analytics bootcamp.',
              },
            ]}
          />
          <p>
            Prefer working with data rather than building apps? Compare this program with the{' '}
            <Link href="/programs/data-analytics/">Data Analytics bootcamp</Link> or the{' '}
            <Link href="/programs/ui-ux-design/">UI/UX Design bootcamp</Link>.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to build your first full-stack application?</h2>
          <p>
            Join the next full-time cohort in Agadir on {p.nextStart}. Apply in a few minutes, or talk to an advisor
            about whether this program fits your goals.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
