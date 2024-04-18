import {
  FrameRequest,
  getFrameMessage,
  getFrameHtmlResponse,
} from '@coinbase/onchainkit/frame';
import { IMAGE_NAME, NEXT_PUBLIC_URL } from '../../../utils/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function getResponse(request) {
  const body = await request.json();
  const { isValid, message } = await getFrameMessage(body, {
    neynarApiKey: 'NEYNAR_ONCHAIN_KIT',
  });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  console.log(message);
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `thank you`,
        },
        // {
        //   action: 'link',
        //   label: 'OnchainKit',
        //   target: 'https://onchainkit.xyz',
        // },
        {
          action: 'post_redirect',
          label: 'Dog pictures',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/${IMAGE_NAME}`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
      state: {
        page: state?.page + 1, //problem
        time: new Date().toISOString(),
      },
    })
  );
}

export async function POST(request) {
  return getResponse(request);
}
