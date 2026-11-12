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
            Every year, talented young people from Agadir and Souss-Massa leave the region to find opportunities in tech, or never get the
            chance to try. At the same time, local companies struggle to recruit developers, data analysts and designers. {site.name} was
            created to connect those two realities.
          </p>
          <p>
            Our mission is simple: <strong>train job-ready tech talent in Agadir, for Morocco and the world</strong>. We do it through
            intensive, project-based bootcamps, honest advice and long-term support for every learner.
          </p>

          <h2 id="method">How we teach</h2>
          <p>
            We believe you learn to code by coding. Our method is based on active learning: short live explanations, then lots of practice,
            pair programming, real projects and frequent feedback. Instructors are practitioners who build software, analyse data or design
            products, and teaching assistants make sure nobody stays stuck for long.
          </p>
          <ul className="checklist">
            <li>
              <strong>Project-first:</strong> every concept is applied immediately to something you build.
            </li>
            <li>
              <strong>Small cohorts:</strong> personal attention matters more than lecture-hall scale.
            </li>
            <li>
              <strong>Market-driven:</strong> our curricula are reviewed every cohort with input from employers.
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
              <p>We select on motivation, not diplomas, and actively encourage women and learners from rural areas to join tech.</p>
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
            advisors and a career coach. Come meet them at an info session or <Link href="/campus/">on campus</Link>.
          </p>

          <h2 id="agadir">Why Agadir</h2>
          <p>
            We chose Agadir because we believe tech talent should be able to grow where it lives. The region has universities, a dynamic
            economy and a quality of life that makes it a great place to learn, and increasingly to work remotely for companies anywhere.
            Read more in our <Link href="/blog/tech-jobs-agadir-souss-massa/">overview of tech jobs in Souss-Massa</Link>.
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
