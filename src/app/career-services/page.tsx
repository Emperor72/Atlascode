import Link from 'next/link';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/career-services/';
export const metadata = coreMetadata(PATH);

export default function CareerServicesPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">What’s included</p>
          <h2 className="section-title" id="included">
            Career support built into every program
          </h2>
          <p className="section-intro">
            Technical skills get you an interview; preparation gets you the job. Every Atlas Code bootcamp includes a structured career
            track that runs alongside the curriculum.
          </p>
          <div className="grid grid-3">
            {[
              ['Career strategy session', 'A one-to-one session to define your target roles, sectors and locations: Agadir, other Moroccan cities, remote or freelance.'],
              ['CV & LinkedIn makeover', 'Turn your previous experience into an asset. We review your CV in French and English and optimise your LinkedIn profile for recruiters.'],
              ['GitHub & portfolio coaching', 'Clean repositories, clear READMEs, a deployed portfolio site and case studies that show how you think, not just what you built.'],
              ['Mock technical interviews', 'Practice live coding, SQL or design challenges and behavioural questions with instructors, with detailed feedback.'],
              ['Employer introductions', 'Demo day, company talks on campus and introductions to employers looking for junior profiles that match yours.'],
              ['Alumni support', 'Access to the alumni community, job-board posts and check-ins with the career team after graduation.'],
            ].map(([t, d]) => (
              <article className="card" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title" id="timeline">
            Your career timeline
          </h2>
          <ol className="timeline">
            <li>
              <h3>Weeks 1–2 · Define your target</h3>
              <p>Workshop on the tech job market in Morocco and abroad, then a one-to-one career strategy session.</p>
            </li>
            <li>
              <h3>Mid-program · Build your brand</h3>
              <p>CV, LinkedIn and GitHub reviews; you start sharing your projects publicly and growing your network.</p>
            </li>
            <li>
              <h3>Final weeks · Get interview-ready</h3>
              <p>Mock interviews, salary and freelance-rate negotiation basics, portfolio polish and demo day preparation.</p>
            </li>
            <li>
              <h3>Demo day · Show your work</h3>
              <p>Present your final project to employers, alumni and the local tech community.</p>
            </li>
            <li>
              <h3>After graduation · Active job search</h3>
              <p>Weekly check-ins, job leads, application reviews and interview debriefs while you search.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2 id="paths">Career paths after the bootcamp</h2>
          <p>Our graduates prepare for several kinds of first roles. Each one has its own strategy, and we help you choose:</p>
          <h3>Local employment in Agadir and Souss-Massa</h3>
          <p>
            Web agencies, digital marketing firms, tourism and hospitality groups, agri-food and export companies, and public and private
            organisations increasingly need web, data and design skills. Our guide to{' '}
            <Link href="/blog/tech-jobs-agadir-souss-massa/">tech jobs in Agadir and Souss-Massa</Link> explains where to look.
          </p>
          <h3>Offshoring, nearshoring and national employers</h3>
          <p>
            Morocco has an established offshoring and IT services sector serving French-speaking and European clients, with many positions in
            Casablanca, Rabat and other hubs, some of them hybrid or remote.
          </p>
          <h3>Remote and international roles</h3>
          <p>
            Your skills and English let you apply to remote-first companies. It’s competitive for juniors, so we help you build a standout
            portfolio. Read <Link href="/blog/remote-developer-jobs-from-morocco/">remote developer jobs from Morocco</Link>.
          </p>
          <h3>Freelance</h3>
          <p>
            Some graduates start by freelancing for local businesses. We cover finding clients, quoting, contracts and the basics of
            freelance status in Morocco.
          </p>
          <div className="callout">
            <p>
              <strong>Our honest position:</strong> no bootcamp can guarantee you a job, and you should be careful with any that does. What
              we guarantee is the support: structured coaching, real projects and our network, for as long as you are actively searching.
            </p>
          </div>
          <h2 id="career-faq">Career services FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do you guarantee a job after the bootcamp?',
                a: 'No. Job outcomes depend on the market, your effort and your choices. We commit to providing structured career support during the program and while you are actively searching after graduation.',
              },
              {
                q: 'Is career support available in French?',
                a: 'Yes. Many employers in Morocco recruit in French, so we help you prepare CVs and interviews in French and English.',
              },
              {
                q: 'Can I work as a freelancer after the bootcamp?',
                a: 'Yes. Several modules cover freelancing basics, from finding first clients and pricing to contracts and status. We recommend getting advice from an accountant for tax questions.',
              },
              {
                q: 'How do employers connect with graduates?',
                a: 'Through demo day, company talks, job postings shared with our community and direct introductions. Employers can join for free via our hiring partners page.',
              },
            ]}
          />
          <p>
            Ready to start? Explore our <Link href="/programs/">bootcamp programs</Link> or read{' '}
            <Link href="/blog/how-to-become-web-developer-morocco/">how to become a web developer in Morocco</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </CorePage>
  );
}
