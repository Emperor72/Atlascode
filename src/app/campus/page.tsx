import Link from 'next/link';
import { site } from '@/lib/site';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand } from '@/components/Cards';
import { Faq } from '@/components/Faq';

const PATH = '/campus/';
export const metadata = coreMetadata(PATH);

export default function CampusPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">The space</p>
            <h2 className="section-title" id="space">
              A campus designed for focused learning
            </h2>
            <p>
              Learning to code takes long, concentrated hours, so our campus is built for exactly that. Bright classrooms for live lectures,
              project rooms for team work, quiet corners for deep focus, and a lounge for the breaks that keep you going.
            </p>
            <ul className="checklist">
              <li>Classrooms with large screens for live coding</li>
              <li>High-speed fibre internet and reliable Wi-Fi</li>
              <li>Team project rooms and whiteboards</li>
              <li>Kitchen, coffee and a lounge area</li>
              <li>Extended access for students during project weeks</li>
              <li>Events space for talks, meetups and demo day</li>
            </ul>
          </div>
          <div>
            <iframe
              className="map-embed"
              src={mapSrc}
              title={`Map: ${site.name} campus in ${site.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <address className="nap" style={{ marginTop: '1rem' }}>
              <strong>{site.name}</strong>
              <br />
              {site.address.street}, {site.address.postalCode} {site.address.city}, Morocco
              <br />
              {site.hoursText}
            </address>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container narrow prose">
          <h2 id="why-agadir">Why learn to code in Agadir?</h2>
          <p>
            Agadir is the capital of the Souss-Massa region and one of Morocco’s major cities on the Atlantic coast. For learners, it combines
            several advantages that are hard to find together:
          </p>
          <ul>
            <li>
              <strong>A calmer pace of life</strong> than the largest cities, which makes it easier to focus on an intensive program.
            </li>
            <li>
              <strong>A more affordable cost of living</strong> than Casablanca or Rabat for rent, food and transport.
            </li>
            <li>
              <strong>A mild climate all year</strong> and the beach close by, ideal for clearing your head after a long day of debugging.
            </li>
            <li>
              <strong>A growing digital ecosystem</strong> with universities, schools, agencies, startups and companies in tourism,
              agri-food and logistics going digital.
            </li>
            <li>
              <strong>Good connections</strong> to Inezgane, Aït Melloul, Taroudant and Tiznit by road, and to other cities through
              Agadir–Al Massira airport.
            </li>
          </ul>
          <p>
            We wrote a complete guide on the topic: <Link href="/blog/learn-to-code-agadir-guide/">learn to code in Agadir</Link>. It covers
            free resources, meetups and how to choose between self-study, a degree and a bootcamp.
          </p>

          <h2 id="coming-from-outside">Coming from outside Agadir</h2>
          <p>
            Many learners join from other towns in Souss-Massa and beyond. For full-time programs, living in Agadir for the duration of the
            bootcamp makes a big difference, because the days are long and team projects happen on campus.
          </p>
          <h3>Accommodation</h3>
          <p>
            Options include shared flats, studio rentals and family stays. Neighbourhoods such as Talborjt, Dakhla, Hay Mohammadi, Les Amicales
            and the city centre are popular with students. Our team can share tips and connect you with other learners looking for flatmates.
          </p>
          <h3>Getting around</h3>
          <p>
            The city is served by buses, petits taxis and the Amalway BRT line. Ask us for the easiest route from where you live when you
            visit.
          </p>
          <div className="callout">
            <p>
              <strong>Visit before you apply.</strong> Come for a campus tour, sit in on a class or join an info session.{' '}
              <Link href="/contact/">Book a visit</Link> and see the <Link href="/upcoming-cohorts/">upcoming start dates</Link>.
            </p>
          </div>

          <h2 id="community">Student life and community</h2>
          <p>
            Bootcamp friendships are real: you debug together at 6 p.m. and celebrate together at demo day. Beyond class, we host evening
            talks with local professionals, hackathons, study sessions and alumni meetups, all open to students and often to the wider Agadir
            tech community.
          </p>

          <h2 id="campus-faq">Campus FAQ</h2>
          <Faq
            items={[
              {
                q: 'Can I visit the Atlas Code campus before applying?',
                a: 'Yes. Book a visit with an admissions advisor through our contact page or by WhatsApp. You can tour the space and, when possible, sit in on a class.',
              },
              {
                q: 'Do you provide accommodation?',
                a: 'We do not provide accommodation directly, but we share tips on neighbourhoods and help connect learners looking for shared flats.',
              },
              {
                q: 'Is the campus open in the evenings?',
                a: 'Yes. The campus hosts the part-time program in the evenings, and full-time students can stay later during project weeks.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand title="Come and see the campus" text="Book a visit, meet the team and get all your questions answered." />
    </CorePage>
  );
}
