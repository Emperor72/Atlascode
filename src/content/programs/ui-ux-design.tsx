import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.uxui;

export const meta: ProgramMeta = {
  slug: 'ui-ux-design',
  title: 'UI/UX Design Bootcamp in Agadir: Figma & UX | Atlas Code',
  description:
    'Learn UX research, Figma, design systems and usability testing in 8 weeks in Agadir, and graduate with a portfolio of three case studies. Apply now.',
  h1: 'UI/UX Design Bootcamp',
  lead: 'Eight full-time weeks on our Agadir campus to learn how to research, design, prototype and test digital products — including bilingual Arabic and French interfaces — and leave with a portfolio of three case studies.',
  crumb: 'UI/UX Design',
  summary:
    'Learn UX research, Figma, design systems, usability testing and bilingual RTL interfaces in 8 full-time weeks, and build three portfolio case studies.',
  badge: 'Full-time · 8 weeks',
  related: [
    '/programs/full-stack-web-development/',
    '/admissions/',
    '/career-services/',
    '/blog/remote-developer-jobs-from-morocco/',
  ],
  course: {
    name: 'UI/UX Design Bootcamp',
    price: p.price,
    hours: 300,
    weeks: 8,
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
            <div><dt>Duration</dt><dd>8 weeks, full-time (about 300 hours)</dd></div>
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
              <li><a href="#typical-week">A typical week</a></li>
              <li><a href="#projects">Portfolio projects</a></li>
              <li><a href="#tools">Tools and methods</a></li>
              <li><a href="#careers">Careers in UI/UX</a></li>
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
            Good design is not decoration: it is how a banking app, a booking site or a public service becomes easy to
            use. This UI/UX design bootcamp in Agadir is for people who care about other people’s experience and want to
            design it on purpose.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Graphic designers and creatives</h3>
              <p>
                You already have an eye for layout, colour and typography. You want to move from print, branding or
                social media visuals into digital products, where research and testing guide every decision.
              </p>
            </article>
            <article className="card">
              <h3>Career changers with empathy</h3>
              <p>
                You come from customer service, marketing, teaching, psychology or hospitality. You understand users
                because you have worked with them daily — UX turns that understanding into a profession.
              </p>
            </article>
            <article className="card">
              <h3>Developers and product people</h3>
              <p>
                You build or manage products and want to make better interface decisions, speak the same language as
                designers and prototype ideas before anyone writes code.
              </p>
            </article>
          </div>
          <h3>Prerequisites</h3>
          <ul className="checklist">
            <li>
              No design degree and no coding required. Curiosity about people and attention to detail matter more than
              drawing skills.
            </li>
            <li>A laptop able to run Figma in the browser or desktop app smoothly, with a mouse recommended.</li>
            <li>
              Comfort reading English or French; working knowledge of Arabic is a plus for the RTL interface module but
              not required.
            </li>
            <li>Willingness to talk to strangers — you will interview and test with real users around Agadir.</li>
            <li>
              Completing our <Link href="/admissions/">admissions process</Link>, which includes a short design-thinking
              exercise instead of a coding test.
            </li>
          </ul>
          <p>
            Changing careers later in life? Our article on{' '}
            <Link href="/blog/career-change-to-tech-after-30/">switching to tech after 30</Link> applies to design as much
            as to development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            By the end of the eight weeks you will be able to lead the design of a feature or a small product from first
            interview to tested prototype. You will be able to:
          </p>
          <ul className="checklist">
            <li>
              Plan and run user interviews, surveys and competitive analyses, and synthesise findings into clear
              insights.
            </li>
            <li>Create evidence-based personas, empathy maps and user journey maps.</li>
            <li>Structure content with information architecture, sitemaps, user flows and card sorting.</li>
            <li>Sketch and wireframe ideas quickly, then iterate based on feedback.</li>
            <li>Design polished, responsive interfaces in Figma using auto layout, components and variants.</li>
            <li>
              Build and document a small design system: colour, typography, spacing, components and usage rules.
            </li>
            <li>Create interactive prototypes and run moderated usability tests, then prioritise fixes.</li>
            <li>
              Apply accessibility principles from WCAG: contrast, focus order, text alternatives, touch targets and
              readable content.
            </li>
            <li>
              Design bilingual interfaces for the Moroccan market, including right-to-left Arabic layouts alongside
              French.
            </li>
            <li>Hand off designs to developers clearly, and present your work as convincing case studies.</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Curriculum</p>
          <h2 className="section-title" id="curriculum">Week-by-week curriculum</h2>
          <p className="section-intro">
            The program follows the real design process, so every week contributes directly to your portfolio.
          </p>
          <ol className="timeline">
            <li>
              <h3>Week 1 · Design thinking and UX research</h3>
              <p>
                The UX process, problem framing, research planning, interview techniques and surveys. You run your first
                interviews with real people and practise neutral questioning.
              </p>
            </li>
            <li>
              <h3>Week 2 · Personas, journeys and information architecture</h3>
              <p>
                Affinity mapping, personas, empathy maps and journey maps. Sitemaps, user flows, card sorting and
                navigation patterns.
              </p>
            </li>
            <li>
              <h3>Week 3 · Wireframing and Figma fundamentals</h3>
              <p>
                Sketching, low-fidelity wireframes and rapid iteration. Figma frames, auto layout, constraints,
                components and collaboration.
              </p>
            </li>
            <li>
              <h3>Week 4 · Visual UI design and design systems</h3>
              <p>
                Typography, colour, grids, spacing and hierarchy. Building a design system with tokens, components and
                variants. First case study completed.
              </p>
            </li>
            <li>
              <h3>Week 5 · Prototyping and usability testing</h3>
              <p>
                Interactive prototypes, micro-interactions, test scripts, moderated usability sessions and turning
                observations into prioritised changes.
              </p>
            </li>
            <li>
              <h3>Week 6 · Accessibility and UI for the Moroccan market</h3>
              <p>
                WCAG principles in practice. Designing right-to-left Arabic interfaces, mirroring layouts, choosing Arabic
                and Latin typefaces that work together, and handling language switching between Arabic and French.
                Second case study completed.
              </p>
            </li>
            <li>
              <h3>Weeks 7–8 · Final project, portfolio and presentation</h3>
              <p>
                A complete end-to-end project, developer hand-off, then three polished case studies for your portfolio.
                The program ends with a presentation of your final project to a panel.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Weekly rhythm</p>
          <h2 className="section-title" id="typical-week">A typical week</h2>
          <p className="section-intro">
            Design is learned by doing, critiquing and redoing. Each week mixes theory, studio time and contact with real
            users.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Afternoon</th></tr>
              </thead>
              <tbody>
                <tr><td>Monday</td><td>Lesson on the week’s method</td><td>Brief and kick-off of the weekly challenge</td></tr>
                <tr><td>Tuesday</td><td>Workshop and guided exercises</td><td>Studio time in Figma with instructor support</td></tr>
                <tr><td>Wednesday</td><td>Fieldwork: interviews or tests with users</td><td>Synthesis and iteration</td></tr>
                <tr><td>Thursday</td><td>Tool deep-dive (Figma, prototyping, accessibility checks)</td><td>Studio time and one-to-one feedback</td></tr>
                <tr><td>Friday</td><td>Final polish</td><td>Design critique: present your work and give feedback to peers</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Tip:</strong> Critique sessions can feel uncomfortable at first. They are where most of the
              learning happens — and they prepare you for real design reviews with clients and product teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects">Portfolio projects: three case studies</h2>
          <p className="section-intro">
            Recruiters and clients hire designers based on how they think. Your three case studies will show your
            process, not just pretty screens.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Case study 1 · Redesign</h3>
              <p>
                Research and redesign an existing service people in Agadir use every day — for example a transport,
                healthcare appointment or administrative booking flow — with before-and-after evidence.
              </p>
            </article>
            <article className="card">
              <h3>Case study 2 · Bilingual mobile app</h3>
              <p>
                Design a mobile app in Arabic and French, for instance for a local cooperative selling argan products or
                a tourism activity, with a full RTL layout and an accessible design system.
              </p>
            </article>
            <article className="card">
              <h3>Case study 3 · End-to-end product</h3>
              <p>
                Your final project: from interviews to a tested high-fidelity prototype and developer hand-off,
                documented as a complete case study.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title" id="tools">Tools and methods</h2>
          <div className="grid grid-3">
            <article className="card">
              <h3>Design and prototyping</h3>
              <p>Figma (auto layout, components, variants, variables, prototyping) and FigJam for workshops and mapping.</p>
            </article>
            <article className="card">
              <h3>Research and testing</h3>
              <p>
                Interview guides, surveys with online form tools, affinity mapping, card sorting, usability test scripts
                and simple analytics.
              </p>
            </article>
            <article className="card">
              <h3>Accessibility and hand-off</h3>
              <p>
                WCAG guidelines, contrast checkers, screen reader basics, RTL layout checks and developer hand-off with
                specs and annotations.
              </p>
            </article>
          </div>
          <p>
            Designers who understand code collaborate better with developers. If you want to go further, the{' '}
            <Link href="/programs/full-stack-web-development/">full-stack web development bootcamp</Link> teaches HTML,
            CSS and React in depth, and the <Link href="/programs/intro-to-coding/">Intro to Coding weekend workshop</Link>{' '}
            is a lighter way to learn the basics.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the bootcamp</p>
          <h2 className="section-title" id="careers">Careers in UI/UX design</h2>
          <p>
            The bootcamp prepares you to apply for roles such as <strong>junior UX/UI designer</strong>,{' '}
            <strong>product designer</strong>, <strong>UX researcher</strong>, <strong>web or mobile UI designer</strong>{' '}
            and <strong>freelance designer</strong>. Some learners use UX skills to grow in their current roles — in
            marketing, product management or customer experience.
          </p>
          <p>
            Design teams exist in digital agencies, startups, banks, telecoms and e-commerce companies in Morocco, and
            many designers work remotely with international clients. Our guide to{' '}
            <Link href="/blog/remote-developer-jobs-from-morocco/">remote tech jobs from Morocco</Link> explains how to
            approach that market, and{' '}
            <Link href="/blog/coding-bootcamp-vs-university-morocco/">bootcamp vs university in Morocco</Link> helps you
            compare learning routes. Pay varies widely by company, city and the strength of your portfolio, so treat
            online salary figures as rough indications only.
          </p>
          <p>
            We cannot guarantee a job, and we do not publish invented placement numbers. We do support you through{' '}
            <Link href="/career-services/">Atlas Code career services</Link>: portfolio and case-study reviews, CV and
            LinkedIn feedback, mock design interviews and guidance on presenting your work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the UI/UX Design bootcamp is <strong>{p.priceLabel}</strong>. A deposit of {site.deposit} secures
            your seat after admission.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Explore financing</h3>
              <p>Payment plans, financing and scholarships explained step by step.</p>
              <Link className="card-link" href="/tuition-financing/">See tuition and financing</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>A short application, a conversation and a design-thinking exercise.</p>
              <Link className="card-link" href="/admissions/">Understand the admissions process</Link>
            </article>
            <article className="card">
              <h3>3. Join a cohort</h3>
              <p>The next UI/UX Design cohort starts {p.nextStart}.</p>
              <Link className="card-link" href="/upcoming-cohorts/">View upcoming cohort dates</Link>
            </article>
          </div>
          <p>
            Curious about the learning environment? Visit the <Link href="/campus/">Atlas Code campus in Agadir</Link>, or
            compare with the <Link href="/programs/data-analytics/">Data Analytics bootcamp</Link> if dashboards and
            numbers appeal to you too.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq">UI/UX Design FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do I need to know how to draw?',
                a: 'No. UX design is about understanding problems and organising information. Simple boxes and arrows are enough for sketching; Figma handles the visual polish.',
              },
              {
                q: 'What is the difference between UX and UI?',
                a: 'UX (user experience) covers research, structure and how a product works for people. UI (user interface) covers how it looks and feels on screen. Junior roles in Morocco often combine both, so the bootcamp teaches both.',
              },
              {
                q: 'Will I learn to code?',
                a: 'No coding is required. You will learn enough about how the web works to hand off designs well. To learn coding properly, consider the full-stack web development bootcamp.',
              },
              {
                q: 'Why is there a module on Arabic and RTL interfaces?',
                a: 'Many Moroccan products need to work in Arabic and French, and sometimes Tamazight or English too. Right-to-left layouts involve mirroring, typography and content choices that many international courses skip.',
              },
              {
                q: 'Is Figma free?',
                a: 'Figma offers free plans and education options; our team will tell you exactly what to set up before day one.',
              },
              {
                q: 'What will my portfolio look like at the end?',
                a: 'Three documented case studies showing your research, decisions, iterations and test results, ready to share as a link with recruiters or clients.',
              },
            ]}
          />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Design products people love to use</h2>
          <p>
            The next UI/UX Design cohort starts {p.nextStart} in Agadir. Apply now or talk to an advisor about your
            portfolio goals.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
