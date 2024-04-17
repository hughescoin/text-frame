import { getFrameMetadata } from '@coinbase/onchainkit';
import { IMAGE_NAME } from '../utils/utils';

const frameMetadata = getFrameMetadata({
  buttons: [{ label: 'Buy', action: 'post_redirect' }],
});

export const metadata = {
  title: 'title',
  description: 'description',
  // openGraph: {
  //   title: ITEM_TITLE,
  //   description: ITEM_DESCRIPTION,
  //   images: [NEXT_PUBLIC_URL],
  // },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={`/${IMAGE_NAME}`} />
    </>
  );
}
