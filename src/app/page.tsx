import Link from 'next/link';
import { programs, programInfo } from '@/content/programs';
import { posts } from '@/content/blog';
import { getCorePage } from '@/content/pages';
import { site } from '@/lib/site';
import { webPageSchema } from '@/lib/seo';
import { coreMetadata } from '@/components/CorePage';
import { CtaBand, PostCard, ProgramCard } from '@/components/Cards';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Icon, type IconName } from '@/components/Icons';

export const metadata = coreMetadata('/');

const reasons = [
  {
    icon: 'code' as IconName,
    title: 'You learn by building',
    text: 'About 80% of your time is spent writing code, designing or analysing data, not watching slides. Every week ends with something real you can show an employer.',
  },
  {
    icon: 'users' as IconName,
    title: 'Small cohorts, real attention',
    text: 'Cohorts are kept small so instructors and teaching assistants know your code, your blockers and your goals, and can step in before you fall behind.',
  },
  {
    icon: 'layers' as IconName,
    title: 'A curriculum built for the market',
    text: 'We teach the stack agencies, startups, in-house teams and remote-first employers actually use, including JavaScript, TypeScript, React, Node.js, SQL, Python, Power BI and Figma, and we update it every cohort.',
  },
  {
    icon: 'briefcase' as IconName,
    title: 'Career services from week one',
    text: 'CV and LinkedIn workshops, GitHub portfolio reviews, mock technical interviews and introductions to employers are part of every program, not an optional extra.',
  },
  {
    icon: 'video' as IconName,
    title: 'Live online, in your time zone',
    text: 'Cohorts run live in UK time or US Eastern Time, so you learn with a real instructor and classmates during hours that fit your life, from anywhere.',
  },
  {
    icon: 'calendar' as IconName,
    title: 'Full-time or while you work',
    text: 'Choose an intensive full-time bootcamp or our part-time evening and Saturday format. Same curriculum, same projects, same career support.',
  },
];

const steps = [
  {
    title: 'Apply online',
    text: 'A five-minute form about your background and goals. Free and non-binding.',
    link: ['/apply/', 'Start your application'],
  },
  {
    title: 'Talk with an advisor',
    text: 'A 30-minute video call to confirm the right program, schedule and time zone for you.',
    link: ['/admissions/', 'How admissions work'],
  },
  {
    title: 'Complete the challenge',
    text: 'A short logic exercise and prep work. No coding experience required, just motivation.',
    link: ['/blog/how-to-prepare-for-coding-bootcamp/', 'How to prepare'],
  },
  {
    title: 'Secure your seat',
    text: 'Choose your payment plan, pay the deposit and get access to the pre-course material.',
    link: ['/tuition-financing/', 'Tuition & financing'],
  },
] as const;

const faqs = [
  {
    q: 'Do I need coding experience to join Atlas Code?',
    a: 'No. Our full-time and part-time bootcamps start from the fundamentals. You need motivation, basic computer skills and the time to complete the free pre-course work. If you want to try coding first, our Intro to Coding weekend workshop is designed for complete beginners.',
  },
  {
    q: 'Is Atlas Code online or in person?',
    a: `Atlas Code is fully online and taught live. Cohorts run in ${site.timezones.uk} for learners in the UK and Europe, or in ${site.timezones.na} for learners in the US and Canada. You join scheduled video classes, pair-program with classmates and get real-time help from teaching assistants.`,
  },
  {
    q: 'How much does an online coding bootcamp cost?',
    a: `Tuition at Atlas Code ranges from ${site.programs.uxui.priceLabel} for UI/UX Design to ${site.programs.fullstack.priceLabel} for Full-Stack Web Development. Interest-free payment plans, early-bird discounts and need-based scholarships are available.`,
  },
  {
    q: 'In which language are classes taught?',
    a: 'All classes are taught in English. You do not need to be a native speaker, but you should be comfortable following live sessions and discussing your code in English.',
  },
  {
    q: 'Will Atlas Code help me find a job?',
    a: 'Yes. Career services are included in every program: CV and LinkedIn reviews, portfolio coaching, mock interviews, job-search strategy and introductions to employers in our network. We do not promise a job, because your effort matters most, but we support you during and after the bootcamp.',
  },
  {
    q: 'Can I keep my job while studying?',
    a: 'Yes. The Part-Time Web Development program runs on Tuesday and Thursday evenings plus Saturday mornings over 24 weeks, so you can learn without quitting your job.',
  },
];

