import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { ProgramMeta } from '@/lib/types';

const p = site.programs.data;

export const meta: ProgramMeta = {
  slug: 'data-analytics',
  title: 'Online Data Analytics Bootcamp: SQL & Python | Atlas Code',
  description:
    'Become a data analyst in 10 weeks with our live online bootcamp for the UK, US and Canada: Excel, statistics, SQL, Python, Power BI and a real-world capstone.',
  h1: 'Online Data Analytics Bootcamp',
  lead: 'Ten full-time weeks of live online classes to learn how to clean, analyse and visualise data with Excel, SQL, Python and Power BI — and to turn numbers into decisions people actually act on.',
  crumb: 'Data Analytics',
  summary:
    'Learn Excel, statistics, SQL, Python and Power BI in 10 full-time weeks of live online classes, and finish with a capstone on e-commerce, public-sector or retail data.',
  badge: 'Full-time · 10 weeks · Online',
  related: [
    '/programs/full-stack-web-development/',
    '/tuition-financing/',
    '/blog/javascript-vs-python-beginners/',
    '/blog/junior-tech-jobs-uk-us-canada/',
  ],
  course: {
    name: 'Online Data Analytics Bootcamp',
    price: p.price,
    hours: 400,
    weeks: 10,
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
            <div><dt>Duration</dt><dd>10 weeks, full-time (about 400 hours)</dd></div>
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
              <li><a href="#careers">Careers in data</a></li>
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
            Almost every organisation collects data — online orders, customer support tickets, shipments, store sales —
            but few have enough people who can turn it into clear answers. This online data analytics bootcamp trains
            learners in {site.marketsLabel} to be that person.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Graduates in business, economics or science</h3>
              <p>
                You studied management, finance, statistics, social science or engineering and you want practical tools
                — SQL, Python, Power BI — that make your degree far more employable.
              </p>
            </article>
            <article className="card">
              <h3>Professionals who live in spreadsheets</h3>
              <p>
                You already build reports in Excel for a retailer, a charity, a logistics company or a public body. You
                want to automate the boring parts, handle bigger datasets and produce dashboards your managers trust.
              </p>
            </article>
            <article className="card">
              <h3>Career changers who like numbers</h3>
              <p>
                You enjoy puzzles, patterns and asking “why?”. Data analysis is a route into tech that relies less on
                building software and more on reasoning and communication.
              </p>
            </article>
          </div>
          <h3>Prerequisites</h3>
          <ul className="checklist">
            <li>No programming experience required: we teach SQL and Python from the basics.</li>
            <li>
              Comfort with secondary-school mathematics — percentages, averages, reading graphs. We cover the statistics
              you need.
            </li>
            <li>Basic spreadsheet use (entering data, simple formulas). Advanced Excel is taught in week 1.</li>
            <li>
              A laptop able to run Python, a database client and Power BI Desktop, plus a reliable broadband connection, a
              webcam and a headset. Power BI Desktop runs on Windows; tell us if you use a Mac and we will help you plan.
            </li>
            <li>
              Reading English documentation, and completing our <Link href="/admissions/">admissions process</Link>,
              which includes a video call and a short logic and numeracy exercise.
            </li>
          </ul>
          <p>
            Never written a line of code and a little nervous about it? The{' '}
            <Link href="/programs/intro-to-coding/">Intro to Coding online weekend workshop</Link> is a low-pressure way
            to discover how programming feels before you commit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title" id="outcomes">What you’ll be able to do</h2>
          <p className="section-intro">
            By the end of ten weeks you will be able to take a messy dataset and a vague business question and deliver a
            clear, defensible answer. You will be able to:
          </p>
          <ul className="checklist">
            <li>Build robust spreadsheets with lookups, pivot tables, conditional logic and clean structure.</li>
            <li>
              Apply descriptive statistics, distributions, correlation and basic hypothesis testing — and know when a
              result is not meaningful.
            </li>
            <li>
              Write SQL queries in PostgreSQL: filtering, joins, aggregation, subqueries, common table expressions and
              window functions.
            </li>
            <li>Use Python with pandas to load, clean, reshape and analyse data reproducibly in notebooks.</li>
            <li>Create clear charts with matplotlib and choose the right visual for each question.</li>
            <li>
              Handle missing values, duplicates, inconsistent dates and currencies, free-text fields and other real
              data-quality problems.
            </li>
            <li>Model data and build interactive Power BI dashboards with DAX measures and filters.</li>
            <li>
              Present findings as a story with a clear recommendation, adapted to a manager, a client or a technical
              team — including over a video call.
            </li>
            <li>Document your work on GitHub so others can review and reproduce it.</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Curriculum</p>
          <h2 className="section-title" id="curriculum">Week-by-week curriculum</h2>
          <p className="section-intro">
            The curriculum moves from tools you may already know to tools that scale, with a business question attached
            to every exercise.
          </p>
          <ol className="timeline">
            <li>
              <h3>Week 1 · Spreadsheets and Excel for analysis</h3>
              <p>
                Structuring data properly, lookups, conditional formulas, pivot tables and charts. Thinking like an
                analyst: defining the question before touching the data.
              </p>
            </li>
            <li>
              <h3>Week 2 · Statistics for decision-making</h3>
              <p>
                Averages and medians, spread, distributions, sampling, correlation versus causation, and an introduction
                to A/B testing and confidence intervals — all with practical examples.
              </p>
            </li>
            <li>
              <h3>Weeks 3–4 · SQL with PostgreSQL</h3>
              <p>
                Relational databases, SELECT, filtering, joins, grouping and aggregation, then subqueries, CTEs and window
                functions. You answer business questions on a multi-table sales database.
              </p>
            </li>
            <li>
              <h3>Weeks 5–6 · Python and pandas</h3>
              <p>
                Python fundamentals in Jupyter notebooks, then pandas for loading, filtering, grouping and merging data.
                Visualisation with matplotlib. Connecting Python to PostgreSQL.
              </p>
            </li>
            <li>
              <h3>Week 7 · Data cleaning in practice</h3>
              <p>
                Missing values, outliers, duplicates, date formats (UK versus US), multiple currencies, inconsistent
                spellings and free-text categories, and documenting every cleaning decision.
              </p>
            </li>
            <li>
              <h3>Week 8 · Power BI dashboards</h3>
              <p>
                Power Query, data modelling, relationships, DAX measures and interactive reports. Designing dashboards
                that answer questions at a glance.
              </p>
            </li>
            <li>
              <h3>Week 9 · Data storytelling</h3>
              <p>
                Structuring an analysis, choosing the right chart, writing clear insights and recommendations, and
                presenting to non-technical audiences.
              </p>
            </li>
            <li>
              <h3>Week 10 · Capstone and presentation</h3>
              <p>
                You complete an end-to-end analysis on a real-world-style dataset — e-commerce, public services or retail
                — and present your findings and dashboard live online to a panel.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Daily rhythm</p>
          <h2 className="section-title" id="typical-day">A typical day</h2>
          <p className="section-intro">
            Short theory, lots of practice on real-looking data, and a daily habit of explaining what you found. Times
            are in your cohort’s time zone ({site.timezones.uk} or {site.timezones.na}).
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Time</th><th scope="col">Activity</th></tr>
              </thead>
              <tbody>
                <tr><td>9:00–9:30</td><td>Video stand-up and a quick SQL or statistics warm-up question.</td></tr>
                <tr><td>9:30–11:00</td><td>Live lesson: new concept or tool, demonstrated on a dataset via screen share.</td></tr>
                <tr><td>11:00–12:30</td><td>Guided exercises in pairs in breakout rooms, with instructor and TA support.</td></tr>
                <tr><td>12:30–13:30</td><td>Lunch break.</td></tr>
                <tr><td>13:30–16:30</td><td>Case study: answer a business question end to end with the day’s tools, with 1:1 help on request.</td></tr>
                <tr><td>16:30–17:30</td><td>Mini-presentations: two or three learners share their findings on screen and receive feedback.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Why present every day?</strong> In a real job, an analysis nobody understands has no impact.
              Explaining a chart in two minutes to classmates who do not know your dataset is the fastest way to build
              the communication skills that interviewers test for — and in remote and hybrid teams, much of that
              presenting happens on video, just like here. Lessons are recorded, and our{' '}
              <Link href="/online-learning/">online learning page</Link> explains how the virtual classroom works.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects">Projects you’ll build</h2>
          <p className="section-intro">
            Your portfolio will show the full analyst workflow, from raw data to recommendation. Datasets are public or
            realistically simulated; we never present them as confidential company data.
          </p>
          <div className="grid grid-2">
            <article className="card">
              <h3>E-commerce customer analysis</h3>
              <p>
                Explore order history, repeat purchases and seasonality in online-shop-style data, and recommend
                retention or marketing actions with a clear expected impact.
              </p>
            </article>
            <article className="card">
              <h3>Public open data report</h3>
              <p>
                Combine open datasets — for example transport, housing or health service figures — to answer a question a
                local authority or journalist might ask, with every assumption documented.
              </p>
            </article>
            <article className="card">
              <h3>Retail sales dashboard</h3>
              <p>
                Build a Power BI dashboard tracking sales, margins and stock across several stores, with filters a
                manager can use without training.
              </p>
            </article>
            <article className="card">
              <h3>Capstone analysis</h3>
              <p>
                An end-to-end project on the dataset of your choice from our selection, with SQL, Python, a dashboard and
                a recorded presentation.
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
            We focus on tools that appear frequently in data job descriptions. Curious how Python compares with
            JavaScript? Read <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link>.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Spreadsheets and BI</h3>
              <p>Microsoft Excel, Google Sheets, Power BI Desktop, Power Query and DAX.</p>
            </article>
            <article className="card">
              <h3>Databases</h3>
              <p>PostgreSQL, SQL (joins, CTEs, window functions) and a graphical database client.</p>
            </article>
            <article className="card">
              <h3>Programming</h3>
              <p>Python, Jupyter notebooks, pandas, matplotlib, Git and GitHub for sharing reproducible work.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">After the bootcamp</p>
          <h2 className="section-title" id="careers">Careers in data analytics</h2>
          <p>
            The bootcamp prepares you to apply for entry-level roles such as <strong>junior data analyst</strong>,{' '}
            <strong>business intelligence (BI) analyst</strong>, <strong>reporting analyst</strong>,{' '}
            <strong>junior business analyst</strong> or <strong>marketing and sales analyst</strong>. Many learners also
            become the “data person” within their current team, which can be a powerful career move in itself.
          </p>
          <p>
            Analysts are useful in almost every sector — finance, insurance, retail, e-commerce, logistics, healthcare
            and the public sector — across {site.marketsLabel}, in agencies, startups, in-house teams and remote-first
            companies. Our article on{' '}
            <Link href="/blog/junior-tech-jobs-uk-us-canada/">junior tech jobs in the UK, US and Canada</Link> gives an
            overview of entry-level hiring, and our{' '}
            <Link href="/blog/remote-developer-jobs-guide/">guide to remote tech jobs</Link> covers working for distributed
            teams. Salaries depend heavily on country, sector, city and experience; treat any figures you find online as
            general, approximate market indications.
          </p>
          <p>
            We do not promise jobs or publish invented placement statistics. What we offer is practical help through{' '}
            <Link href="/career-services/">Atlas Code career services</Link>: CV and LinkedIn reviews, portfolio feedback
            on your analyses and dashboards, mock interviews over video including SQL exercises, and job-search coaching.
            If you discover you enjoy building applications more than analysing data, our{' '}
            <Link href="/programs/full-stack-web-development/">online full-stack web development bootcamp</Link> is the
            natural next step, and designers-at-heart can look at the{' '}
            <Link href="/programs/ui-ux-design/">online UI/UX Design bootcamp</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Investment</p>
          <h2 className="section-title" id="tuition">Tuition and next steps</h2>
          <p className="section-intro">
            Tuition for the online Data Analytics bootcamp is <strong>{p.priceLabel}</strong>. A deposit of{' '}
            {site.deposit} confirms your seat after admission.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>1. Review your options</h3>
              <p>Payment plans, financing and scholarships are explained in detail.</p>
              <Link className="card-link" href="/tuition-financing/">See tuition and financing</Link>
            </article>
            <article className="card">
              <h3>2. Apply</h3>
              <p>A short application, a video call and a numeracy and logic exercise.</p>
              <Link className="card-link" href="/admissions/">Learn about admissions</Link>
            </article>
            <article className="card">
              <h3>3. Choose your start date</h3>
              <p>The next Data Analytics cohort starts {p.nextStart}, with UK and US Eastern time options.</p>
              <Link className="card-link" href="/upcoming-cohorts/">View upcoming cohorts</Link>
            </article>
          </div>
          <p>
            Want to see how live online classes work first? Explore our{' '}
            <Link href="/online-learning/">online learning experience</Link>, or compare all our{' '}
            <Link href="/programs/">online tech programs</Link>.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq">Data Analytics FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do I need to know how to code?',
                a: 'No. SQL and Python are taught from the basics. If you would like a gentle first contact with programming, the Intro to Coding online weekend workshop is a good warm-up.',
              },
              {
                q: 'How much maths is involved?',
                a: 'Practical statistics, not advanced theory. If you are comfortable with percentages, averages and reading graphs, you have the foundation; we build the rest in week 2.',
              },
              {
                q: 'Is this a data science program?',
                a: 'No. Data analytics focuses on answering business questions with SQL, Python, statistics and dashboards. Machine learning is introduced only as context. It is a solid foundation if you later want to study data science.',
              },
              {
                q: 'Which time zones do the live classes run in?',
                a: `Each cohort runs on one schedule, either ${site.timezones.uk} or ${site.timezones.na}, Monday to Friday from 9:00 to 17:30. Pick the cohort that matches where you live; lessons are recorded if you need to review them later.`,
              },
              {
                q: 'Can I use Power BI on a Mac?',
                a: 'Power BI Desktop is a Windows application. Mac users can usually work through a Windows virtual machine or a cloud-hosted Windows desktop; we will help you find a solution during admissions.',
              },
              {
                q: 'Do I need to be in the UK, the US or Canada?',
                a: 'The program is designed for learners in the UK, the US and Canada, but you can join from elsewhere if you can attend live sessions at your cohort times. Having the right to work in the country where you apply for jobs is your responsibility; we cannot sponsor visas.',
              },
              {
                q: 'Is there a part-time version?',
                a: 'Data Analytics currently runs full-time. If you need an evening format, our part-time online web development program is designed for working learners, and you can ask us about future part-time data cohorts.',
              },
            ]}
          />
          <p>
            Need an evening schedule? See the{' '}
            <Link href="/programs/part-time-web-development/">part-time online web development program</Link>.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Turn data into decisions</h2>
          <p>
            The next online Data Analytics cohort starts {p.nextStart}. Apply now or talk to an advisor about your
            background.
          </p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
