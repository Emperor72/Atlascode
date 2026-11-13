import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.intro;

export const meta: ProgramMeta = {
  slug: 'intro-to-coding',
  title: 'Intro to Coding Online Weekend Workshop | Atlas Code',
  description:
    'Try coding live online over two weekends from the UK, US or Canada: learn HTML, CSS and JavaScript basics, publish your own web page and see if tech suits you.',
  h1: 'Intro to Coding Online Weekend Workshop',
  lead: 'Two weekends of live online classes, zero experience needed. Learn the basics of HTML, CSS and JavaScript from home, publish your own personal web page, and find out first-hand whether a career in tech is right for you.',
  crumb: 'Intro to Coding',
  summary:
    'A beginner-friendly live online workshop over two weekends: HTML, CSS and JavaScript basics, a published personal page and a taste of a developer’s day.',
  badge: 'Weekends · 2 weekends · Online',
  related: [
    '/programs/full-stack-web-development/',
    '/blog/online-coding-bootcamp-guide/',
    '/blog/how-to-prepare-for-coding-bootcamp/',
    '/blog/javascript-vs-python-beginners/',
  ],
  course: {
    name: 'Intro to Coding Online Weekend Workshop',
    price: p.price,
    hours: 24,
    weeks: 2,
    mode: 'Online',
  },
};

