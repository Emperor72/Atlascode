import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';

const PATH = '/about/';
export const metadata = coreMetadata(PATH);

export default function AboutPage() {
  return (
    <CorePage path={PATH} schemaType="AboutPage">
      <section className="section">
        <div className="container narrow prose">
          <h2 id="mission">Our mission</h2>
          <p>
            Plenty of people want a career in tech, but the usual routes don’t fit them: a degree takes years, and self-teaching from videos
            leaves you alone with every bug. At the same time, companies still struggle to find juniors who can actually ship. {site.name}{' '}
            was created to close that gap.
          </p>
          <p>
            Our mission is simple: <strong>train job-ready tech talent, wherever they live</strong>. We do it through intensive,
            project-based bootcamps taught live online, honest advice and long-term support for every learner in {site.marketsLabel}.
          </p>

          <h2 id="method">How we teach</h2>
          <p>
            We believe you learn to code by coding. Our method is based on active learning: short live explanations, then lots of practice,
            remote pair programming, real projects and frequent feedback. Instructors are practitioners who build software, analyse data or
            design products, and teaching assistants make sure nobody stays stuck for long.
          </p>
          <ul className="checklist">
            <li>
              <strong>Live, not pre-recorded:</strong> real-time classes with a cohort, not a video library.
            </li>
            <li>
              <strong>Project-first:</strong> every concept is applied immediately to something you build.
            </li>
            <li>
              <strong>Small cohorts:</strong> personal attention matters more than lecture-hall scale.
            </li>
            <li>
              <strong>Career-focused:</strong> <Link href="/career-services/">career services</Link> start in week one, not after
              graduation.
            </li>
          </ul>

          <h2 id="values">Our values</h2>
          <div className="grid grid-2">
            <article className="card">
              <h3>Honesty</h3>
              <p>Clear prices, realistic promises and straight answers, including when a bootcamp isn’t the right choice for you.</p>
            </article>
            <article className="card">
              <h3>Inclusion</h3>
              <p>We select on motivation, not diplomas, and actively welcome career changers, parents and people new to tech.</p>
            </article>
            <article className="card">
              <h3>Craft</h3>
              <p>We care about quality: clean code, thoughtful design and rigorous analysis, the things that make juniors stand out.</p>
            </article>
            <article className="card">
              <h3>Community</h3>
              <p>Learners, alumni, instructors and employers help each other. The network lasts long after the bootcamp ends.</p>
            </article>
          </div>

          <h2 id="team">Our team</h2>
          <p>
            Our team brings together instructors from software development, data and design, teaching assistants (often alumni), admissions
            advisors and a career coach. We work remotely, just like many of the teams our graduates join, and you can meet us at a free
            online info session. See <Link href="/online-learning/">how online learning works</Link>.
          </p>

          <h2 id="remote-first">Why remote-first</h2>
          <p>
            Software is built by distributed teams every day. Learning the same way, on video calls, in shared repositories and in written
            chat, means you graduate already comfortable with how modern teams work. It also means you can train from home, without
            relocating, in {site.timezones.uk} or {site.timezones.na}. Read more about{' '}
            <Link href="/blog/remote-developer-jobs-guide/">landing a remote developer job</Link>.
          </p>
          <p>
            Want to know more? Explore our <Link href="/programs/">programs</Link>, read the <Link href="/faq/">FAQ</Link> or{' '}
            <Link href="/contact/">get in touch</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </CorePage>
  );
}
