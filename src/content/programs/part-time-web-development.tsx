import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.parttime;

export const meta: ProgramMeta = {
  slug: 'part-time-web-development',
  title: 'Part-Time Web Development Bootcamp in Agadir | Atlas Code',
  description:
    'Learn full-stack web development in Agadir without quitting your job: 24 weeks of evenings and Saturdays, React, Node.js, PostgreSQL and real projects.',
  h1: 'Part-Time Web Development Bootcamp',
  lead: 'The complete full-stack curriculum — JavaScript, TypeScript, React, Node.js and PostgreSQL — spread over 24 weeks of weekday evenings and Saturday mornings, so you can retrain while you keep working.',
  crumb: 'Part-Time Web Development',
  summary:
    'The full-stack curriculum over 24 weeks of Tuesday and Thursday evenings plus Saturday mornings, designed for people who work.',
  badge: 'Part-time · 24 weeks',
  related: [
    '/programs/full-stack-web-development/',
    '/tuition-financing/',
    '/blog/career-change-to-tech-after-30/',
    '/blog/how-to-prepare-for-coding-bootcamp/',
  ],
  course: {
    name: 'Part-Time Web Development Bootcamp',
    price: p.price,
    hours: 300,
    weeks: 24,
    mode: 'Blended',
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
            <div><dt>Duration</dt><dd>24 weeks, part-time (about 300 live hours plus self-study)</dd></div>
            <div><dt>Schedule</dt><dd>Tuesday and Thursday 18:30–21:30, Saturday 9:00–14:00</dd></div>
            <div><dt>Format</dt><dd>Blended: onsite evenings in {site.address.city}, plus online sessions when needed</dd></div>
            <div><dt>Language of instruction</dt><dd>English &amp; French, with Darija support</dd></div>
            <div><dt>Tuition</dt><dd>{p.priceLabel}</dd></div>
            <div><dt>Next start</dt><dd>{p.nextStart}</dd></div>
          </dl>
          <nav className="toc" aria-label="On this page">
            <p className="toc-title">On this page</p>
            <ol>
              <li><a href="#who">Who the part-time program is for</a></li>
              <li><a href="#outcomes">What you’ll be able to do</a></li>
              <li><a href="#curriculum">Week-by-week curriculum</a></li>
              <li><a href="#typical-week">A typical week</a></li>
              <li><a href="#projects">Projects you’ll build</a></li>
              <li><a href="#tools">Tools and technologies</a></li>
              <li><a href="#careers">Careers after the program</a></li>
              <li><a href="#tuition">Tuition and next steps</a></li>
              <li><a href="#faq">Program FAQ</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Is it right for you?</p>
          <h2 className="section-title" id="who">Who the part-time program is for</h2>
          <p className="section-intro">
            Not everyone can stop earning for three months. This part-time web development bootcamp in Agadir is
            designed for people with jobs, families or studies who still want a serious, structured path into software
            development.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Working professionals</h3>
              <p>
                You work in a hotel, a bank, a call centre, a school or an administration in Agadir, Inezgane or Aït
                Melloul, and you want to retrain without giving up your salary while you learn.
              </p>
            </article>
            <article className="card">
              <h3>Career changers over 30</h3>
              <p>
                You have responsibilities and you need a realistic timeline. Our article on{' '}
                <Link href="/blog/career-change-to-tech-after-30/">making a career change to tech after 30</Link> covers
                the questions most people in your position ask.
              </p>
            </article>
            <article className="card">
              <h3>Students and freelancers</h3>
              <p>
                You are finishing a degree, or you already freelance and want stronger front-end and back-end skills to
                take on larger projects — without pausing your current activity.
              </p>
            </article>
          </div>
          <h3>Prerequisites</h3>
          <ul className="checklist">
            <li>
              Basic familiarity with HTML, CSS or JavaScript. If you have never coded, start with our{' '}
              <Link href="/programs/intro-to-coding/">Intro to Coding weekend workshop</Link> or the pre-work we send
              after admission.
            </li>
            <li>
              About 8–10 hours per week of self-study on top of the live sessions. This is the single biggest factor in
              how much you get out of the program.
            </li>
            <li>A personal laptop that runs VS Code, Node.js and a modern browser (8 GB of RAM recommended).</li>
            <li>Reliable internet at home for the occasional online session and for submitting projects.</li>
            <li>
              Completing our <Link href="/admissions/">admissions process</Link>, which includes a conversation about
              how you will fit the program into your week.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            You follow the same curriculum as our{' '}
            <Link href="/programs/full-stack-web-development/">full-time full-stack web development bootcamp</Link>, at a
            pace designed for working adults. By the end you will be able to:
          </p>
          <ul className="checklist">
            <li>Use Git and GitHub confidently, including branches, pull requests and code review.</li>
            <li>Build responsive, accessible web pages with semantic HTML and modern CSS layouts.</li>
            <li>Write modern JavaScript (ES2023), work with APIs using fetch and async/await, and manipulate the DOM.</li>
            <li>Use TypeScript basics to make your code safer and easier to maintain.</li>
            <li>Build React applications with components, hooks, routing and forms.</li>
            <li>Create REST APIs with Node.js and Express, with validation and error handling.</li>
            <li>Design PostgreSQL databases and query them with Prisma.</li>
            <li>Add authentication and authorisation to an application safely.</li>
            <li>Write automated tests and deploy a full-stack application to the internet.</li>
            <li>Collaborate in a team on a real product and present it on demo day.</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Curriculum</p>
          <h2 className="section-title" id="curriculum">Week-by-week curriculum</h2>
          <p className="section-intro">
            Each block takes roughly twice as long as in the full-time program, which leaves room for practice between
            sessions and for real life.
          </p>
          <ol className="timeline">
            <li>
              <h3>Weeks 1–2 · Developer workflow and web foundations</h3>
              <p>
                Terminal, VS Code, Git and GitHub. How the web works, semantic HTML and forms. Your first pages,
                published to a repository and reviewed.
              </p>
            </li>
            <li>
              <h3>Weeks 3–4 · CSS, responsive design and accessibility</h3>
              <p>
                Flexbox, Grid, mobile-first layouts and custom properties. Accessibility essentials — contrast, focus
                states, labels and landmarks — applied to a landing page built from a design file.
              </p>
            </li>
            <li>
              <h3>Weeks 5–8 · JavaScript in depth</h3>
              <p>
                Core language, functions, arrays and objects, then modules, closures and ES2023 syntax. Events, the DOM,
                fetch and async/await. A weekly problem-solving exercise keeps your logic sharp.
              </p>
            </li>
            <li>
              <h3>Weeks 9–10 · TypeScript basics and tooling</h3>
              <p>
                Types, interfaces and unions, npm, bundlers and linters. You migrate an existing JavaScript project to
                TypeScript.
              </p>
            </li>
            <li>
              <h3>Weeks 11–14 · React</h3>
              <p>
                Components, state, hooks, effects, routing, forms and data fetching. You build a multi-page React
                application and learn to structure a growing codebase.
              </p>
            </li>
            <li>
              <h3>Weeks 15–16 · Node.js, Express and REST APIs</h3>
              <p>
                Servers, routes, middleware, validation, error handling and REST conventions. Your front end gets a real
                back end.
              </p>
            </li>
            <li>
              <h3>Weeks 17–18 · PostgreSQL, Prisma and authentication</h3>
              <p>
                Relational modelling, SQL essentials, Prisma schemas and migrations. Password hashing, sessions or
                tokens, roles and common security mistakes to avoid.
              </p>
            </li>
            <li>
              <h3>Weeks 19–20 · Testing and deployment</h3>
              <p>
                Unit and integration tests, an introduction to continuous integration, and deploying your front end, API
                and database with environment variables.
              </p>
            </li>
            <li>
              <h3>Weeks 21–24 · Final team project and demo day</h3>
              <p>Teams plan and ship a complete product over four weeks of sprints, then present it live on demo day.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Weekly rhythm</p>
          <h2 className="section-title" id="typical-week">A typical week</h2>
          <p className="section-intro">
            Three live sessions anchor your week. Self-study fills the gaps, at times that suit your job.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Day</th><th scope="col">Time</th><th scope="col">What happens</th></tr>
              </thead>
              <tbody>
                <tr><td>Monday</td><td>Flexible</td><td>Self-study: review the previous Saturday’s material, short exercises and reading (about 2 hours).</td></tr>
                <tr><td>Tuesday</td><td>18:30–21:30</td><td>Live session on campus: new concept, live coding, guided practice.</td></tr>
                <tr><td>Wednesday</td><td>Flexible</td><td>Self-study and project work; ask questions in the cohort chat.</td></tr>
                <tr><td>Thursday</td><td>18:30–21:30</td><td>Live session: second concept of the week, code review and pair programming.</td></tr>
                <tr><td>Friday</td><td>Flexible</td><td>Light review or rest — sustainability matters over 24 weeks.</td></tr>
                <tr><td>Saturday</td><td>9:00–14:00</td><td>Long workshop: project building, team work, demos and individual feedback.</td></tr>
                <tr><td>Sunday</td><td>Flexible</td><td>Finish the week’s project or catch up (about 2–3 hours).</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Blended format:</strong> evening sessions take place on campus. When needed — for example during
              exam periods or exceptional circumstances — some sessions move online so the cohort stays on track.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects">Projects you’ll build</h2>
          <p className="section-intro">
            Every module ends with a project, so you build a portfolio steadily over six months.
          </p>
          <div className="grid grid-2">
            <article className="card">
              <h3>Responsive site for a local business</h3>
              <p>
                An accessible, mobile-first website for a business such as a cooperative, a café or a surf camp, built
                from a design mock-up.
              </p>
            </article>
            <article className="card">
              <h3>JavaScript and TypeScript app</h3>
              <p>An interactive app powered by a public API, first in JavaScript and then migrated to TypeScript.</p>
            </article>
            <article className="card">
              <h3>Full-stack application</h3>
              <p>
                A React, Express and PostgreSQL application with user accounts, roles and protected data, deployed with a
                public URL.
              </p>
            </article>
            <article className="card">
              <h3>Team capstone</h3>
              <p>A product designed and shipped by your team across four weeks, presented on demo day.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Stack</p>
          <h2 className="section-title" id="tools">Tools and technologies</h2>
          <p className="section-intro">
            One language across the whole stack makes the most of limited time. Our comparison of{' '}
            <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link> explains why we
            chose it for web development.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Workflow</h3>
              <p>Git, GitHub, VS Code, the terminal, npm, ESLint, Prettier and a shared sprint board.</p>
            </article>
            <article className="card">
              <h3>Front end</h3>
              <p>HTML5, CSS3 (Flexbox, Grid), JavaScript ES2023, TypeScript, React and React Router.</p>
            </article>
            <article className="card">
              <h3>Back end and data</h3>
              <p>Node.js, Express, REST APIs, PostgreSQL, Prisma, authentication, testing tools and cloud deployment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the program</p>
          <h2 className="section-title" id="careers">Careers this program prepares you for</h2>
          <p>
            The part-time program targets the same entry-level roles as the full-time bootcamp:{' '}
            <strong>junior full-stack developer</strong>, <strong>front-end or React developer</strong>,{' '}
            <strong>junior Node.js developer</strong>, <strong>web integrator</strong> and{' '}
            <strong>freelance web developer</strong>. Some learners also use their new skills inside their current
            company — automating tasks, building internal tools or moving into a digital team.
          </p>
          <p>
            Because you keep working while you learn, your transition can be gradual: freelance projects in the evenings
            first, then a move into a full-time developer role when the opportunity is right. Our guide to{' '}
            <Link href="/blog/remote-developer-jobs-from-morocco/">remote developer jobs from Morocco</Link> and our
            overview of <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link>{' '}
            describe where junior developers find work. Pay varies a lot by employer, city and experience, so treat
            online salary figures as rough market indications only.
          </p>
          <p>
            No bootcamp can guarantee a job. Your outcome depends on your practice, your portfolio and the market.{' '}
            <Link href="/career-services/">Atlas Code career services</Link> support part-time learners with CV and
            LinkedIn reviews, portfolio feedback, mock interviews and job-search coaching — scheduled around your working
            hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the part-time program is <strong>{p.priceLabel}</strong>. Because you can keep your income, many
            learners prefer to spread the cost with a payment plan.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Plan your budget</h3>
              <p>Compare payment plans, financing and scholarships for working learners.</p>
              <Link className="card-link" href="/tuition-financing/">Explore tuition and payment plans</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>Submit a short application, talk with our team and complete a basic logic exercise.</p>
              <Link className="card-link" href="/admissions/">See the admissions steps</Link>
            </article>
            <article className="card">
              <h3>3. Reserve your seat</h3>
              <p>The next part-time cohort starts {p.nextStart}. A deposit of {site.deposit} secures your place.</p>
              <Link className="card-link" href="/upcoming-cohorts/">Check upcoming start dates</Link>
            </article>
          </div>
          <p>
            Before you start, read{' '}
            <Link href="/blog/how-to-prepare-for-coding-bootcamp/">how to prepare for a coding bootcamp</Link>, and come
            and see the <Link href="/campus/">Atlas Code campus in Agadir</Link> where evening sessions take place.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq">Part-time program FAQ</h2>
          <Faq
            items={[
              {
                q: 'Is the part-time curriculum the same as the full-time one?',
                a: 'Yes. You cover the same topics and build comparable projects as in the full-time bootcamp, spread over 24 weeks instead of 12, with more self-study between sessions.',
              },
              {
                q: 'How many hours per week should I plan for?',
                a: 'About 11 hours of live sessions (two evenings and Saturday morning) plus 8–10 hours of self-study. Plan for roughly 20 hours per week in total.',
              },
              {
                q: 'What happens if I miss a session?',
                a: 'Life happens. Session materials and exercises are shared with the cohort, and you can catch up during the next session or with an instructor. Missing sessions regularly, however, makes it hard to keep up.',
              },
              {
                q: 'Are any sessions online?',
                a: 'The program is blended. Most sessions are on campus in Agadir, and some move online when needed, for example during periods when travelling in the evening is difficult for the cohort.',
              },
              {
                q: 'I live in Taroudant or Tiznit. Can I still join?',
                a: 'Yes, as long as you can reach the campus for the evening and Saturday sessions. Several hours on the road each week is a real commitment, so discuss your plan with us during admissions.',
              },
              {
                q: 'I have never coded. Where should I start?',
                a: 'Start with our Intro to Coding workshop, held over two weekends. Its fee is deductible from your bootcamp tuition if you enroll afterwards.',
              },
            ]}
          />
          <p>
            Interested in other fields? Compare the{' '}
            <Link href="/programs/data-analytics/">Data Analytics bootcamp</Link> and the{' '}
            <Link href="/programs/ui-ux-design/">UI/UX Design bootcamp</Link>.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Keep your job. Start your developer career.</h2>
          <p>
            The next part-time cohort starts {p.nextStart}. Apply today or talk to an advisor about fitting the program
            into your week.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
