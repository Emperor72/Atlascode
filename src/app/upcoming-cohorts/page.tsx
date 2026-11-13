import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';

const PATH = '/upcoming-cohorts/';
export const metadata = coreMetadata(PATH);

const cohorts = [
  {
    name: 'Full-Stack Web Development',
    href: '/programs/full-stack-web-development/',
    info: site.programs.fullstack,
    format: 'Live online · Mon–Fri 9:00–17:30 (cohort time zone)',
    length: '12 weeks',
  },
  {
    name: 'Part-Time Web Development',
    href: '/programs/part-time-web-development/',
    info: site.programs.parttime,
    format: 'Live online · Tue & Thu 18:30–21:30 + Sat 9:00–14:00 (cohort time zone)',
    length: '24 weeks',
  },
  {
    name: 'Data Analytics',
    href: '/programs/data-analytics/',
    info: site.programs.data,
    format: 'Live online · Full-time, Mon–Fri',
    length: '10 weeks',
  },
  { name: 'UI/UX Design', href: '/programs/ui-ux-design/', info: site.programs.uxui, format: 'Live online · Full-time, Mon–Fri', length: '8 weeks' },
  {
    name: 'Intro to Coding workshop',
    href: '/programs/intro-to-coding/',
    info: site.programs.intro,
    format: 'Live online · Sat & Sun 10:00–16:00',
    length: '2 weekends',
  },
];

export default function CohortsPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <h2 className="section-title" id="dates">
            Next start dates
          </h2>
          <p className="section-intro">
            Each cohort runs live online in {site.timezones.uk} or {site.timezones.na}. Tell your advisor which time zone suits you
            and we will confirm the matching cohort.
          </p>
          <div className="grid grid-3">
            {cohorts.map((c) => (
              <article className="card program-card" key={c.href}>
                <span className="badge">{c.length}</span>
                <h3>
                  <Link href={c.href}>{c.name}</Link>
                </h3>
                <dl className="card-facts">
                  <div>
                    <dt>Next start</dt>
                    <dd>{c.info.nextStart}</dd>
                  </div>
                  <div>
                    <dt>Tuition</dt>
                    <dd>{c.info.priceLabel}</dd>
                  </div>
                </dl>
                <p>{c.format}</p>
                <Link className="card-link" href="/apply/" aria-label={`Apply for ${c.name}`}>
                  Apply for this cohort
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow prose">
          <h2 id="timeline">Your timeline before day one</h2>
          <p>Working backwards from your chosen start date, here is what an ideal preparation timeline looks like:</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8–6 weeks before</td>
                  <td>
                    <Link href="/apply/">Apply online</Link> and talk with an advisor; early-bird pricing applies
                  </td>
                </tr>
                <tr>
                  <td>6–4 weeks before</td>
                  <td>Complete the admissions challenge and receive your decision</td>
                </tr>
                <tr>
                  <td>4 weeks before</td>
                  <td>
                    Pay your deposit, confirm your <Link href="/tuition-financing/">payment plan</Link>, start pre-course work
                  </td>
                </tr>
                <tr>
                  <td>4–1 weeks before</td>
                  <td>
                    Complete 30–40 hours of pre-course work (see our <Link href="/blog/how-to-prepare-for-coding-bootcamp/">30-day prep plan</Link>)
                  </td>
                </tr>
                <tr>
                  <td>Day one</td>
                  <td>Online welcome session, setup check and your first live lecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="callout">
            <p>
              <strong>Seats are limited.</strong> Cohorts are kept small, and places go to applicants who complete admissions first. If a
              cohort is full, you can join the waiting list or reserve the next one.
            </p>
          </div>
          <h2 id="info-sessions">Free information sessions</h2>
          <p>
            We regularly host free online info sessions in UK and US Eastern time: a presentation of the programs, a live coding demo and open Q&amp;A
            with instructors. It’s the easiest way to get a feel for {site.name} before applying. <Link href="/contact/">Contact us</Link>{' '}
            to get the next date, or read <Link href="/online-learning/">how live online learning works</Link>.
          </p>
        </div>
      </section>
      <CtaBand title="Reserve your seat in the next cohort" />
    </CorePage>
  );
}
