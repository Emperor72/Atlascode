import { iconResponse } from '@/components/BrandImages';

export const dynamic = 'force-static';

/** /icon.png: 512×512 app icon and schema.org logo. */
export function GET() {
  return iconResponse(512);
}
