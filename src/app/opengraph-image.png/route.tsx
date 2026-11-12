import { ogResponse } from '@/components/BrandImages';

export const dynamic = 'force-static';

/** /opengraph-image.png: default 1200×630 social-sharing image. */
export function GET() {
  return ogResponse();
}
