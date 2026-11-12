import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';

const PATH = '/privacy-policy/';
export const metadata = coreMetadata(PATH);

/* TODO: have this policy reviewed by a legal professional and complete the CNDP declaration number. */
export default function PrivacyPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container narrow prose">
          <p>
            <em>Last updated: 12 November 2026</em>
          </p>
          <p>
            {site.name} (“we”, “us”) respects your privacy. This policy explains what personal data we collect through this website and our
            admissions process, why we collect it and what rights you have, in accordance with Moroccan Law No. 09-08 on the protection of
            individuals with regard to the processing of personal data, under the supervision of the CNDP (Commission Nationale de contrôle
            de la protection des Données à caractère Personnel).
          </p>
          <h2 id="controller">1. Data controller</h2>
          <p>
            {site.name}, {site.address.street}, {site.address.postalCode} {site.address.city}, Morocco. Contact:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2 id="data">2. Data we collect</h2>
          <ul>
            <li>
              <strong>Contact and application forms:</strong> name, email, phone number, city, age, current situation, program of interest,
              motivation and financing preferences.
            </li>
            <li>
              <strong>Admissions:</strong> results of the admissions challenge and notes from your conversation with an advisor.
            </li>
            <li>
              <strong>Enrolled students:</strong> identity document, contract and payment information, attendance and progress.
            </li>
            <li>
              <strong>Website usage:</strong> if analytics are enabled, anonymised or pseudonymised usage data (pages visited, device type,
              approximate location).
            </li>
          </ul>
          <h2 id="purposes">3. Why we use your data</h2>
          <ul>
            <li>To answer your questions and process your application</li>
            <li>To manage enrollment, payments, teaching and certificates</li>
            <li>To provide career services, including sharing your profile with employers only with your consent</li>
            <li>To send information about programs and events, if you opted in (you can unsubscribe at any time)</li>
            <li>To improve our website and services</li>
          </ul>
          <h2 id="sharing">4. Who we share data with</h2>
          <p>
            We do not sell your data. We share it only with service providers that help us operate (for example form handling, email,
            hosting and analytics providers), with employers when you have agreed to it, and with authorities when required by law. Some
            providers may store data outside Morocco; in that case we take steps required by Law 09-08 to ensure adequate protection.
          </p>
          <h2 id="retention">5. How long we keep data</h2>
          <p>
            Applicant data is kept for up to two years after your last contact with us. Student records are kept for the duration required by
            our legal and accounting obligations.
          </p>
          <h2 id="rights">6. Your rights</h2>
          <p>
            You have the right to access, rectify and delete your data, and to object to its processing for legitimate reasons, including
            marketing. To exercise your rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. You may also contact the CNDP.
          </p>
          <h2 id="cookies">7. Cookies</h2>
          <p>
            This website works without advertising cookies. If we enable audience measurement (for example Google Analytics), it is used only
            to understand how the site is used, and you can refuse it via your browser settings.
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
