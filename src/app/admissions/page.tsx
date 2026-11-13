import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { HeroActions } from '@/components/PageHero';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/admissions/';
export const metadata = coreMetadata(PATH);

export default function AdmissionsPage() {
  return (
    <CorePage path={PATH} heroExtra={<HeroActions />}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2 className="section-title" id="process">
            Five steps from application to your first day
          </h2>
          <p className="section-intro">
            Most applicants complete admissions in one to two weeks. Each step helps both of us check that the bootcamp is the right fit, so
            you start with confidence.
          </p>
          <ol className="timeline">
            <li>
              <h3>1 · Submit your application (5 minutes)</h3>
              <p>
                Fill in the <Link href="/apply/">online application form</Link>: your background, the program you are interested in, and
                why you want to learn. There is no fee and no commitment. Be honest rather than impressive; we are interested in your
                motivation.
              </p>
            </li>
            <li>
              <h3>2 · Talk with an admissions advisor (30 minutes)</h3>
              <p>
                Within two working days, an advisor contacts you to schedule a video call at a time that suits your time zone. We discuss your goals,
                your availability, the program that fits you best and how tuition and financing work. It’s a conversation, not an
                interview, so bring your questions.
              </p>
            </li>
            <li>
              <h3>3 · Complete the admissions challenge (1–3 hours)</h3>
              <p>
                You receive a short online challenge adapted to your program: logic puzzles and a guided beginner exercise for web
                development, a spreadsheet and reasoning task for data analytics, or a small design critique for UI/UX. No prior experience
                is expected. We look at how you approach problems, not whether you already know the answer. Free prep material is provided.
              </p>
            </li>
            <li>
              <h3>4 · Receive your decision (48 hours)</h3>
              <p>
                We review your challenge and conversation and reply within 48 hours. If it isn’t the right moment, we tell you why and
                suggest what to work on, often the <Link href="/programs/intro-to-coding/">Intro to Coding workshop</Link> or specific
                free resources, so you can reapply for a later cohort.
              </p>
            </li>
            <li>
              <h3>5 · Secure your seat and start the pre-course</h3>
              <p>
                Confirm your place with a deposit of {site.deposit} (deducted from tuition) and choose your{' '}
                <Link href="/tuition-financing/">payment plan</Link>. You then get access to roughly 30–40 hours of online pre-course
                work so that everyone arrives on day one with the same foundations.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section alt" aria-labelledby="look-for">
        <div className="container split">
          <div>
            <p className="eyebrow">Selection criteria</p>
            <h2 className="section-title" id="look-for">
              What we look for (and what we don’t)
            </h2>
            <p>
              A bootcamp is intense. The people who succeed are rarely the ones with the most impressive CV. They are the ones who stay
              curious, ask for help and keep going. That is what our admissions process tries to detect.
            </p>
            <ul className="checklist">
              <li>Clear motivation: you know why you want to work in tech</li>
              <li>Logical thinking and willingness to break problems down</li>
              <li>Availability for the full schedule, including homework time</li>
              <li>Basic computer skills and comfort with reading English</li>
              <li>Openness to feedback and to working in teams</li>
            </ul>
          </div>
          <div className="card">
            <h3>What you do not need</h3>
            <ul className="checklist">
              <li>A computer science degree, or any degree</li>
              <li>Previous coding experience</li>
              <li>Advanced maths</li>
              <li>Perfect English; clear, everyday English is enough</li>
              <li>To be under a certain age; we welcome career changers of all ages</li>
            </ul>
            <p>
              Worried about your age or background? Read <Link href="/blog/career-change-to-tech-after-30/">switching to tech after 30</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="requirements">
        <div className="container narrow prose">
          <h2 id="requirements">Practical requirements</h2>
          <h3>Age and documents</h3>
          <p>
            Applicants must be at least 18 years old at the start of the program. To enroll you will need a copy of a government-issued photo ID
            (passport, driving licence or national ID card). Diplomas are not required.
          </p>
          <h3>Laptop and home setup</h3>
          <p>
            You need a laptop you can install software on: ideally 8 GB RAM or more, and an SSD. For web development and data analytics, a
            recent Windows, macOS or Linux laptop works. For UI/UX design, any laptop that runs Figma in the browser smoothly is enough. Because classes are
            live online, you also need a stable broadband connection, a webcam and a headset with a microphone. See{' '}
            <Link href="/online-learning/">how online learning works</Link>.
          </p>
          <h3>Time commitment</h3>
          <p>
            Full-time programs require about 45–50 hours per week including homework, so plan to pause other work. The{' '}
            <Link href="/programs/part-time-web-development/">part-time program</Link> requires about 15–20 hours per week including
            self-study.
          </p>
          <h3>Language</h3>
          <p>
            Classes are taught in English, and so are documentation and most technical resources. You need to follow live sessions and
            take part in discussions, but you don’t need to be a native speaker.
          </p>
          <div className="callout">
            <p>
              <strong>Tip:</strong> the best way to prepare is to start small and consistently. Follow our{' '}
              <Link href="/blog/how-to-prepare-for-coding-bootcamp/">30-day plan to prepare for a coding bootcamp</Link>.
            </p>
          </div>
          <h3>Deadlines</h3>
          <p>
            We review applications on a rolling basis until each cohort is full. Applying at least four to six weeks before your chosen{' '}
            <Link href="/upcoming-cohorts/">start date</Link> gives you time for the challenge, financing and pre-course work, and
            early-bird pricing.
          </p>

          <h2 id="admissions-faq">Admissions FAQ</h2>
          <Faq
            items={[
              {
                q: 'Is there an application fee?',
                a: 'No. Applying, the advisor conversation and the admissions challenge are all free and non-binding.',
              },
              {
                q: 'What happens if I fail the admissions challenge?',
                a: 'You get feedback and a list of resources, and you can retake the challenge for a later cohort. Many successful students were not accepted on their first try.',
              },
              {
                q: 'Can I apply from anywhere?',
                a: 'Yes. Programs are taught live online for learners in the UK, the US and Canada. Each cohort runs in UK time or US Eastern Time, so you need to be able to attend live sessions in your cohort’s hours.',
              },
              {
                q: 'How many seats are there per cohort?',
                a: 'Cohorts are deliberately small so that every learner gets personal attention from instructors and teaching assistants. Seats are allocated in order of completed admissions.',
              },
              {
                q: 'Can my employer pay for my bootcamp?',
                a: 'Yes. We can issue quotes and invoices to companies. See our tuition and financing page or contact us about corporate training.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Ready for step one?" text="The application takes five minutes. An advisor will contact you within two working days." />
    </CorePage>
  );
}
