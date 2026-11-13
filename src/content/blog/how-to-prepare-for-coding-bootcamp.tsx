import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { PostMeta } from '@/lib/types';

export const meta: PostMeta = {
  slug: 'how-to-prepare-for-coding-bootcamp',
  title: 'Online Coding Bootcamp Prep: A 30-Day Plan | Atlas Code',
  description:
    'How to prepare for a live online coding bootcamp in 30 days: a week-by-week plan for HTML, CSS, JavaScript and Git, plus home setup, time zones and routine.',
  h1: 'How to Prepare for an Online Coding Bootcamp: A 30-Day Plan',
  lead: 'The month before a live online bootcamp shapes how the next three months feel. Follow this day-by-day plan to arrive with the basics in place, a home setup that works on camera, and habits that make intensive learning sustainable.',
  crumb: 'Prepare for a Coding Bootcamp',
  date: '2026-09-23',
  modified: '2026-11-13',
  category: 'Learning',
  readTime: '10 min read',
  related: [
    '/programs/intro-to-coding/',
    '/online-learning/',
    '/blog/online-coding-bootcamp-guide/',
    '/blog/javascript-vs-python-beginners/',
  ],
};

const faq = [
  {
    q: 'Do I need to know how to code before joining a bootcamp?',
    a: 'Most beginner-friendly bootcamps don’t require prior experience, but some preparation makes the first weeks much smoother. Following a plan like this one, or joining a short introductory workshop, is usually enough.',
  },
  {
    q: 'How many hours a day should I study before a bootcamp?',
    a: 'About 60 to 90 minutes a day, five or six days a week, is a realistic target alongside work or studies. Consistency matters more than long sessions: one focused hour every day beats a seven-hour session once a week.',
  },
  {
    q: 'What if I fall behind on the 30-day plan?',
    a: 'Don’t skip ahead to catch up. Continue from where you are and shorten the final project if needed. Arriving with solid HTML, CSS and basic JavaScript is far better than arriving with a shaky grasp of everything.',
  },
  {
    q: 'What equipment do I need for a live online bootcamp?',
    a: 'A laptop that runs a modern browser, a code editor and a video call smoothly, a stable broadband connection, a headset with a microphone and a webcam. A second screen is a big comfort but not essential. Check your program’s requirements before buying anything new.',
  },
  {
    q: 'Is maths important for web development?',
    a: 'Basic arithmetic and logical thinking are enough for most web development. Problem-solving matters more than advanced maths, and it improves with practice.',
  },
];

