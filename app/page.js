import Image from 'next/image';
import { IMAGE_NAME } from '../utils/utils';

export const metadata = {
  title: 'title',
  description: 'description',
  // openGraph: {
  //   title: ITEM_TITLE,
  //   description: ITEM_DESCRIPTION,
  //   images: [NEXT_PUBLIC_URL],
  // },
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
