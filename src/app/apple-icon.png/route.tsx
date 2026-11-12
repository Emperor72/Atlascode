import { iconResponse } from '@/components/BrandImages';

export const dynamic = 'force-static';

/** /apple-icon.png: 180×180 Apple touch icon. */
export function GET() {
  return iconResponse(180);
}
