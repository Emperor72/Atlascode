import Link from 'next/link';
import { programs, programInfo } from '@/content/programs';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand, ProgramCard } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/programs/';
export const metadata = coreMetadata(PATH);

export default function ProgramsPage() {
  return (
    <CorePage path={PATH} schemaType="CollectionPage">
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {programs.map(({ meta }) => {
              const info = programInfo(meta.slug);
              return <ProgramCard key={meta.slug} meta={meta} price={info.priceLabel} nextStart={info.nextStart} />;
            })}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="compare">
        <div className="container">
          <p className="eyebrow">Side by side</p>
          <h2 className="section-title" id="compare">
            Compare our bootcamp programs
          </h2>
          <p className="section-intro">
            Every program is taught live online, ends with a portfolio of real projects and includes career services. The
            differences are in focus, rhythm and the roles each one prepares you for.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col">Format</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Key skills</th>
                  <th scope="col">Typical first roles</th>
                  <th scope="col">Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Link href="/programs/full-stack-web-development/">Full-Stack Web Development</Link>
                  </th>
                  <td>Full-time, Mon–Fri</td>
                  <td>12 weeks · ~540 h</td>
                  <td>JavaScript, TypeScript, React, Node.js, PostgreSQL</td>
                  <td>Junior front-end, back-end or full-stack developer</td>
                  <td>{programInfo('full-stack-web-development').priceLabel}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Link href="/programs/part-time-web-development/">Part-Time Web Development</Link>
                  </th>
                  <td>Evenings + Saturdays</td>
                  <td>24 weeks · ~300 h live</td>
                  <td>Same curriculum as full-time</td>
                  <td>Junior web developer, freelance developer</td>
                  <td>{programInfo('part-time-web-development').priceLabel}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Link href="/programs/data-analytics/">Data Analytics</Link>
                  </th>
                  <td>Full-time, Mon–Fri</td>
                  <td>10 weeks · ~400 h</td>
                  <td>Excel, SQL, Python (pandas), Power BI, statistics</td>
                  <td>Junior data analyst, BI or reporting analyst</td>
                  <td>{programInfo('data-analytics').priceLabel}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Link href="/programs/ui-ux-design/">UI/UX Design</Link>
                  </th>
                  <td>Full-time, Mon–Fri</td>
                  <td>8 weeks · ~300 h</td>
                  <td>UX research, Figma, prototyping, design systems</td>
                  <td>Junior UI/UX or product designer</td>
                  <td>{programInfo('ui-ux-design').priceLabel}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <Link href="/programs/intro-to-coding/">Intro to Coding</Link>
                  </th>
                  <td>Two weekends</td>
                  <td>~24 h</td>
                  <td>HTML, CSS, JavaScript basics</td>
                  <td>A first step before a bootcamp</td>
                  <td>{programInfo('intro-to-coding').priceLabel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="choose">
        <div className="container narrow prose">
          <h2 id="choose">How to choose the right program</h2>
          <p>
            Choosing a bootcamp is less about which technology is “best” and more about what you enjoy doing all day. Here is a simple way
            to think about it.
          </p>
          <h3>You like building things people use → Web Development</h3>
          <p>
            If you enjoy seeing an idea become a working website or app, and you like solving puzzles step by step, web development is the
            most versatile choice. It also has the widest range of entry-level jobs, from agencies and startups to in-house teams and remote-first companies.
            Pick the <Link href="/programs/full-stack-web-development/">full-time full-stack bootcamp</Link> if you can commit 12 weeks, or
            the <Link href="/programs/part-time-web-development/">part-time web development program</Link> if you need to keep working.
          </p>
          <h3>You like numbers, patterns and business questions → Data Analytics</h3>
          <p>
            If you are the person who builds the spreadsheet everyone else uses, the{' '}
            <Link href="/programs/data-analytics/">data analytics bootcamp</Link> turns that instinct into a profession. It suits
            profiles from finance, commerce, logistics, tourism and agriculture particularly well.
          </p>
          <h3>You care about how things look and feel → UI/UX Design</h3>
          <p>
            If you notice when an app is confusing and you want to fix it, the <Link href="/programs/ui-ux-design/">UI/UX design bootcamp</Link>{' '}
            teaches research, interface design and prototyping. It needs no coding, but pairs well with it.
          </p>
          <h3>You’re not sure yet → Intro to Coding</h3>
          <p>
            Spend two weekends with us in the <Link href="/programs/intro-to-coding/">Intro to Coding workshop</Link>. You’ll build and
            publish a personal web page, meet instructors and get an honest sense of whether a bootcamp is for you. Your fee is deducted from
            tuition if you enroll later. For a deeper comparison, read <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link>.
          </p>
          <div className="callout">
            <p>
              <strong>Still unsure?</strong> An admissions advisor can help you decide in a free 30-minute call.{' '}
              <Link href="/contact/">Book your call</Link> or check the <Link href="/upcoming-cohorts/">next start dates</Link>.
            </p>
          </div>
          <h2 id="programs-faq">Program FAQ</h2>
          <Faq
            items={[
              {
                q: 'Which Atlas Code program is best for complete beginners?',
                a: 'All bootcamps accept beginners, but if you have never written a line of code, start with the Intro to Coding weekend workshop or the free pre-course material, then join Full-Stack Web Development or Data Analytics.',
              },
              {
                q: 'Do all programs include career services?',
                a: 'Yes. Every bootcamp includes CV and LinkedIn coaching, portfolio reviews, mock interviews and introductions to employers. The Intro to Coding workshop includes an orientation session instead.',
              },
              {
                q: 'Do I get a certificate?',
                a: 'Graduates who complete the projects and attendance requirements receive an Atlas Code certificate of completion. In tech hiring, your portfolio and interview performance usually matter more than the certificate, which is why the programs are project-based.',
              },
              {
                q: 'Can I switch from part-time to full-time?',
                a: 'In some cases, yes, if a seat is available in a matching full-time cohort. Talk to your program manager as early as possible.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Found your program? Let’s talk about your start date." />
    </CorePage>
  );
}
