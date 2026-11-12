import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { PostMeta } from '@/lib/types';

export const meta: PostMeta = {
  slug: 'how-to-become-web-developer-morocco',
  title: 'Become a Web Developer in Morocco: Roadmap | Atlas Code',
  description: 'A step-by-step roadmap to becoming a web developer in Morocco: the skills to learn, in what order, how to build a portfolio and how to land your first job.',
  h1: 'How to Become a Web Developer in Morocco: A Step-by-Step Roadmap',
  lead: 'There is no single “right” way into web development, but there is a sensible order to learn things in. This roadmap walks you from your first line of HTML to your first job offer, with the Moroccan job market in mind.',
  crumb: 'Become a Web Developer in Morocco',
  date: '2026-08-04',
  modified: '2026-08-04',
  category: 'Careers',
  readTime: '10 min read',
  related: ['/programs/full-stack-web-development/', '/blog/coding-bootcamp-vs-university-morocco/', '/blog/tech-jobs-agadir-souss-massa/', '/programs/part-time-web-development/'],
};

export default function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="layout-sidebar">
            <div className="prose">
              <nav className="toc" aria-label="On this page">
                <p className="toc-title">On this page</p>
                <ol>
                  <li><a href="#what-web-developers-do">What web developers actually do</a></li>
                  <li><a href="#step-1-choose-direction">Step 1: Choose a direction</a></li>
                  <li><a href="#step-2-foundations">Step 2: Learn the foundations</a></li>
                  <li><a href="#step-3-javascript">Step 3: Get serious about JavaScript</a></li>
                  <li><a href="#step-4-frameworks-backend">Step 4: Frameworks, back end and databases</a></li>
                  <li><a href="#step-5-tools-portfolio">Step 5: Professional tools and a portfolio</a></li>
                  <li><a href="#step-6-languages-soft-skills">Step 6: Languages and soft skills</a></li>
                  <li><a href="#step-7-first-job">Step 7: Land your first job</a></li>
                  <li><a href="#learning-paths">Comparing learning paths</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ol>
              </nav>

              <h2 id="what-web-developers-do">What web developers actually do</h2>
              <p>A web developer builds and maintains websites and web applications. That covers a wide range of work: a landing page for a riad in Taroudant, an online booking system for a surf school in Taghazout, an internal dashboard for an agricultural exporter in the Souss plain, or a feature inside a large international product built by a remote team.</p>
              <p>Day to day, the job is less about typing code quickly and more about solving problems: understanding what a client or product manager actually needs, breaking it into small pieces, writing code that works, testing it, fixing what breaks and explaining your choices to colleagues. If you enjoy puzzles, learning continuously and seeing something you made appear on a screen, you will probably enjoy this work.</p>
              <p>The good news for Moroccan learners is that the core tools are free, the documentation is public, and employers in web development tend to care more about what you can build than about where you studied. The challenge is structure: there is so much material online that many beginners spend months jumping between tutorials without ever finishing a real project. The steps below are designed to fix that.</p>

              <h2 id="step-1-choose-direction">Step 1: Choose a direction</h2>
              <p>Before you open a code editor, decide roughly where you are heading. You can change your mind later, but a direction stops you from learning everything at once.</p>
              <h3>Front-end development</h3>
              <p>Front-end developers build what users see and interact with in the browser: layouts, forms, menus, animations and the logic that makes an interface feel responsive. If you care about visual detail and user experience, start here. People who love the design side often also explore <Link href="/programs/ui-ux-design/">UI/UX design training</Link>, since the two roles work closely together.</p>
              <h3>Back-end development</h3>
              <p>Back-end developers work on the server side: databases, APIs, authentication, payments and the business rules behind an application. If you prefer logic, data and systems over visuals, this direction may suit you better.</p>
              <h3>Full-stack development</h3>
              <p>Full-stack developers are comfortable on both sides. For a first job in Morocco this is often the most practical target, because smaller companies, agencies and start-ups frequently want one person who can handle a whole feature from database to button. It is also the path taught in our <Link href="/programs/full-stack-web-development/">12-week full-stack web development bootcamp</Link>.</p>
              <div className="callout">
                <p><strong>Tip:</strong> Not sure yet? Spend a weekend building a tiny web page and a tiny script that processes some data. Notice which part you lose track of time in. That is a useful signal.</p>
              </div>

              <h2 id="step-2-foundations">Step 2: Learn the foundations</h2>
              <p>Every web developer, whatever their specialty, needs the same base layer. Do not rush it: weak foundations are the main reason people get stuck later.</p>
              <h3>HTML and CSS</h3>
              <p>HTML gives a page its structure (headings, paragraphs, links, forms) and CSS controls how it looks (colours, spacing, layout). Learn semantic HTML, the box model, Flexbox and CSS Grid, and how to make a layout responsive so it works on the phones most Moroccan users browse on. A good exercise is to rebuild the home page of a site you use every day, without copying its code.</p>
              <h3>How the web works</h3>
              <p>Understand what happens when you type an address into a browser: domains, DNS, HTTP requests and responses, status codes, and the difference between the client and the server. This knowledge makes debugging far easier later.</p>
              <h3>Basic command line</h3>
              <p>Learn to navigate folders, create files and run programs from a terminal. It feels intimidating for a week and then becomes second nature.</p>
              <p>If you have never written code before, a short guided start can save you weeks of confusion. Our weekend <Link href="/programs/intro-to-coding/">Intro to Coding workshop for beginners</Link> exists exactly for this: to help you test whether coding suits you before committing to a longer program.</p>

              <h2 id="step-3-javascript">Step 3: Get serious about JavaScript</h2>
              <p>JavaScript is the programming language of the browser, and with Node.js it also runs on servers. For a web developer it is the single most important language to learn well. If you are torn between languages, our comparison of <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link> explains the trade-offs.</p>
              <p>Focus on these concepts, roughly in this order:</p>
              <ol>
                <li>Variables, data types, conditions and loops.</li>
                <li>Functions, scope and arrays and objects.</li>
                <li>Manipulating the DOM: selecting elements, reacting to clicks, updating the page.</li>
                <li>Asynchronous code: callbacks, promises, <code>async</code>/<code>await</code>.</li>
                <li>Fetching data from an API and displaying it.</li>
                <li>Breaking code into modules and reading error messages calmly.</li>
              </ol>
              <p>Build small, complete projects at each stage: a to-do list, a quiz, a weather app that calls a public API, a currency converter between dirhams and euros. Finishing small projects teaches you more than half-finishing a big one.</p>

              <h2 id="step-4-frameworks-backend">Step 4: Frameworks, back end and databases</h2>
              <h3>A front-end framework</h3>
              <p>Once plain JavaScript feels comfortable, learn one modern framework. React is widely used in job listings, though Vue and Angular also appear in Moroccan and international offers. Pick one and go deep rather than sampling all three.</p>
              <h3>A back-end stack</h3>
              <p>Learn to build an API: routes, request handling, validation and authentication. Node.js with Express keeps you in JavaScript, which reduces the load while you learn. You will also see PHP (especially with Laravel or WordPress) frequently in the Moroccan agency market, and Java or .NET in larger companies and service firms. Learning one stack properly makes the next one much easier.</p>
              <h3>Databases</h3>
              <p>Learn SQL with a relational database such as PostgreSQL or MySQL: tables, relationships, queries and joins. Then understand when a document database such as MongoDB might be used instead. Being able to design a sensible data model is a skill employers notice in interviews.</p>

              <h2 id="step-5-tools-portfolio">Step 5: Professional tools and a portfolio</h2>
              <p>The gap between “I followed tutorials” and “I can work on a team” is mostly about tools and habits.</p>
              <ul className="checklist">
                <li>Use Git for every project and push your work to GitHub with clear commit messages.</li>
                <li>Learn to work with branches and pull requests, the way teams actually collaborate.</li>
                <li>Deploy your projects so anyone can open them with a link.</li>
                <li>Write a short README for each project: what it does, the stack, how to run it.</li>
                <li>Learn the basics of testing and of browser developer tools for debugging.</li>
                <li>Build three to five portfolio projects, at least one of them full-stack with a database and login.</li>
              </ul>
              <p>The strongest portfolio projects solve a real problem. Think locally: a menu and ordering page for a café in Agadir, a booking tool for a surf camp, a stock tracker for a small cooperative selling argan oil. Real users give you real feedback and a story to tell in interviews.</p>

              <h2 id="step-6-languages-soft-skills">Step 6: Languages and soft skills</h2>
              <p>In Morocco, language skills shape your options as much as technical ones. French is widely used in business and in many local companies, while English dominates technical documentation, open-source communities and international remote work. Darija and Arabic remain valuable when working with local clients and teams.</p>
              <p>You do not need to be perfect, but aim to read documentation comfortably in English and explain your work clearly in at least one of French or English. If you are targeting foreign clients, practise describing your projects aloud in English, as many interviews are now on video calls.</p>
              <p>Soft skills matter just as much: asking clear questions, estimating how long tasks take, accepting code review without taking it personally, and communicating early when you are blocked.</p>

              <h2 id="step-7-first-job">Step 7: Land your first job</h2>
              <h3>Where to look</h3>
              <p>Your first role might be a junior developer position at an agency or software company, an internship that converts into a contract, freelance work for local businesses, or a remote role with a foreign team. Our guide to <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link> covers the local picture, and the article on <Link href="/blog/remote-developer-jobs-from-morocco/">remote developer jobs from Morocco</Link> explains how to work for companies abroad.</p>
              <h3>How to apply</h3>
              <p>Keep your CV to one page and lead with your projects and GitHub link. Tailor each application: mention the employer’s stack and show a project that uses something similar. Prepare to explain your code line by line, solve small coding exercises and talk through a past problem you solved.</p>
              <h3>About pay</h3>
              <p>Junior developer salaries in Morocco vary widely depending on the city, the company type, your languages and whether the role is local or remote for a foreign client. Rather than relying on a single number, check current job listings and ask people working in the field. Treat any figure you see online as a rough indication, not a promise.</p>
              <p>Structured support helps here too. Bootcamps with dedicated <Link href="/career-services/">career services such as CV reviews and interview practice</Link> can shorten the job search, especially if you have no network in tech yet.</p>

              <h2 id="learning-paths">Comparing learning paths</h2>
              <p>You can follow this roadmap alone, through a university degree, or through a bootcamp. Each path has real strengths.</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Path</th><th>Typical duration</th><th>Strengths</th><th>Watch out for</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Self-taught</td><td>Varies widely, often a year or more</td><td>Free or low cost, fully flexible</td><td>No structure, no feedback, easy to stall</td></tr>
                    <tr><td>University degree</td><td>Three years or more</td><td>Strong theory, recognised diploma</td><td>Less hands-on web practice, long timeline</td></tr>
                    <tr><td>Full-time bootcamp</td><td>12 weeks at Atlas Code</td><td>Intensive, project-based, mentored</td><td>Demanding schedule, hard to combine with a job</td></tr>
                    <tr><td>Part-time bootcamp</td><td>24 weeks at Atlas Code</td><td>Keep your job while you learn</td><td>Requires discipline over evenings and Saturdays</td></tr>
                  </tbody>
                </table>
              </div>
              <p>For a deeper comparison, read <Link href="/blog/coding-bootcamp-vs-university-morocco/">coding bootcamp vs university in Morocco</Link>. If you already work, the <Link href="/programs/part-time-web-development/">part-time web development program</Link> runs on evenings and Saturdays over 24 weeks. Fees and payment options are explained on our <Link href="/tuition-financing/">tuition and financing page</Link>, and the steps to join are on the <Link href="/admissions/">Atlas Code admissions page</Link>.</p>

              <h2 id="faq">FAQ</h2>
              <Faq
                items={[
                  { q: 'Do I need a degree to become a web developer in Morocco?', a: 'Not always. Many employers in web development look mainly at your skills and portfolio, although some large companies and public-sector roles do ask for a diploma. A strong GitHub profile and deployed projects make a real difference either way.' },
                  { q: 'How long does it take to become job-ready?', a: 'It depends on your starting point and how many hours you can commit. Self-taught learners often take a year or more. An intensive program like our 12-week full-stack bootcamp compresses the learning, but you should still expect to keep building and applying after graduation.' },
                  { q: 'Am I too old to start?', a: 'No. Many people move into development after working in other fields, and previous experience in sales, teaching or tourism can be an advantage. Our article on changing careers to tech after 30 goes into detail.' },
                  { q: 'Should I learn in French or English?', a: 'Code itself is written in English keywords, and most documentation is in English, so aim for solid reading English. French remains very useful for working with many Moroccan companies. Being comfortable in both widens your options.' },
                  { q: 'What do I need to apply to Atlas Code?', a: 'No prior coding experience is required for most programs, but motivation and a commitment to the schedule are. The steps are explained on our admissions page.' },
                ]}
              />
            </div>
      <aside className="sidebar">
              <div className="sidebar-box">
                <h2 className="h4">Start your roadmap with us</h2>
                <p>Learn full-stack web development in Agadir with mentors and real projects.</p>
                <ul>
                  <li><Link href="/programs/full-stack-web-development/">Full-Stack bootcamp</Link>: 12 weeks, next start {site.programs.fullstack.nextStart}</li>
                  <li><Link href="/programs/part-time-web-development/">Part-time Web Development</Link>: 24 weeks, next start {site.programs.parttime.nextStart}</li>
                  <li><Link href="/programs/intro-to-coding/">Intro to Coding workshop</Link>: runs {site.programs.intro.nextStart}</li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h2 className="h4">Ready to apply?</h2>
                <p>Check the next start dates and send your application in a few minutes.</p>
                <p><Link className="btn btn-primary" href="/apply/">Apply now</Link></p>
                <p><Link href="/upcoming-cohorts/">See upcoming cohorts</Link></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Turn the roadmap into a plan</h2>
          <p>Our next full-stack cohort starts {site.programs.fullstack.nextStart}. Talk to an advisor about which program fits your goals and schedule.</p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link> <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}