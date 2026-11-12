import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';

const PATH = '/terms/';
export const metadata = coreMetadata(PATH);

/* TODO: replace with terms reviewed by a legal professional (refund percentages, company registration details, ICE/RC numbers). */
export default function TermsPage() {
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container narrow prose">
          <p>
            <em>Last updated: 12 November 2026</em>
          </p>
          <p>
            These terms govern your use of the {site.name} website and enrollment in our programs. Your individual enrollment contract takes
            precedence over this page where they differ.
          </p>
          <h2 id="enrollment">1. Enrollment</h2>
          <p>
            Enrollment is confirmed once you have been admitted through our <Link href="/admissions/">admissions process</Link>, signed the
            enrollment contract and paid the deposit of {site.deposit}. Seats are allocated in order of confirmed enrollment.
          </p>
          <h2 id="payment">2. Tuition and payment</h2>
          <p>
            Tuition amounts are listed on our <Link href="/tuition-financing/">tuition & financing page</Link> and in your contract. Instalment
            plans follow the schedule agreed in writing. Late payments may lead to suspension of access to the program after written notice.
          </p>
          <h2 id="cancellation">3. Withdrawal, cancellation and refunds</h2>
          <ul>
            <li>
              <strong>Before the program starts:</strong> you may withdraw in writing; amounts paid are refunded according to the conditions in
              your contract, minus any non-refundable portion specified there.
            </li>
            <li>
              <strong>After the program starts:</strong> refunds, if any, are calculated on a prorated basis as described in your contract.
            </li>
            <li>
              <strong>If {site.name} cancels or postpones a cohort:</strong> you can transfer to another cohort or receive a full refund of
              amounts paid.
            </li>
          </ul>
          <h2 id="conduct">4. Student commitments</h2>
          <p>
            Students commit to attending sessions, respecting fellow learners and staff, using campus equipment responsibly and submitting
            original work. Serious or repeated breaches may lead to exclusion.
          </p>
          <h2 id="certificate">5. Certificate</h2>
          <p>
            A certificate of completion is awarded to learners who meet the attendance and project requirements of their program. It is a
            private training certificate.
          </p>
          <h2 id="ip">6. Intellectual property</h2>
          <p>
            Course material remains the property of {site.name} and is provided for personal learning use. Students own the code and designs
            they create for their personal projects. Projects built for a partner company may be subject to a specific agreement.
          </p>
          <h2 id="website">7. Website</h2>
          <p>
            We take care to keep information on this website accurate, but program details, dates and prices may change. The information in
            your contract prevails.
          </p>
          <h2 id="law">8. Applicable law</h2>
          <p>
            These terms are governed by Moroccan law. Disputes will first be addressed amicably; failing that, the competent courts of{' '}
            {site.address.city} have jurisdiction.
          </p>
          <p>
            Questions? <Link href="/contact/">Contact us</Link> or read our <Link href="/privacy-policy/">privacy policy</Link>.
          </p>
        </div>
      </section>
    </CorePage>
  );
}