export default function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="layout-sidebar">
            <div className="prose">
              <nav className="toc" aria-label="On this page">
                <p className="toc-title">On this page</p>
                <ol>
                  <li><a href="#why-prepare">Why the month before matters</a></li>
                  <li><a href="#overview">The plan at a glance</a></li>
                  <li><a href="#day-zero">Day 0: set up your tools, space and schedule</a></li>
                  <li><a href="#week-1">Week 1: how the web works and HTML</a></li>
                  <li><a href="#week-2">Week 2: CSS and layout</a></li>
                  <li><a href="#week-3">Week 3: JavaScript fundamentals</a></li>
                  <li><a href="#week-4">Week 4: the DOM, Git and a mini project</a></li>
                  <li><a href="#beyond-code">Preparing beyond the code</a></li>
                  <li><a href="#mistakes">Mistakes to avoid</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ol>
              </nav>

              <p>You have been accepted, or you are about to apply, and the start date is a few weeks away. It is tempting to relax until day one, or the opposite: to panic and try to learn everything at once. Neither works well. The best preparation is steady, modest and practical: an hour or two a day, focused on the foundations every web bootcamp builds on.</p>
              <p>This 30-day plan is designed for complete beginners and for people who have tried a few tutorials but never finished one. It assumes about 60 to 90 minutes a day, five or six days a week. If you have more time, go deeper on each topic rather than rushing ahead.</p>

              <h2 id="why-prepare">Why the month before matters</h2>
              <p>A bootcamp moves fast. New concepts arrive daily, and each one builds on the last. Students who arrive with the basics in place spend their energy on the hard parts (problem-solving, debugging, teamwork) rather than on remembering what a <code>&lt;div&gt;</code> is or how to save a file in the right folder.</p>
              <p>Preparation also gives you something less obvious: proof that you can keep a daily routine. Learning to code is a habit before it is a talent. If you can study for an hour a day for a month while working, studying or caring for family, you can handle the rhythm of a full bootcamp.</p>
              <p>A live online bootcamp adds one more reason to prepare: you are building your own classroom at home. The month before is the time to test your equipment, your internet connection and your daily routine, so day one is about learning, not troubleshooting your microphone.</p>
              <p>Not sure yet whether an intensive program is the right route for you? Compare the options in our article on <Link href="/blog/coding-bootcamp-vs-university-degree/">coding bootcamps vs a university degree</Link> before you commit.</p>

              <div className="callout"><p><strong>Starting from zero?</strong> Our <Link href="/programs/intro-to-coding/">Intro to Coding weekend workshop</Link> is a gentle, instructor-led way to begin this plan. You write your first HTML, CSS and JavaScript live online with an instructor on hand, then continue with weeks 2 to 4 on your own. Workshops run {site.programs.intro.nextStart}.</p></div>

              <h2 id="overview">The plan at a glance</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Week</th><th>Focus</th><th>By the end you can…</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Day 0</td><td>Tools, home setup and schedule</td><td>Open a project in a code editor, view it in a browser and join a video call with clear sound</td></tr>
                    <tr><td>Week 1</td><td>How the web works, HTML</td><td>Write a structured, multi-page website with links and images</td></tr>
                    <tr><td>Week 2</td><td>CSS and layout</td><td>Style a page with Flexbox and make it work on a phone</td></tr>
                    <tr><td>Week 3</td><td>JavaScript fundamentals</td><td>Use variables, conditions, loops, functions, arrays and objects</td></tr>
                    <tr><td>Week 4</td><td>DOM, Git, mini project</td><td>Build a small interactive page and publish it on GitHub</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Why HTML, CSS and JavaScript rather than Python? Because most web bootcamps start there, and because seeing results in the browser keeps beginners motivated. If you are heading towards data rather than the web, read <Link href="/blog/javascript-vs-python-beginners/">JavaScript vs Python for beginners</Link> and adapt weeks 3 and 4 to the language your program uses.</p>

              <h2 id="day-zero">Day 0: set up your tools, space and schedule</h2>
              <p>Spend your first session preparing the environment, so every following day starts with learning, not installing.</p>
              <ul>
                <li><strong>Laptop:</strong> you don’t need an expensive machine. A laptop that runs a modern browser, a code editor and a video call at the same time, with enough memory to keep several tabs open, is enough to start. Check your program’s requirements before buying anything new.</li>
                <li><strong>Audio and video:</strong> a headset with a microphone makes a bigger difference than a fancy webcam. Your built-in camera is usually fine; put a light in front of you rather than behind.</li>
                <li><strong>Internet:</strong> run a speed test at the time of day your classes will happen, and know your backup (a phone hotspot works) for the day your broadband drops.</li>
                <li><strong>Study space:</strong> pick one spot you can use every day, with a proper chair and a door or at least a quiet corner. A second monitor, even an old one, makes following along while coding much easier.</li>
                <li><strong>Code editor:</strong> install Visual Studio Code, a free and widely used editor. Add the “Live Server” extension so pages refresh automatically when you save.</li>
                <li><strong>Browser:</strong> use Chrome or Firefox and learn to open the developer tools (F12 or right-click → Inspect). You will use them every day.</li>
                <li><strong>Folders:</strong> create one folder called <code>coding</code> with a subfolder for each week. Messy files cause more beginner frustration than most people expect.</li>
                <li><strong>Accounts:</strong> create a GitHub account with a professional username. Your future employers may see it.</li>
                <li><strong>Schedule:</strong> choose a fixed daily time slot and protect it. Early morning before work or after the children are asleep both work; “whenever I have time” does not. If you can, practise at the same hours your live classes will run.</li>
              </ul>

              <h2 id="week-1">Week 1: how the web works and HTML</h2>
              <p>The goal this week is to understand what happens when you open a website and to write the structure of web pages confidently.</p>
              <h3>Days 1–2: the big picture</h3>
              <p>Learn the basic vocabulary: browser, server, URL, domain, HTTP request, front end and back end. You don’t need depth yet, just a mental map. Then create your first <code>index.html</code> file, type the basic document structure by hand (not copy-paste), and open it in your browser.</p>
              <h3>Days 3–5: core HTML elements</h3>
              <p>Practise headings, paragraphs, lists, links, images, tables and forms. Understand the difference between block and inline elements. Learn why semantic tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> and <code>&lt;footer&gt;</code> matter for accessibility and search engines.</p>
              <h3>Days 6–7: your first project</h3>
              <p>Build a three-page website about something you know well: your neighbourhood, your favourite walk or park, a family recipe, or a local business. Link the pages together and include at least one image and one form. It will look plain. That is fine; next week you make it beautiful.</p>

              <h2 id="week-2">Week 2: CSS and layout</h2>
              <p>CSS controls how pages look. This week you learn to style your project and, most importantly, to control layout.</p>
              <h3>Days 8–9: selectors, colours and typography</h3>
              <p>Link a stylesheet to your HTML. Learn element, class and ID selectors, colours, fonts, and units such as <code>px</code>, <code>rem</code> and <code>%</code>. Use the browser’s developer tools to inspect and change styles live.</p>
              <h3>Days 10–11: the box model</h3>
              <p>Understand margin, border, padding and content. Most layout problems beginners face are box-model problems in disguise. Set <code>box-sizing: border-box</code> and see what changes.</p>
              <h3>Days 12–14: Flexbox and responsive design</h3>
              <p>Learn Flexbox to align items in rows and columns, then use media queries so your site works on a phone. Most of your future users will visit on mobile, so test on your own phone. Finish the week by restyling your week 1 project into something you would be proud to show a friend.</p>

              <h2 id="week-3">Week 3: JavaScript fundamentals</h2>
              <p>This is the most important and most challenging week. Go slowly and type every example yourself.</p>
              <h3>Days 15–16: variables, types and operators</h3>
              <p>Learn <code>let</code> and <code>const</code>, strings, numbers, booleans, and basic operators. Use the browser console to experiment. Practise reading error messages instead of fearing them.</p>
              <h3>Days 17–18: conditions and loops</h3>
              <p>Write <code>if</code>/<code>else</code> statements and <code>for</code> loops. Solve small exercises: print the numbers 1 to 100, replace multiples of 3 with a word, count the vowels in a sentence.</p>
              <h3>Days 19–21: functions, arrays and objects</h3>
              <p>Functions let you reuse logic; arrays and objects let you organise data. Write a function that converts pounds to dollars using a fixed rate you choose, then one that calculates the average of an array of exam marks. Represent a student as an object with a name, a city and a list of marks.</p>

              <div className="callout"><p><strong>When you get stuck:</strong> set a 20-minute rule. Try alone for 20 minutes, writing down what you tried. If you are still stuck, search for the error message, then ask for help with a clear description. This is exactly how professional developers work.</p></div>

              <h2 id="week-4">Week 4: the DOM, Git and a mini project</h2>
              <p>The final week connects everything: JavaScript that changes your HTML and CSS, saved and shared with Git.</p>
              <h3>Days 22–24: the DOM and events</h3>
              <p>Learn to select elements with <code>document.querySelector</code>, change their text and classes, and react to clicks and form submissions with event listeners. Build tiny exercises: a button that toggles dark mode, a counter, a form that shows a message when a field is empty.</p>
              <h3>Days 25–26: Git and GitHub</h3>
              <p>Learn the basic workflow: <code>git init</code>, <code>git add</code>, <code>git commit</code>, and pushing to GitHub. Publish your week 2 website with GitHub Pages so it has a real URL you can share.</p>
              <h3>Days 27–30: your mini project and review</h3>
              <p>Build one small interactive project from scratch: a to-do list, a quiz about capital cities, or a tip and bill-splitting calculator. Plan it on paper first, build it in small steps, and commit after each step. On day 30, review your notes, list the concepts that still feel shaky, and bring that list to your first week of the bootcamp. Instructors love students who know what they don’t know.</p>

              <h2 id="beyond-code">Preparing beyond the code</h2>
              <p>Many students who struggle in a bootcamp struggle for reasons that have nothing to do with code: money worries, family pressure, exhaustion or a home that is too noisy to concentrate in. Use the same 30 days to remove those obstacles.</p>
              <ul className="checklist">
                <li>Confirm your payment plan and deadlines. Our <Link href="/tuition-financing/">tuition and financing page</Link> explains payment options and scholarships.</li>
                <li>Check your cohort’s time zone. Atlas Code cohorts run live in either {site.timezones.uk} or {site.timezones.na}; put the class times in your calendar in your own local time, and note when the clocks change.</li>
                <li>Talk to your family, partner or housemates about your class hours, when you must not be interrupted, and what support you need during the program.</li>
                <li>If you are working, agree on reduced hours or leave, or consider the <Link href="/programs/part-time-web-development/">part-time Web Development program</Link> instead.</li>
                <li>Build a daily routine with a clear start and finish: a short walk before class can replace the commute and help you switch into learning mode, and closing the laptop at a set time helps you switch off.</li>
                <li>Fix your sleep schedule a week in advance. Tired brains don’t learn.</li>
                <li>Do a full dress rehearsal: join a video call from your study space, share your screen and check that others can hear you clearly. Our <Link href="/online-learning/">online learning page</Link> explains how live classes work.</li>
                <li>Reread the welcome information from the <Link href="/admissions/">admissions team</Link> and complete any pre-work you were given.</li>
              </ul>

              <h2 id="mistakes">Mistakes to avoid</h2>
              <h3>Tutorial hopping</h3>
              <p>Switching between courses every time something gets hard feels productive but isn’t. Pick one resource per topic and finish it.</p>
              <h3>Copying instead of typing</h3>
              <p>Copy-pasting code teaches your mouse, not your brain. Type every example, break it on purpose, and fix it.</p>
              <h3>Trying to learn frameworks early</h3>
              <p>React, Node.js and databases will come later in a full program. Strong fundamentals make them much easier; skipping ahead makes them confusing.</p>
              <h3>Studying alone in silence</h3>
              <p>Learning from home can feel isolating. Find other learners: join an online community, study with a friend, or say hello to future classmates in your cohort’s chat before day one. For more on making remote learning work, read our <Link href="/blog/online-coding-bootcamp-guide/">guide to online coding bootcamps</Link>.</p>
              <p>When you finish the plan, you will be ready for the pace of the <Link href="/programs/full-stack-web-development/">Full-Stack Web Development bootcamp</Link>, and you will know from experience that you can learn this.</p>

              <h2 id="faq">FAQ</h2>
              <Faq items={faq} />
            </div>

            <aside className="sidebar">
              <div className="sidebar-box">
                <h2 className="h4">Start with a weekend</h2>
                <p>The Intro to Coding workshop is built for complete beginners. Tuition: {site.programs.intro.priceLabel}.</p>
                <ul>
                  <li><Link href="/programs/intro-to-coding/">Intro to Coding workshop</Link></li>
                  <li><Link href="/programs/full-stack-web-development/">Full-Stack Web Development</Link></li>
                  <li><Link href="/programs/part-time-web-development/">Part-time Web Development</Link></li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h2 className="h4">Upcoming start dates</h2>
                <p>Intro to Coding runs {site.programs.intro.nextStart}. Full-Stack starts {site.programs.fullstack.nextStart}. Live classes run in {site.timezones.uk} or {site.timezones.na}.</p>
                <p><Link className="btn btn-primary" href="/upcoming-cohorts/">See all cohorts</Link></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Turn 30 days of preparation into a new career</h2>
          <p>Arrive ready, learn live online with instructors and classmates from {site.marketsLabel}, and build a portfolio that shows what you can do.</p>
          <Link className="btn btn-primary" href="/apply/">Apply now</Link>{' '}
          <Link className="btn btn-ghost" href="/contact/">Talk to an advisor</Link>
        </div>
      </section>
    </>
  );
}
