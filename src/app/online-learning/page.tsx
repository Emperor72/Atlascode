import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/online-learning/';
export const metadata = coreMetadata(PATH);

export default function OnlineLearningPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Live, not pre-recorded</p>
            <h2 className="section-title" id="live-classroom">
              A real classroom, delivered online
            </h2>
            <p>
              {site.name} is not a library of videos you watch alone. Every program runs as a live cohort: you join scheduled sessions with
              an instructor and classmates, you write code together, and teaching assistants are online to unblock you during the day.
            </p>
            <ul className="checklist">
              <li>Live lectures and code-alongs on video, every class day</li>
              <li>Remote pair programming in breakout rooms</li>
              <li>Teaching assistants on call during project time</li>
              <li>Weekly code reviews and 1:1 check-ins with your instructor</li>
              <li>Recordings of key sessions to revisit concepts</li>
              <li>A cohort chat and alumni community that stays open after graduation</li>
            </ul>
          </div>
          <div>
            <dl className="key-facts">
              <div>
                <dt>Format</dt>
                <dd>Live online, small cohorts</dd>
              </div>
              <div>
                <dt>Time zones</dt>
                <dd>
                  Cohorts run in {site.timezones.uk} or {site.timezones.na}
                </dd>
              </div>
              <div>
                <dt>Who it’s for</dt>
                <dd>Learners in {site.marketsLabel}, and anywhere those hours work</dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>English</dd>
              </div>
              <div>
                <dt>Next start</dt>
                <dd>{site.programs.fullstack.nextStart}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow prose">
          <h2 id="time-zones">Two time zones, one curriculum</h2>
          <p>
            Live learning only works if the timetable fits your life, so each cohort is scheduled for one time zone. UK and European
            learners join cohorts that run in {site.timezones.uk}. Learners in the US and Canada join cohorts that run in{' '}
            {site.timezones.na}. If you are on Pacific or Mountain time, an advisor will help you check whether the hours are realistic for
            you.
          </p>
          <p>
            Both tracks follow the same curriculum, the same projects and the same <Link href="/career-services/">career services</Link>.
            See which cohort starts when on the <Link href="/upcoming-cohorts/">upcoming start dates</Link> page.
          </p>

          <h2 id="typical-day">A typical full-time day</h2>
          <p>
            Full-time programs follow a rhythm that mirrors a remote product team. Times below are in your cohort’s time zone.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">What happens</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00</td>
                  <td>Video stand-up: goals and blockers</td>
                </tr>
                <tr>
                  <td>9:15</td>
                  <td>Live lecture and code-along</td>
                </tr>
                <tr>
                  <td>11:00</td>
                  <td>Pair programming in breakout rooms</td>
                </tr>
                <tr>
                  <td>13:00</td>
                  <td>Lunch break (cameras off)</td>
                </tr>
                <tr>
                  <td>14:00</td>
                  <td>Project work with TAs on call</td>
                </tr>
                <tr>
                  <td>16:30</td>
                  <td>Code review and daily recap</td>
                </tr>
                <tr>
                  <td>17:30</td>
                  <td>Optional: career workshop or guest talk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The <Link href="/programs/part-time-web-development/">part-time program</Link> runs on weekday evenings and Saturday mornings
            instead, so you can keep your job.
          </p>

          <h2 id="what-you-need">What you need at home</h2>
          <ul>
            <li>
              <strong>A laptop</strong> you can install software on, ideally with 8 GB of RAM or more and an SSD. Windows, macOS and Linux
              all work.
            </li>
            <li>
              <strong>A stable broadband connection</strong> that handles video calls comfortably.
            </li>
            <li>
              <strong>A headset or earphones with a microphone</strong>, and a webcam (built-in is fine).
            </li>
            <li>
              <strong>A quiet place to work</strong> during live sessions. A second screen helps but is optional.
            </li>
          </ul>
          <p>
            Getting ready? Our guide on <Link href="/blog/how-to-prepare-for-coding-bootcamp/">how to prepare for a coding bootcamp</Link>{' '}
            covers your setup, routine and pre-course work, and{' '}
            <Link href="/blog/online-coding-bootcamp-guide/">our guide to online coding bootcamps</Link> explains how to choose one.
          </p>

          <h2 id="community">Community, online</h2>
          <p>
            Remote doesn’t mean alone. You debug with the same classmates every day, present your work every Friday, and finish with an
            online demo day in front of employers. Between sessions, the cohort chat, study groups, guest talks and alumni meetups keep you
            connected long after graduation.
          </p>
          <div className="callout">
            <p>
              <strong>See it for yourself.</strong> Join a free online info session or try the{' '}
              <Link href="/programs/intro-to-coding/">Intro to Coding workshop</Link>. <Link href="/contact/">Book a call</Link> with an
              advisor to find the right cohort and time zone.
            </p>
          </div>

          <h2 id="online-faq">Online learning FAQ</h2>
          <Faq
            items={[
              {
                q: 'Do I need to live in the UK, the US or Canada to join?',
                a: `No. Cohorts are scheduled in ${site.timezones.uk} or ${site.timezones.na}, so anyone who can attend those hours can join. Your right to work in a given country after the bootcamp is your own responsibility.`,
              },
              {
                q: 'Are classes recorded?',
                a: 'Key lectures are recorded so you can revisit them, but the bootcamp is designed around live attendance. Pair programming, code reviews and team projects only work if you are there.',
              },
              {
                q: 'Do I have to keep my camera on?',
                a: 'We ask for cameras on during stand-ups, pair programming and presentations, because it makes collaboration much easier. Breaks and solo work time are camera-off.',
              },
              {
                q: 'What if I miss a session?',
                a: 'Tell your instructor in advance where possible. You can catch up with recordings and TA support. Regular absences may affect your certificate of completion.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Learn live, from wherever you are" text="Book a free call with an advisor and find the cohort and time zone that fit your life." />
    </CorePage>
  );
}