export default function HomePage() {
  const page = getCorePage('/');
  return (
    <>
      <JsonLd data={webPageSchema({ path: '/', title: page.title, description: page.description, crumbs: [{ name: 'Home', path: '/' }] })} />

      <section className="home-hero">
        <div className="hero-floor" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Live online coding bootcamp · UK · US · Canada</p>
            <h1>
              Become a web developer, data analyst or designer, <em>live online, from anywhere</em>
            </h1>
            <p className="lead">
              {site.name} is a live online coding bootcamp for people in {site.marketsLabel} who want a real career in tech. Intensive,
              project-based programs, small cohorts, instructors who work in the industry, and career support until you land your first
              role.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/programs/">
                Explore programs
              </Link>
              <Link className="btn btn-ghost" href="/apply/">
                Apply in 5 minutes
              </Link>
            </div>
            <ul className="hero-points">
              <li>No coding experience required</li>
              <li>UK &amp; US Eastern time cohorts</li>
              <li>Interest-free payment plans</li>
              <li>Next start: {site.programs.fullstack.nextStart}</li>
            </ul>
          </div>
          <div className="scene" aria-hidden="true">
            <div className="scene-inner">
              <div className="orbit" />
              <div className="globe">
                {Array.from({ length: 9 }, (_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className="float-card float-code">
                <span className="k">const</span> career = <span className="f">build</span>(<span className="s">&apos;portfolio&apos;</span>);
                <br />
                <span className="k">await</span> career.<span className="f">ship</span>();
              </div>
              <div className="float-card float-uk">
                <span className="dot" />
                Live now
                <strong>London · 09:00 GMT</strong>
              </div>
              <div className="float-card float-us">
                <span className="dot" />
                Live cohort
                <strong>New York · 09:00 ET</strong>
              </div>
              <div className="float-card float-ship">
                <strong>✓ Project deployed</strong>
                Code review passed
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="programs-title">
        <div className="container">
          <p className="eyebrow">Our programs</p>
          <h2 className="section-title" id="programs-title">
            Five ways to start your tech career online
          </h2>
          <p className="section-intro">
            Whether you want to build web applications, turn data into decisions or design digital products, there is a program built for
            you. All are taught live online and end with a portfolio of real projects.
          </p>
          <div className="grid grid-3">
            {programs.map(({ meta }) => {
              const info = programInfo(meta.slug);
              return <ProgramCard key={meta.slug} meta={meta} price={info.priceLabel} nextStart={info.nextStart} />;
            })}
          </div>
          <p style={{ marginTop: '2rem' }}>
            Not sure which program fits? <Link href="/programs/">Compare all bootcamp programs side by side</Link> or{' '}
            <Link href="/contact/">book a free call with an admissions advisor</Link>.
          </p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="why-title">
        <div className="container">
          <p className="eyebrow">Why Atlas Code</p>
          <h2 className="section-title" id="why-title">
            A bootcamp designed around one goal: getting you job-ready
          </h2>
          <p className="section-intro">
            Universities teach theory; online courses leave you alone at 1 a.m. with a bug you can’t fix. A bootcamp sits in between, and
            here is what makes ours different.
          </p>
          <div className="grid grid-3">
            {reasons.map((r) => (
              <article className="card" key={r.title}>
                <span className="icon" aria-hidden="true">
                  <Icon name={r.icon} />
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="method-title">
        <div className="container split">
          <div>
            <p className="eyebrow">How you learn</p>
            <h2 className="section-title" id="method-title">
              Learn it in the morning, build it in the afternoon
            </h2>
            <p>
              Each day starts with a focused live session where an instructor introduces a concept and live-codes an example. The rest of the
              day is hands-on: you pair with classmates on exercises, then apply what you learned to a project, with teaching assistants on
              hand to unblock you.
            </p>
            <p>
              Every Friday you present your work, get code reviews and reflect on what to improve. This rhythm of learning, building,
              reviewing and repeating is how professional developers work, and it’s how you will build confidence fast.
            </p>
            <ul className="checklist">
              <li>Live lectures and code-alongs every morning</li>
              <li>Pair programming and daily exercises</li>
              <li>Weekly projects with code review</li>
              <li>Team projects that simulate a real product team</li>
              <li>A final capstone presented on demo day</li>
            </ul>
            <p>
              Curious what that looks like in practice? Read our <Link href="/blog/online-coding-bootcamp-guide/">guide to online coding bootcamps</Link>{' '}
              or see the <Link href="/programs/full-stack-web-development/">full-stack curriculum week by week</Link>.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">A typical full-time bootcamp day, in your cohort’s time zone</caption>
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">What happens</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00</td>
                  <td>Video stand-up: goals and blockers</td>
                </tr>
                <tr>
                  <td>9:15</td>
                  <td>Live lecture and code-along</td>
                </tr>
                <tr>
                  <td>11:00</td>
                  <td>Pair programming in breakout rooms</td>
                </tr>
                <tr>
                  <td>13:00</td>
                  <td>Lunch break</td>
                </tr>
                <tr>
                  <td>14:00</td>
                  <td>Project work with TA support</td>
                </tr>
                <tr>
                  <td>16:30</td>
                  <td>Code review and daily recap</td>
                </tr>
                <tr>
                  <td>17:30</td>
                  <td>Optional: career workshop or talk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="steps-title">
        <div className="container">
          <p className="eyebrow">Admissions</p>
          <h2 className="section-title" id="steps-title">
            From application to first day in four steps
          </h2>
          <p className="section-intro">
            We select on motivation, not diplomas. Most applicants complete the process in under two weeks.
          </p>
          <div className="grid grid-4">
            {steps.map((s, i) => (
              <article className="card" key={s.title}>
                <span className="step-number">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link className="card-link" href={s.link[0]}>
                  {s.link[1]}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="container">
          <p className="eyebrow">Who joins Atlas Code</p>
          <h2 className="section-title" id="who-title">
            Built for people starting from where you are
          </h2>
          <div className="grid grid-2">
            <article className="card">
              <h3>Students and recent graduates</h3>
              <p>
                Your degree gave you theory; employers ask for projects. In a few months you can build the practical portfolio that gets
                interviews. See how a bootcamp compares in our{' '}
                <Link href="/blog/coding-bootcamp-vs-university-degree/">bootcamp vs degree guide</Link>.
              </p>
            </article>
            <article className="card">
              <h3>Career changers</h3>
              <p>
                From tourism, teaching, finance, sales or engineering, many people move into tech later in their career. Your previous
                experience is an asset. Read <Link href="/blog/career-change-to-tech-after-30/">switching to tech after 30</Link>.
              </p>
            </article>
            <article className="card">
              <h3>Freelancers and entrepreneurs</h3>
              <p>
                Build your own product, automate your business or offer development services to clients anywhere. Our guide to{' '}
                <Link href="/blog/remote-developer-jobs-guide/">remote developer jobs</Link> covers the practical side.
              </p>
            </article>
            <article className="card">
              <h3>Professionals upskilling</h3>
              <p>
                Add data analysis, automation or web skills to your current role, or train your whole team through our{' '}
                <Link href="/corporate-training/">corporate training programs</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark" aria-labelledby="how-title">
        <div className="container split">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-title" id="how-title">
              A real classroom, delivered live to your laptop
            </h2>
            <p>
              No commute and no relocation, but none of the isolation of self-paced courses either. You learn in a live cohort with the same
              instructors, classmates and teaching assistants every day, using the tools remote tech teams use: video calls, shared
              repositories, pull requests and team chat.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/online-learning/">
                How online learning works
              </Link>
              <Link className="btn btn-ghost" style={{ color: '#fff' }} href="/blog/junior-tech-jobs-uk-us-canada/">
                Junior tech jobs in the UK, US &amp; Canada
              </Link>
            </div>
          </div>
          <ul className="checklist">
            <li>Live classes in {site.timezones.uk} or {site.timezones.na}</li>
            <li>Remote pair programming and team projects</li>
            <li>Teaching assistants on call during project time</li>
            <li>Recordings of key sessions</li>
            <li>Online demo day, guest talks and alumni community</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="careers-title">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h2 className="section-title" id="careers-title">
            Where an Atlas Code program can take you
          </h2>
          <p className="section-intro">
            Graduates prepare for entry-level roles in agencies, startups, scale-ups, consultancies, in-house tech teams and remote-first
            companies across the UK, the US and Canada, or for freelance work. Our <Link href="/career-services/">career services team</Link> helps you aim
            at the right roles.
          </p>
          <div className="grid grid-4">
            {[
              ['Junior front-end developer', 'React, TypeScript, accessibility'],
              ['Junior full-stack developer', 'Node.js, APIs, PostgreSQL'],
              ['Junior data analyst', 'SQL, Python, Power BI dashboards'],
              ['Junior UI/UX designer', 'Figma, research, prototyping'],
              ['WordPress & web integrator', 'HTML, CSS, JavaScript, CMS'],
              ['Business intelligence assistant', 'Excel, SQL, reporting'],
              ['Freelance web developer', 'Client sites and web apps'],
              ['QA & support engineer', 'Testing, debugging, tooling'],
            ].map(([role, skills]) => (
              <article className="card" key={role}>
                <h3>{role}</h3>
                <p>{skills}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            Hiring? <Link href="/hiring-partners/">Meet our graduates and join demo day</Link>, free for employers.
          </p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="faq-title">
        <div className="container narrow">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title" id="faq-title">
            Questions about our online coding bootcamp
          </h2>
          <Faq items={faqs} />
          <p>
            More answers on our <Link href="/faq/">full FAQ page</Link>, or see <Link href="/upcoming-cohorts/">upcoming start dates</Link>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="blog-title">
        <div className="container">
          <p className="eyebrow">From the blog</p>
          <h2 className="section-title" id="blog-title">
            Guides for starting your tech career
          </h2>
          <div className="grid grid-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.meta.slug} meta={p.meta} />
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link href="/blog/">Read all articles on the Atlas Code blog →</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
