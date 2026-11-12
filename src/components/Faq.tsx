import type { FaqItem } from '@/lib/types';
import { faqSchema } from '@/lib/seo';
import { JsonLd } from './JsonLd';

/** Accessible accordion plus FAQPage structured data. */
export function Faq({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary>{item.q}</summary>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
      {schema && <JsonLd data={faqSchema(items)} />}
    </div>
  );
}
