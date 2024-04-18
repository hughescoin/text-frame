import Image from 'next/image';
import { IMAGE_NAME, NEXT_PUBLIC_URL } from '../utils/utils';
import { getFrameMetadata } from '@coinbase/onchainkit/frame';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click',
      action: 'post',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/${IMAGE_NAME}`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata = {
  title: 'title',
  description: 'description',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/${IMAGE_NAME}`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>hi</h1>
      <Image
        src={`/${IMAGE_NAME}`}
        width={500}
        height={500}
        alt='Picture of the author'
      />
    </>
  );
}