export default function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Workshop at a glance</p>
          <h2 className="section-title" id="key-facts">Key facts</h2>
          <dl className="key-facts">
            <div><dt>Duration</dt><dd>2 weekends (4 days, about 24 hours)</dd></div>
            <div><dt>Schedule</dt><dd>Saturday and Sunday, 10:00–16:00 in your group’s time zone</dd></div>
            <div><dt>Format</dt><dd>Live online, in {site.timezones.uk} or {site.timezones.na}</dd></div>
            <div><dt>Language of instruction</dt><dd>English</dd></div>
            <div><dt>Price</dt><dd>{p.priceLabel}, deductible from bootcamp tuition if you enrol later</dd></div>
            <div><dt>When</dt><dd>Held {p.nextStart}</dd></div>
          </dl>
          <nav className="toc" aria-label="On this page">
            <p className="toc-title">On this page</p>
            <ol>
              <li><a href="#who">Who the workshop is for</a></li>
              <li><a href="#outcomes">What you’ll be able to do</a></li>
              <li><a href="#curriculum">Day-by-day program</a></li>
              <li><a href="#typical-day">A typical workshop day</a></li>
              <li><a href="#projects">What you’ll build</a></li>
              <li><a href="#tools">Tools you’ll use</a></li>
              <li><a href="#next">Where it can lead</a></li>
              <li><a href="#tuition">Price and booking</a></li>
              <li><a href="#faq">Workshop FAQ</a></li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Is it right for you?</p>
          <h2 className="section-title" id="who">Who the workshop is for</h2>
          <p className="section-intro">
            Thinking about a career in tech but not sure where to start? Spending three months and a significant sum on a
            bootcamp is a big decision. This live online workshop lets learners in {site.marketsLabel} try coding for
            real, with instructors and other beginners, before committing to anything bigger.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Complete beginners</h3>
              <p>
                You have never written code and you are curious. Maybe you wonder what developers actually do all day,
                or whether coding is “for people like you”. Two weekends is enough to find out.
              </p>
            </article>
            <article className="card">
              <h3>Future bootcamp applicants</h3>
              <p>
                You are considering our <Link href="/programs/full-stack-web-development/">full-time online full-stack
                bootcamp</Link> or the{' '}
                <Link href="/programs/part-time-web-development/">part-time online web development program</Link> and
                want a head start — plus a clearer idea of what learning to code live online feels like.
              </p>
            </article>
            <article className="card">
              <h3>Curious professionals and students</h3>
              <p>
                You work in marketing, retail, small business or education, or you are still at university, and you want
                to understand how websites work so you can talk to developers and build simple pages yourself.
              </p>
            </article>
          </div>
          <h3>What you need</h3>
          <ul className="checklist">
            <li>No previous experience. We start from what a web page is and how a browser displays it.</li>
            <li>
              A laptop or desktop computer (Windows, macOS or Linux) with a modern browser — a tablet or phone is not
              enough for writing code.
            </li>
            <li>A stable internet connection, a webcam and a microphone or headset so you can join in and ask questions.</li>
            <li>Basic computer skills: creating folders, downloading files and typing comfortably.</li>
            <li>Four days of your time across two weekends, and the curiosity to try, fail and try again.</li>
          </ul>
          <p>
            Weighing up different ways to learn to code online? Our{' '}
            <Link href="/blog/online-coding-bootcamp-guide/">guide to online coding bootcamps</Link> compares the
            options, from free self-paced courses to live bootcamps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            Twenty-four hours will not make you a developer, but it will give you real foundations and a working result.
            By the end of the second weekend you will be able to:
          </p>
          <ul className="checklist">
            <li>Explain how the web works: browsers, servers, URLs and what happens when you open a page.</li>
            <li>Write a web page from scratch with semantic HTML: headings, paragraphs, links, images and lists.</li>
            <li>Style it with CSS: colours, fonts, spacing, Flexbox layouts and a layout that adapts to phones.</li>
            <li>
              Add interactivity with beginner JavaScript: variables, functions, conditions and responding to a button
              click.
            </li>
            <li>Use VS Code and the browser’s developer tools to inspect and fix your own code.</li>
            <li>Save your work on GitHub and publish your personal page online with a link you can share.</li>
            <li>Decide, with real experience, whether a full bootcamp is the right next step for you.</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Program</p>
          <h2 className="section-title" id="curriculum">Day-by-day program</h2>
          <p className="section-intro">
            Each day mixes short explanations with plenty of hands-on practice. You build one project — your personal
            page — step by step over the four days.
          </p>
          <ol className="timeline">
            <li>
              <h3>Weekend 1 · Saturday: how the web works and HTML</h3>
              <p>
                Setting up VS Code (we help you on video if anything goes wrong), what happens when you type a URL, and
                your first HTML file. Structure, headings, links, images and lists. By the afternoon you have the
                skeleton of your personal page.
              </p>
            </li>
            <li>
              <h3>Weekend 1 · Sunday: CSS and design basics</h3>
              <p>
                Selectors, colours, fonts and the box model. Flexbox for layout, then media queries so your page looks
                good on a phone. A short look at accessibility: contrast and readable text.
              </p>
            </li>
            <li>
              <h3>Weekend 2 · Saturday: JavaScript basics</h3>
              <p>
                Variables, functions, conditions and events. You add interactive features to your page, such as a dark
                mode toggle, a greeting based on the time of day or a simple contact form check.
              </p>
            </li>
            <li>
              <h3>Weekend 2 · Sunday: publish and a developer’s day</h3>
              <p>
                Git and GitHub basics, then publishing your page online. In the afternoon, a simulated remote
                developer’s day: a video stand-up, a small task from a “ticket”, a code review and a short screen-shared
                demo — followed by an honest conversation about bootcamps, careers and next steps.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Daily rhythm</p>
          <h2 className="section-title" id="typical-day">A typical workshop day</h2>
          <p className="section-intro">
            Small online groups, lots of support and a relaxed pace designed for beginners. Times are in your group’s
            time zone ({site.timezones.uk} or {site.timezones.na}).
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Time</th><th scope="col">Activity</th></tr>
              </thead>
              <tbody>
                <tr><td>10:00–10:30</td><td>Welcome on video, a quick check that everyone’s set-up works, and a recap of where we left off.</td></tr>
                <tr><td>10:30–12:00</td><td>Short live demonstration followed by guided exercises, step by step.</td></tr>
                <tr><td>12:00–13:00</td><td>Lunch break — step away from the screen.</td></tr>
                <tr><td>13:00–15:00</td><td>Build time: apply the morning’s ideas to your personal page, with instructors available in breakout rooms.</td></tr>
                <tr><td>15:00–16:00</td><td>Show and tell: share your screen, ask questions and preview the next day.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Tip:</strong> Getting stuck is normal — it is a big part of what developers do every day. The
              workshop is designed so you learn how to get unstuck: reading error messages, searching documentation and
              asking good questions in the group chat or on a call. Sessions are recorded, and our{' '}
              <Link href="/online-learning/">online learning page</Link> shows how the virtual classroom works.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Your project</p>
          <h2 className="section-title" id="projects">What you’ll build</h2>
          <p className="section-intro">
            You leave with something concrete to show friends, family or future recruiters — not just notes.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>A personal web page</h3>
              <p>
                A one-page site about you — your story, your interests, your goals — written in HTML and styled with
                CSS.
              </p>
            </article>
            <article className="card">
              <h3>Interactive features</h3>
              <p>
                Small JavaScript features you write yourself, such as a theme switcher or a dynamic greeting, so you
                understand how pages respond to users.
              </p>
            </article>
            <article className="card">
              <h3>A live link and a GitHub profile</h3>
              <p>
                Your page published online with its own URL, and your code saved on GitHub — the first step of a
                developer portfolio.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title" id="tools">Tools you’ll use</h2>
          <p className="section-intro">
            The same free, professional tools used by working developers — so nothing you learn is wasted.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Languages</h3>
              <p>HTML for structure, CSS for design and JavaScript for interactivity — the three languages of the web.</p>
            </article>
            <article className="card">
              <h3>Editor and browser</h3>
              <p>VS Code with a few beginner-friendly extensions, and the browser’s built-in developer tools.</p>
            </article>
            <article className="card">
              <h3>Sharing your work</h3>
              <p>
                Git and GitHub for saving your code, a free static hosting service to publish your page, plus video calls
                and a group chat for live help.
              </p>
            </article>
          </div>
          <p>
            Wondering whether to learn JavaScript or Python first? Our comparison of{' '}
            <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link> explains why we
            start with JavaScript for web work.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the workshop</p>
          <h2 className="section-title" id="next">Where it can lead</h2>
          <p>
            The workshop is a starting point, not a job qualification. Its goal is to help you make an informed decision.
            After two weekends, some participants realise they love it and apply to a bootcamp; others decide coding is
            not for them — which is just as valuable to know before investing in a longer program.
          </p>
          <p>If you want to go further, there are several natural next steps at Atlas Code, all taught live online:</p>
          <ul className="checklist">
            <li>
              The <Link href="/programs/full-stack-web-development/">Full-Stack Web Development bootcamp</Link>: 12
              full-time weeks to become a junior developer.
            </li>
            <li>
              The <Link href="/programs/part-time-web-development/">Part-Time Web Development program</Link>: the same
              curriculum over 24 weeks of evenings and Saturdays.
            </li>
            <li>
              The <Link href="/programs/data-analytics/">Data Analytics bootcamp</Link>, if you enjoyed the logic but
              prefer numbers and dashboards.
            </li>
            <li>
              The <Link href="/programs/ui-ux-design/">UI/UX Design bootcamp</Link>, if the CSS and design part was your
              favourite.
            </li>
          </ul>
          <p>
            For a wider view of the profession, read{' '}
            <Link href="/blog/how-to-become-web-developer-uk/">how to become a web developer in the UK</Link>. Our{' '}
            <Link href="/career-services/">career services</Link> are part of the longer bootcamps; during the workshop,
            instructors are happy to answer your questions about careers, but they will be honest that results depend on
            sustained practice and the job market.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Price and booking</h2>
          <p className="section-intro">
            The workshop costs <strong>{p.priceLabel}</strong>. If you later enrol in one of our bootcamps, this amount is
            deducted from your bootcamp tuition — so trying first costs you nothing extra.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Pick your weekends</h3>
              <p>
                Workshops are held {p.nextStart}, in UK time or US Eastern time. Groups are small, so places are limited.
              </p>
              <Link className="card-link" href="/upcoming-cohorts/">See upcoming workshop dates</Link>
            </article>
            <article className="card">
              <h3>2. Register</h3>
              <p>No admission test is needed for the workshop — just a short form so we can prepare.</p>
              <Link className="card-link" href="/apply/">Register for the workshop</Link>
            </article>
            <article className="card">
              <h3>3. Plan ahead</h3>
              <p>Learn how the deduction works and what financing exists for the full bootcamps.</p>
              <Link className="card-link" href="/tuition-financing/">Read about tuition and financing</Link>
            </article>
          </div>
          <p>
            Thinking about a bootcamp afterwards? Read{' '}
            <Link href="/blog/how-to-prepare-for-coding-bootcamp/">how to prepare for a coding bootcamp</Link> and see
            how the <Link href="/admissions/">bootcamp admissions process</Link> works.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq">Workshop FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do I really need zero experience?',
                a: 'Yes. The workshop is designed for complete beginners. If you have already done some tutorials, you will still benefit from the structure, the feedback and publishing a finished page.',
              },
              {
                q: 'Is the workshop fee really deducted from bootcamp tuition?',
                a: 'Yes. If you enrol in an Atlas Code bootcamp after the workshop, the workshop price is deducted from your bootcamp tuition. Ask our team for the conditions that apply to your cohort.',
              },
              {
                q: 'Which time zone is the workshop in?',
                a: `Each workshop group runs in either ${site.timezones.uk} or ${site.timezones.na}, from 10:00 to 16:00 on Saturday and Sunday. Choose the group that fits where you live when you register.`,
              },
              {
                q: 'Can I attend only one weekend?',
                a: 'The two weekends build on each other, so we recommend attending all four days. If you must miss a day, tell us early; sessions are recorded and we will suggest how to catch up.',
              },
              {
                q: 'What equipment do I need?',
                a: 'A laptop or desktop computer with a modern browser, a stable internet connection, and a webcam and microphone. We send simple set-up instructions before the first session and help you on the day if anything does not work.',
              },
              {
                q: 'Will I be able to get a job after the workshop?',
                a: 'No, and we will not pretend otherwise. Twenty-four hours gives you foundations and a clear picture of the profession. Becoming job-ready takes a longer program such as one of our bootcamps, plus sustained practice.',
              },
              {
                q: 'Is learning to code online really as effective as in person?',
                a: 'For many beginners, yes, provided the classes are live and interactive. You can ask questions at any time, share your screen so an instructor sees exactly what you see, and keep the recordings to review later.',
              },
            ]}
          />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Write your first lines of code this month</h2>
          <p>
            Live online workshops are held {p.nextStart}. Register now, or talk to an advisor if you have questions.
          </p>
          <Link className="btn btn-primary" href="/apply/">Register now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
