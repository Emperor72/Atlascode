import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { FormNotice } from '@/components/DemoNotice';

const PATH = '/apply/';
export const metadata = coreMetadata(PATH);

export default function ApplyPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container layout-sidebar">
          <form className="form" action={site.formEndpoint} method="POST" aria-labelledby="form-title">
            <h2 id="form-title" className="h4" style={{ margin: 0 }}>
              Your application
            </h2>
            <FormNotice />
            <input type="hidden" name="_subject" value="New application: atlascode website" />
            <div className="field">
              <label htmlFor="a-program">Program</label>
              <select id="a-program" name="program" required defaultValue="">
                <option value="" disabled>
                  Choose a program
                </option>
                <option>Full-Stack Web Development (full-time)</option>
                <option>Part-Time Web Development</option>
                <option>Data Analytics</option>
                <option>UI/UX Design</option>
                <option>Intro to Coding workshop</option>
                <option>Not sure yet: help me choose</option>
              </select>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="a-first">First name</label>
                <input id="a-first" name="first_name" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label htmlFor="a-last">Last name</label>
                <input id="a-last" name="last_name" autoComplete="family-name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="a-email">Email</label>
                <input id="a-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="a-phone">Phone / WhatsApp</label>
                <input id="a-phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="a-country">Country</label>
                <select id="a-country" name="country" autoComplete="country-name" required defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="a-tz">Preferred cohort time zone</label>
                <select id="a-tz" name="timezone" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>{site.timezones.uk}</option>
                  <option>{site.timezones.na}</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="a-city">City</label>
                <input id="a-city" name="city" autoComplete="address-level2" placeholder="London, Manchester, Toronto, New York…" />
              </div>
              <div className="field">
                <label htmlFor="a-age">Age</label>
                <input id="a-age" name="age" type="number" min={16} max={99} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="a-situation">Current situation</label>
              <select id="a-situation" name="situation" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Student</option>
                <option>Recent graduate</option>
                <option>Employed</option>
                <option>Self-employed / freelancer</option>
                <option>Looking for work</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <fieldset>
                <legend>Coding experience</legend>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="experience" value="none" /> None
                  </label>
                  <label>
                    <input type="radio" name="experience" value="some-self-study" /> Some self-study
                  </label>
                  <label>
                    <input type="radio" name="experience" value="studied-it" /> Studied IT
                  </label>
                  <label>
                    <input type="radio" name="experience" value="professional" /> Professional
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="field">
              <label htmlFor="a-why">Why do you want to join Atlas Code?</label>
              <textarea id="a-why" name="motivation" rows={5} required />
              <p className="hint">A few honest sentences are perfect: your goals, what attracts you to tech, your constraints.</p>
            </div>
            <div className="field">
              <label htmlFor="a-financing">How do you plan to finance your training?</label>
              <select id="a-financing" name="financing" defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Pay in full</option>
                <option>Instalments</option>
                <option>Employer sponsorship</option>
                <option>I’d like to apply for a scholarship</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="a-source">How did you hear about us?</label>
              <input id="a-source" name="source" />
            </div>
            <div className="consent">
              <label>
                <input type="checkbox" name="consent" required /> I agree that Atlas Code may process my data to review my application and
                contact me, as described in the privacy policy.
              </label>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit my application
            </button>
          </form>

          <aside className="sidebar">
            <div className="sidebar-box">
              <h2 className="h4">What happens next?</h2>
              <ol>
                <li>An advisor contacts you within two working days</li>
                <li>A 30-minute video call about your goals</li>
                <li>A short admissions challenge</li>
                <li>Decision within 48 hours</li>
              </ol>
              <p>
                <Link href="/admissions/">Read the full admissions process</Link>
              </p>
            </div>
            <div className="sidebar-box">
              <h2 className="h4">Next start dates</h2>
              <ul>
                <li>Full-Stack: {site.programs.fullstack.nextStart}</li>
                <li>Part-Time: {site.programs.parttime.nextStart}</li>
                <li>Data Analytics: {site.programs.data.nextStart}</li>
                <li>UI/UX Design: {site.programs.uxui.nextStart}</li>
              </ul>
              <p>
                <Link href="/upcoming-cohorts/">All cohorts</Link> · <Link href="/tuition-financing/">Tuition</Link>
              </p>
            </div>
            <div className="sidebar-box">
              <h2 className="h4">Questions first?</h2>
              <p>
                Call <a href={`tel:${site.phoneHref}`}>{site.phone}</a> or <Link href="/contact/">send us a message</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </CorePage>
  );
}
