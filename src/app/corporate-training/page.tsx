import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { Faq } from '@/components/Faq';

const PATH = '/corporate-training/';
export const metadata = coreMetadata(PATH);

const courses = [
  ['Data analysis with Excel & Power BI', 'From messy spreadsheets to automated dashboards for sales, operations, finance or HR teams.', '2–5 days'],
  ['SQL for business teams', 'Query your own databases and stop waiting for IT to extract data.', '2–3 days'],
  ['Python for automation', 'Automate repetitive reporting, file handling and data cleaning tasks.', '3–5 days'],
  ['Modern web development', 'Upskill IT teams on JavaScript, TypeScript, React and Node.js best practices.', '5–10 days'],
  ['UX for digital teams', 'User research, usability testing and prototyping for product, marketing and IT teams.', '2–3 days'],
  ['Digital & AI literacy', 'Practical use of AI assistants, no-code tools and data culture for managers and staff.', '1–2 days'],
];

export default function CorporateTrainingPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Training catalogue</p>
          <h2 className="section-title" id="courses">
            Popular corporate training topics
          </h2>
          <p className="section-intro">Every course can be adapted to your sector, data and tools, and delivered in French or English.</p>
          <div className="grid grid-3">
            {courses.map(([t, d, l]) => (
              <article className="card" key={t}>
                <span className="badge">{l}</span>
                <h3 style={{ marginTop: '0.8rem' }}>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container narrow prose">
          <h2 id="approach">Our approach</h2>
          <ul className="checklist">
            <li>A free needs-analysis call to define objectives and the level of participants</li>
            <li>A tailored program built on your real use cases and, when possible, your own (anonymised) data</li>
            <li>Hands-on sessions: participants spend most of the time practising, not listening</li>
            <li>Delivery on our Agadir campus, at your premises anywhere in Morocco, or online</li>
            <li>Evaluation, attendance sheets and certificates for your HR and training records</li>
          </ul>
          <p>
            Sectors that benefit most in Souss-Massa include tourism and hospitality, agri-food and export, logistics, retail, banking and
            insurance, and public institutions. Learn more about the region in our article on{' '}
            <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link>.
          </p>
          <div className="callout">
            <p>
              <strong>Recruiting at the same time?</strong> Combine training with hiring: meet junior talent through our{' '}
              <Link href="/hiring-partners/">hiring partners program</Link>, or enroll employees in a full{' '}
              <Link href="/programs/data-analytics/">data analytics bootcamp</Link>.
            </p>
          </div>
          <h2 id="request">Request a proposal</h2>
          <p>
            Email <a href={`mailto:${site.email}?subject=Corporate%20training`}>{site.email}</a>, call{' '}
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> or use our <Link href="/contact/">contact form</Link> with the topic, number
            of participants and preferred dates. We reply with a proposal within three working days.
          </p>
          <h2 id="corporate-faq">Corporate training FAQ</h2>
          <Faq
            items={[
              {
                q: 'What is the minimum group size?',
                a: 'Sessions are usually designed for groups of 5 to 15 participants. For smaller teams, we can recommend seats in our open programs.',
              },
              {
                q: 'Can training be delivered at our offices?',
                a: 'Yes. We deliver training in Agadir, across Souss-Massa and in other Moroccan cities, or online.',
              },
              {
                q: 'Do you provide documents for training funding?',
                a: 'We provide quotes, programs, attendance sheets, evaluations and invoices. Ask us which documents you need for your internal or external training funding procedures.',
              },
            ]}
          />
        </div>
      </section>
    </CorePage>
  );
}
