import {
  FrameRequest,
  getFrameMessage,
  getFrameHtmlResponse,
} from '@coinbase/onchainkit/frame';

import { NextRequest, NextResponse } from 'next/server';

async function getResponse(request) {
  const body = await request.json();
  const { isValid, message } = await getFrameMessage(body, {
    neynarApiKey: 'NEYNAR_ONCHAIN_KIT',
  });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  console.log(body);
  //   return new NextResponse(
  //     getFrameHtmlResponse({
  //       buttons: [
  //         {
  //           label: `State: ${state?.page || 0}`,
  //         },
  //         {
  //           action: 'link',
  //           label: 'OnchainKit',
  //           target: 'https://onchainkit.xyz',
  //         },
  //         {
  //           action: 'post_redirect',
  //           label: 'Dog pictures',
  //         },
  //       ],
  //       image: {
  //         src: `${NEXT_PUBLIC_URL}/park-1.png`,
  //       },
  //       postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
  //       state: {
  //         page: state?.page + 1,
  //         time: new Date().toISOString(),
  //       },
  //     })
  //   );
}

async function POST(request) {
  return getResponse(request);
}
