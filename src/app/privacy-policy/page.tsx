import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';

const PATH = '/privacy-policy/';
export const metadata = coreMetadata(PATH);

/* TODO: have this policy reviewed by a legal professional (UK GDPR representative, CNDP declaration number, US state privacy laws, PIPEDA). */
export default function PrivacyPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container narrow prose">
          <p>
            <em>Last updated: 13 November 2026</em>
          </p>
          <p>
            {site.name} (“we”, “us”) respects your privacy. This policy explains what personal data we collect through this website and our
            admissions process, why we collect it and what rights you have. We serve learners in {site.marketsLabel}, so we handle data in line with the UK
            General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the EU GDPR where it applies, Canada’s PIPEDA,
            applicable US state privacy laws, and Moroccan Law No. 09-08, under which {site.name} is registered with the CNDP.
          </p>
          <h2 id="controller">1. Data controller</h2>
          <p>
            {site.name}, {site.address.street}, {site.address.postalCode} {site.address.city}, Morocco (registered office). Contact:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2 id="data">2. Data we collect</h2>
          <ul>
            <li>
              <strong>Contact and application forms:</strong> name, email, phone number, country, city, preferred time zone, age, current situation, program of interest,
              motivation and financing preferences.
            </li>
            <li>
              <strong>Admissions:</strong> results of the admissions challenge and notes from your conversation with an advisor.
            </li>
            <li>
              <strong>Enrolled students:</strong> identity document, contract and payment information, attendance and progress. Live sessions
              may be recorded for teaching purposes; recordings are shared only with your cohort and staff.
            </li>
            <li>
              <strong>Website usage:</strong> if analytics are enabled, anonymised or pseudonymised usage data (pages visited, device type,
              approximate location).
            </li>
          </ul>
          <h2 id="purposes">3. Why we use your data</h2>
          <ul>
            <li>To answer your questions and process your application (legal basis: steps prior to a contract, or our legitimate interests)</li>
            <li>To manage enrollment, payments, teaching and certificates</li>
            <li>To provide career services, including sharing your profile with employers only with your consent</li>
            <li>To send information about programs and events, if you opted in (you can unsubscribe at any time)</li>
            <li>To improve our website and services</li>
          </ul>
          <h2 id="sharing">4. Who we share data with</h2>
          <p>
            We do not sell your data. We share it only with service providers that help us operate (for example form handling, email,
            hosting and analytics providers), with employers when you have agreed to it, and with authorities when required by law. Because
            we and our providers operate in several countries, your data may be transferred internationally (for example between the UK,
            the US, the EU and Morocco). Where required, we rely on appropriate safeguards such as the UK International Data Transfer
            Addendum or EU Standard Contractual Clauses.
          </p>
          <h2 id="retention">5. How long we keep data</h2>
          <p>
            Applicant data is kept for up to two years after your last contact with us. Student records are kept for the duration required by
            our legal and accounting obligations.
          </p>
          <h2 id="rights">6. Your rights</h2>
          <p>
            Depending on where you live, you have the right to access, correct, delete or export your data, to restrict or object to its
            processing (including for marketing), and to withdraw consent at any time. We do not sell or share your personal information for
            cross-context behavioural advertising. To exercise your rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. You can
            also complain to your data protection authority: the ICO in the UK, the Office of the Privacy Commissioner of Canada, your state
            attorney general in the US, or the CNDP in Morocco.
          </p>
          <h2 id="cookies">7. Cookies</h2>
          <p>
            This website works without advertising cookies. If we enable audience measurement (for example Google Analytics), it is used only
            to understand how the site is used, and, where the law requires it (for example in the UK), it is only enabled with your consent.
          </p>
          <h2 id="changes">8. Changes</h2>
          <p>
            We may update this policy. The date at the top shows the latest version. See also our <Link href="/terms/">terms & conditions</Link>{' '}
            or <Link href="/contact/">contact us</Link> with any question.
          </p>
        </div>
      </section>
    </CorePage>
  );
}
