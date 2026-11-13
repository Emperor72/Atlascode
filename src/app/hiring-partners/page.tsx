import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { Faq } from '@/components/Faq';

const PATH = '/hiring-partners/';
export const metadata = coreMetadata(PATH);

export default function HiringPartnersPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">For employers</p>
          <h2 className="section-title" id="why-hire">
            Why hire from Atlas Code
          </h2>
          <div className="grid grid-3">
            <article className="card">
              <h3>Trained on real projects</h3>
              <p>
                Graduates have spent hundreds of hours building, reviewing and shipping code, dashboards or designs in teams, using Git, code
                review and agile rituals.
              </p>
            </article>
            <article className="card">
              <h3>A modern, relevant stack</h3>
              <p>
                JavaScript, TypeScript, React, Node.js and PostgreSQL for developers; SQL, Python and Power BI for analysts; Figma and user
                research for designers. See each <Link href="/programs/">program curriculum</Link>.
              </p>
            </article>
            <article className="card">
              <h3>Remote-ready from day one</h3>
              <p>
                Graduates trained live online, in distributed teams, using video calls, pull requests and written async communication, the
                way most modern tech teams already work.
              </p>
            </article>
            <article className="card">
              <h3>Free for employers</h3>
              <p>We charge no recruitment fees. Our goal is placing our graduates in roles where they’ll grow.</p>
            </article>
            <article className="card">
              <h3>Pre-screened profiles</h3>
              <p>We know each candidate’s strengths and can recommend profiles that match your stack, culture and level of autonomy.</p>
            </article>
            <article className="card">
              <h3>Flexible formats</h3>
              <p>Full-time roles, internships, apprenticeships, contract work or capstone projects based on your real business needs.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container narrow prose">
          <h2 id="how">How to work with us</h2>
          <ol>
            <li>
              <strong>Tell us what you need.</strong> Share the role, stack, location (on-site, hybrid or remote, and in which country) and timing.
            </li>
            <li>
              <strong>Meet candidates.</strong> We send matching profiles with portfolios, or invite you to our online demo day to see projects live.
            </li>
            <li>
              <strong>Interview and hire.</strong> You run your process; we help with scheduling and feedback.
            </li>
          </ol>
          <h3>Other ways to get involved</h3>
          <ul>
            <li>Give a talk or workshop to current students</li>
            <li>Propose a real-world brief for a capstone project</li>
            <li>Join demo day as a guest reviewer</li>
            <li>Host a virtual office hour or Q&amp;A with a cohort</li>
            <li>
              Upskill your current team through <Link href="/corporate-training/">corporate training</Link>
            </li>
          </ul>
          <div className="callout">
            <p>
              <strong>Contact our partnerships team:</strong> <a href={`mailto:${site.email}?subject=Hiring%20partner`}>{site.email}</a> or{' '}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>. You can also use our <Link href="/contact/">contact form</Link>.
            </p>
          </div>
          <h2 id="employer-faq">Employer FAQ</h2>
          <Faq
            items={[
              {
                q: 'Does it cost anything to hire Atlas Code graduates?',
                a: 'No. Hiring our graduates is free. There are no placement or recruitment fees.',
              },
              {
                q: 'Can we offer internships or apprenticeships?',
                a: 'Yes. Internships and apprenticeships are a common first step. Tell us the duration, location and conditions and we will share suitable profiles. Candidates must have the right to work in your country.',
              },
              {
                q: 'What level should we expect from a graduate?',
                a: 'Junior level: able to build features, write clean code or analyses, use Git and learn new tools quickly, with mentoring for architecture and complex decisions in the first months.',
              },
              {
                q: 'Can students work on a real project for our company?',
                a: 'Yes. Capstone projects can be based on a real brief from a partner, scoped together with our instructors.',
              },
            ]}
          />
        </div>
      </section>
    </CorePage>
  );
}
