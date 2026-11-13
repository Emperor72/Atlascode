import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { FormNotice } from '@/components/DemoNotice';

const PATH = '/contact/';
export const metadata = coreMetadata(PATH);

export default function ContactPage() {
  return (
    <CorePage path={PATH} schemaType="ContactPage">
      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="section-title" id="reach-us">
              Reach us directly
            </h2>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <strong>WhatsApp</strong>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <strong>Advisor hours</strong>
                {site.hoursText}
              </li>
              <li>
                <strong>Video call</strong>
                Prefer to talk face to face? Use the form to request a free video call. We schedule calls for UK and North American
                time zones.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="section-title" id="message">
              Send us a message
            </h2>
            <form className="form" action={site.formEndpoint} method="POST">
              <FormNotice />
              <input type="hidden" name="_subject" value="Contact form: atlascode website" />
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">Full name</label>
                  <input id="c-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Phone / WhatsApp</label>
                  <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-country">Country</label>
                <select id="c-country" name="country" defaultValue="United Kingdom">
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="c-topic">Topic</label>
                <select id="c-topic" name="topic" defaultValue="Programs">
                  <option>Programs</option>
                  <option>Admissions</option>
                  <option>Tuition & financing</option>
                  <option>Book a video call</option>
                  <option>Hiring graduates</option>
                  <option>Corporate training</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows={5} required />
              </div>
              <div className="consent">
                <label>
                  <input type="checkbox" name="consent" required /> I agree that Atlas Code may use my details to answer my request, as
                  described in the privacy policy.
                </label>
              </div>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
            </form>
            <p style={{ marginTop: '1rem' }}>
              Ready to join? Skip ahead and <Link href="/apply/">start your application</Link>, or read the <Link href="/faq/">FAQ</Link> and
              our <Link href="/privacy-policy/">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </CorePage>
  );
}
