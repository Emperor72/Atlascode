import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.uxui;

export const meta: ProgramMeta = {
  slug: 'ui-ux-design',
  title: 'Online UI/UX Design Bootcamp: Figma & UX | Atlas Code',
  description:
    'Learn UX research, Figma, design systems and usability testing in 8 weeks of live online classes for the UK, US and Canada; graduate with three case studies.',
  h1: 'Online UI/UX Design Bootcamp',
  lead: 'Eight full-time weeks of live online classes to learn how to research, design, prototype and test digital products — with accessibility and inclusive design built in — and leave with a portfolio of three case studies.',
  crumb: 'UI/UX Design',
  summary:
    'Learn UX research, Figma, design systems, remote usability testing and accessible design in 8 full-time weeks of live online classes, and build three portfolio case studies.',
  badge: 'Full-time · 8 weeks · Online',
  related: [
    '/programs/full-stack-web-development/',
    '/admissions/',
    '/career-services/',
    '/blog/remote-developer-jobs-guide/',
  ],
  course: {
    name: 'Online UI/UX Design Bootcamp',
    price: p.price,
    hours: 300,
    weeks: 8,
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
            <div><dt>Duration</dt><dd>8 weeks, full-time (about 300 hours)</dd></div>
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
            use. This online UI/UX design bootcamp is for people in {site.marketsLabel} who care about other people’s
            experience and want to design it on purpose.
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
            <li>
              A laptop able to run Figma in the browser or desktop app smoothly, a mouse, a reliable broadband connection,
              a webcam and a headset with a microphone.
            </li>
            <li>Comfort reading English and taking part in live discussions and critiques in English.</li>
            <li>
              Willingness to talk to strangers — you will recruit, interview and test with real users over video calls.
            </li>
            <li>
              Completing our <Link href="/admissions/">admissions process</Link>, which includes a video call and a short
              design-thinking exercise instead of a coding test.
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
            <li>Create interactive prototypes and run remote moderated usability tests, then prioritise fixes.</li>
            <li>
              Apply accessibility principles from WCAG: contrast, focus order, text alternatives, touch targets and
              readable content.
            </li>
            <li>
              Design inclusive interfaces that work across devices, languages and abilities, including layouts that can
              be localised for other markets.
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
                remote interviews with real people and practise neutral questioning.
              </p>
            </li>
            <li>
              <h3>Week 2 · Personas, journeys and information architecture</h3>
              <p>
                Affinity mapping on a shared online whiteboard, personas, empathy maps and journey maps. Sitemaps, user
                flows, card sorting and navigation patterns.
              </p>
            </li>
            <li>
              <h3>Week 3 · Wireframing and Figma fundamentals</h3>
              <p>
                Sketching, low-fidelity wireframes and rapid iteration. Figma frames, auto layout, constraints,
                components and real-time collaboration.
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
                Interactive prototypes, micro-interactions, test scripts, remote moderated usability sessions and turning
                observations into prioritised changes.
              </p>
            </li>
            <li>
              <h3>Week 6 · Accessibility and inclusive design</h3>
              <p>
                WCAG principles in practice: colour and contrast, keyboard and screen reader journeys, plain language and
                designing for a range of abilities. Planning for localisation — longer text, different date and currency
                formats, and right-to-left scripts. Second case study completed.
              </p>
            </li>
            <li>
              <h3>Weeks 7–8 · Final project, portfolio and presentation</h3>
              <p>
                A complete end-to-end project, developer hand-off, then three polished case studies for your portfolio.
                The program ends with a live online presentation of your final project to a panel.
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
            Design is learned by doing, critiquing and redoing. Each week mixes live lessons, online studio time and
            contact with real users, in your cohort’s time zone ({site.timezones.uk} or {site.timezones.na}).
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Afternoon</th></tr>
              </thead>
              <tbody>
                <tr><td>Monday</td><td>Live lesson on the week’s method</td><td>Brief and kick-off of the weekly challenge</td></tr>
                <tr><td>Tuesday</td><td>Workshop and guided exercises in breakout rooms</td><td>Studio time in Figma with instructor support</td></tr>
                <tr><td>Wednesday</td><td>Fieldwork: remote interviews or tests with users</td><td>Synthesis and iteration</td></tr>
                <tr><td>Thursday</td><td>Tool deep-dive (Figma, prototyping, accessibility checks)</td><td>Studio time and 1:1 video feedback</td></tr>
                <tr><td>Friday</td><td>Final polish</td><td>Design critique: present your work on screen and give feedback to peers</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Tip:</strong> Critique sessions can feel uncomfortable at first. They are where most of the
              learning happens — and they prepare you for real design reviews with clients and distributed product
              teams. Lessons are recorded; see how our <Link href="/online-learning/">live online classroom</Link> works.
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
                Research and redesign an everyday service — for example a transport ticketing, healthcare appointment or
                local council booking flow — with before-and-after evidence from real users.
              </p>
            </article>
            <article className="card">
              <h3>Case study 2 · Accessible mobile app</h3>
              <p>
                Design a mobile app for a small business or community organisation, such as an independent shop or a
                volunteering group, with an accessible design system and a layout ready for localisation.
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
                Interview guides, surveys with online form tools, affinity mapping, card sorting, remote usability test
                scripts, video-call recording and simple analytics.
              </p>
            </article>
            <article className="card">
              <h3>Accessibility and hand-off</h3>
              <p>
                WCAG guidelines, contrast checkers, screen reader basics, localisation checks and developer hand-off with
                specs and annotations.
              </p>
            </article>
          </div>
          <p>
            Designers who understand code collaborate better with developers. If you want to go further, the{' '}
            <Link href="/programs/full-stack-web-development/">online full-stack web development bootcamp</Link> teaches
            HTML, CSS and React in depth, and the{' '}
            <Link href="/programs/intro-to-coding/">Intro to Coding online weekend workshop</Link> is a lighter way to
            learn the basics.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the bootcamp</p>
          <h2 className="section-title" id="careers">Careers in UI/UX design</h2>
          <p>
            The bootcamp prepares you to apply for entry-level roles such as <strong>junior UX/UI designer</strong>,{' '}
            <strong>product designer</strong>, <strong>UX researcher</strong>, <strong>web or mobile UI designer</strong>{' '}
            and <strong>freelance designer</strong>. Some learners use UX skills to grow in their current roles — in
            marketing, product management or customer experience.
          </p>
          <p>
            Design teams exist in digital agencies, startups, in-house product teams, public-sector digital services and
            e-commerce companies across {site.marketsLabel}, and many designers work for remote-first companies. Our{' '}
            <Link href="/blog/remote-developer-jobs-guide/">guide to remote tech jobs</Link> explains how to approach
            that market, and{' '}
            <Link href="/blog/coding-bootcamp-vs-university-degree/">bootcamp vs university degree</Link> helps you
            compare learning routes. Pay varies widely by country, company, city and the strength of your portfolio, so
            treat online salary figures as rough indications only.
          </p>
          <p>
            We cannot guarantee a job, and we do not publish invented placement numbers. We do support you through{' '}
            <Link href="/career-services/">Atlas Code career services</Link>: portfolio and case-study reviews, CV and
            LinkedIn feedback, mock design interviews over video and guidance on presenting your work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the online UI/UX Design bootcamp is <strong>{p.priceLabel}</strong>. A deposit of{' '}
            {site.deposit} secures your seat after admission.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Explore financing</h3>
              <p>Payment plans, financing and scholarships explained step by step.</p>
              <Link className="card-link" href="/tuition-financing/">See tuition and financing</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>A short application, a video call and a design-thinking exercise.</p>
              <Link className="card-link" href="/admissions/">Understand the admissions process</Link>
            </article>
            <article className="card">
              <h3>3. Join a cohort</h3>
              <p>The next UI/UX Design cohort starts {p.nextStart}, with UK and US Eastern time options.</p>
              <Link className="card-link" href="/upcoming-cohorts/">View upcoming cohort dates</Link>
            </article>
          </div>
          <p>
            Curious about the learning environment? Explore our{' '}
            <Link href="/online-learning/">online learning experience</Link>, or compare with the{' '}
            <Link href="/programs/data-analytics/">online Data Analytics bootcamp</Link> if dashboards and numbers appeal
            to you too.
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
                a: 'UX (user experience) covers research, structure and how a product works for people. UI (user interface) covers how it looks and feels on screen. Many junior roles combine both, so the bootcamp teaches both.',
              },
              {
                q: 'Will I learn to code?',
                a: 'No coding is required. You will learn enough about how the web works to hand off designs well. To learn coding properly, consider the online full-stack web development bootcamp.',
              },
              {
                q: 'How do you run user research and design critiques online?',
                a: 'Interviews and usability tests run over video calls with screen sharing, synthesis happens on a shared online whiteboard, and critiques take place live with everyone viewing the same Figma file. These are the same remote methods many product teams use day to day.',
              },
              {
                q: 'Which time zones do classes run in, and do I need to be in the UK, the US or Canada?',
                a: `Each cohort runs live in either ${site.timezones.uk} or ${site.timezones.na}. The program is designed for learners in the UK, the US and Canada, but you can join from elsewhere if you can attend at your cohort times. Having the right to work where you apply for jobs is your responsibility; we cannot sponsor visas.`,
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
            The next online UI/UX Design cohort starts {p.nextStart}. Apply now or talk to an advisor about your
            portfolio goals.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
