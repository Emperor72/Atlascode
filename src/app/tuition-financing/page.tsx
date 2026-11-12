import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/tuition-financing/';
export const metadata = coreMetadata(PATH);

const rows = [
  ['Full-Stack Web Development', '/programs/full-stack-web-development/', 'Full-time · 12 weeks', site.programs.fullstack],
  ['Part-Time Web Development', '/programs/part-time-web-development/', 'Part-time · 24 weeks', site.programs.parttime],
  ['Data Analytics', '/programs/data-analytics/', 'Full-time · 10 weeks', site.programs.data],
  ['UI/UX Design', '/programs/ui-ux-design/', 'Full-time · 8 weeks', site.programs.uxui],
  ['Intro to Coding', '/programs/intro-to-coding/', '2 weekends', site.programs.intro],
] as const;

export default function TuitionPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Prices</p>
          <h2 className="section-title" id="prices">
            Tuition by program
          </h2>
          <p className="section-intro">
            Tuition includes all teaching, course material, software licences used in class, career services and access to the alumni
            community. There are no registration or exam fees.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col">Format</th>
                  <th scope="col">Tuition</th>
                  <th scope="col">Next start</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([name, href, format, info]) => (
                  <tr key={href}>
                    <th scope="row">
                      <Link href={href}>{name}</Link>
                    </th>
                    <td>{format}</td>
                    <td>
                      <strong>{info.priceLabel}</strong>
                    </td>
                    <td>{info.nextStart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The Intro to Coding fee is deducted from bootcamp tuition if you enroll in a bootcamp within six months. See all{' '}
            <Link href="/upcoming-cohorts/">upcoming start dates</Link>.
          </p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="ways">
        <div className="container">
          <p className="eyebrow">Financing</p>
          <h2 className="section-title" id="ways">
            Ways to pay for your bootcamp
          </h2>
          <p className="section-intro">
            Paying a bootcamp in one go isn’t realistic for most people, so we offer several options. Your admissions advisor will help
            you build a plan that works for your situation.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <h3>Pay in full</h3>
              <p>
                Pay your tuition before the start of the program and receive a discount. Best if you have savings or a sponsor ready to pay
                upfront.
              </p>
            </article>
            <article className="card">
              <h3>Interest-free instalments</h3>
              <p>
                After the {site.deposit} deposit, spread the remaining tuition over monthly instalments during the program, at no extra
                cost. Instalment schedules are agreed in writing at enrollment.
              </p>
            </article>
            <article className="card">
              <h3>Early-bird pricing</h3>
              <p>
                Complete admissions and pay your deposit at least six weeks before your start date to benefit from an early-bird
                discount. Ask your advisor for the current amount.
              </p>
            </article>
            <article className="card">
              <h3>Scholarships</h3>
              <p>
                Each cohort includes a limited number of partial, need-based scholarships, with seats reserved to encourage women in tech and
                learners from rural areas of Souss-Massa. Mention it in your application.
              </p>
            </article>
            <article className="card">
              <h3>Employer sponsorship</h3>
              <p>
                Your employer may fund your training as professional development. We provide quotes, invoices and attendance reports. See{' '}
                <Link href="/corporate-training/">corporate training</Link> for team programs.
              </p>
            </article>
            <article className="card">
              <h3>Bank loans</h3>
              <p>
                Some Moroccan banks offer personal or education loans. We can provide the documents your bank needs (enrollment
                certificate, program description, invoice). Compare offers carefully before committing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="value">
        <div className="container narrow prose">
          <h2 id="value">Is a coding bootcamp worth the investment?</h2>
          <p>
            A bootcamp is a serious financial decision, so think it through calmly. Here are the questions we encourage every applicant to
            ask, including about us:
          </p>
          <ul>
            <li>
              <strong>What will I be able to do at the end?</strong> Look at the concrete curriculum and the projects, for example the{' '}
              <Link href="/programs/full-stack-web-development/">full-stack curriculum week by week</Link>.
            </li>
            <li>
              <strong>What support do I get to find work?</strong> Ask how career services work in practice. Ours are described on the{' '}
              <Link href="/career-services/">career services page</Link>.
            </li>
            <li>
              <strong>What is the realistic job market?</strong> Read our honest overview of{' '}
              <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link> and of{' '}
              <Link href="/blog/remote-developer-jobs-from-morocco/">remote work from Morocco</Link>.
            </li>
            <li>
              <strong>Can I afford the time, not just the money?</strong> A full-time bootcamp means pausing income for a few months; the
              part-time format lets you keep working.
            </li>
          </ul>
          <p>
            Compared with a multi-year degree, a bootcamp costs less in total and gets you to the job market faster, but it is more
            intense and doesn’t replace a degree for every career. Our guide to <Link href="/blog/coding-bootcamp-vs-university-morocco/">bootcamp vs university in Morocco</Link>{' '}
            compares both paths honestly.
          </p>
          <div className="callout">
            <p>
              <strong>Transparency promise:</strong> the price you see is the price you pay. Your enrollment contract lists every payment
              date and our refund conditions, detailed in our <Link href="/terms/">terms & conditions</Link>.
            </p>
          </div>

          <h2 id="tuition-faq">Tuition FAQ</h2>
          <Faq
            items={[
              {
                q: 'What does the deposit cover?',
                a: `The ${site.deposit} deposit secures your seat in a cohort and is deducted from your total tuition. It is refundable under the conditions described in our terms, for example if we cancel a cohort.`,
              },
              {
                q: 'Are there hidden costs?',
                a: 'No. Tuition covers teaching, material, software used in class and career services. Your own costs are your laptop, transport, meals and, if you come from outside Agadir, accommodation.',
              },
              {
                q: 'Can I get a refund if I drop out?',
                a: 'Refunds depend on when you withdraw. Before the start date most of the tuition paid is refundable; after the program starts, refunds are prorated as described in our terms and conditions.',
              },
              {
                q: 'Do you offer discounts for groups or companies?',
                a: 'Yes. Companies enrolling several employees and groups of friends joining together can receive a discount. Contact us for a quote.',
              },
              {
                q: 'How do scholarships work?',
                a: 'Indicate your interest in the application form. Scholarships are partial, based on financial need and motivation, and are awarded after the admissions challenge.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Let’s build a payment plan that works for you" text="Apply for free, then review financing options with an advisor before committing to anything." />
    </CorePage>
  );
}
