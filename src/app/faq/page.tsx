import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/seo';
import type { FaqItem } from '@/lib/types';

const PATH = '/faq/';
export const metadata = coreMetadata(PATH);

const groups: { id: string; title: string; items: FaqItem[] }[] = [
  {
    id: 'general',
    title: 'About the bootcamp',
    items: [
      {
        q: 'What is a coding bootcamp?',
        a: 'A coding bootcamp is a short, intensive training program, usually 8 to 24 weeks, that teaches the practical skills needed for an entry-level tech job through projects rather than theory-heavy courses.',
      },
      {
        q: 'Where is Atlas Code located?',
        a: `Atlas Code is located in ${site.address.city}, in the Souss-Massa region of Morocco. All bootcamps are taught in person on our campus.`,
      },
      {
        q: 'Which programs does Atlas Code offer?',
        a: 'Full-Stack Web Development (full-time, 12 weeks), Part-Time Web Development (24 weeks), Data Analytics (10 weeks), UI/UX Design (8 weeks) and a beginner Intro to Coding weekend workshop, plus corporate training for companies.',
      },
      {
        q: 'Are classes online or in person?',
        a: 'Classes take place in person on our Agadir campus. The part-time program can include some online sessions, and all learners get access to online resources and recordings of key sessions.',
      },
      {
        q: 'What language are classes taught in?',
        a: 'Classes are taught in English, with French and Darija support from instructors and teaching assistants.',
      },
    ],
  },
  {
    id: 'admissions',
    title: 'Admissions & prerequisites',
    items: [
      {
        q: 'Do I need a degree to join?',
        a: 'No. We select on motivation and problem-solving ability, not diplomas. You must be at least 18 years old.',
      },
      {
        q: 'Do I need to know how to code before applying?',
        a: 'No. Our bootcamps start from the fundamentals and include pre-course work. If you want a first taste, join the Intro to Coding workshop.',
      },
      {
        q: 'Am I too old to learn to code?',
        a: 'No. Many people successfully switch to tech in their thirties, forties and beyond. Previous professional experience is often an advantage.',
      },
      {
        q: 'What laptop do I need?',
        a: 'A laptop you can install software on, ideally with 8 GB of RAM or more and an SSD. Windows, macOS and Linux all work.',
      },
      {
        q: 'How long does the admissions process take?',
        a: 'Usually one to two weeks: online application, advisor conversation, admissions challenge and a decision within 48 hours.',
      },
    ],
  },
  {
    id: 'tuition',
    title: 'Tuition & financing',
    items: [
      {
        q: 'How much does the bootcamp cost?',
        a: `Full-Stack Web Development costs ${site.programs.fullstack.priceLabel}, Part-Time Web Development ${site.programs.parttime.priceLabel}, Data Analytics ${site.programs.data.priceLabel}, UI/UX Design ${site.programs.uxui.priceLabel} and the Intro to Coding workshop ${site.programs.intro.priceLabel}.`,
      },
      {
        q: 'Can I pay in instalments?',
        a: `Yes. After a ${site.deposit} deposit, you can spread the remaining tuition over interest-free monthly instalments.`,
      },
      {
        q: 'Are there scholarships?',
        a: 'Yes. A limited number of partial, need-based scholarships are available each cohort. Mention your interest in your application.',
      },
      {
        q: 'Can my company pay for my training?',
        a: 'Yes. We issue quotes and invoices to companies and can provide attendance reports.',
      },
    ],
  },
  {
    id: 'during',
    title: 'During the program',
    items: [
      {
        q: 'How many hours per week should I expect?',
        a: 'Full-time programs require about 45 to 50 hours per week including homework. The part-time program requires about 15 to 20 hours per week.',
      },
      {
        q: 'Can I work while doing the full-time bootcamp?',
        a: 'We strongly advise against it. The full-time pace is intense. If you need to keep working, choose the Part-Time Web Development program.',
      },
      {
        q: 'What happens if I fall behind?',
        a: 'Teaching assistants and instructors offer extra support sessions. In exceptional situations you may be able to move to a later cohort.',
      },
      {
        q: 'Do I receive a certificate?',
        a: 'Yes. Learners who complete the projects and attendance requirements receive an Atlas Code certificate of completion.',
      },
    ],
  },
  {
    id: 'careers',
    title: 'Careers',
    items: [
      {
        q: 'Will Atlas Code help me find a job?',
        a: 'Yes. Career services are included: CV and LinkedIn reviews, portfolio coaching, mock interviews and introductions to employers. We do not guarantee a job, but we support you actively during and after the program.',
      },
      {
        q: 'Can I work remotely for foreign companies after the bootcamp?',
        a: 'It is possible but competitive for juniors. A strong portfolio, good English and some local experience help a lot. We cover remote job strategies in career services.',
      },
      {
        q: 'Can I become a freelancer?',
        a: 'Yes. Many graduates take freelance missions, especially in web development. We cover finding clients, pricing and contracts.',
      },
    ],
  },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <CorePage path={PATH}>
      <JsonLd data={faqSchema(all)} />
      <section className="section">
        <div className="container narrow">
          <nav className="toc" aria-label="On this page">
            <p className="toc-title">Jump to a topic</p>
            <ol>
              {groups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`}>{g.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          {groups.map((g) => (
            <div key={g.id} style={{ marginBottom: '2.5rem' }}>
              <h2 id={g.id}>{g.title}</h2>
              <Faq items={g.items} schema={false} />
            </div>
          ))}
          <div className="callout">
            <p>
              <strong>Didn’t find your answer?</strong> <Link href="/contact/">Contact an advisor</Link>, or read more on{' '}
              <Link href="/admissions/">admissions</Link>, <Link href="/tuition-financing/">tuition</Link> and{' '}
              <Link href="/career-services/">career services</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </CorePage>
  );
}
