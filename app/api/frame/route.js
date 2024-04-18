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

  //   if (!isValid) {
  //     return new NextResponse('Message not valid', { status: 500 });
  //   }
  console.log(body);
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
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/${IMAGE_NAME}`,
      },
      //   state: {
      //     users: {
      //       name: message.user,
      //       project: message.project,
      //     },
      //     ...message.users,
      //   },
    }),
    { status: 200 }
  );
}

export async function POST(request) {
  return getResponse(request);
}
