import { Box } from '@chakra-ui/layout'
import React from 'react'
import Image from 'next/image'
import googlelogog from '../public/google_logo.png'

export default function ILogo() {
  return (
    <Box w="272px" height="92px" mx="auto">
      <Image
        src={googlelogog}
        alt="this is google logo"
        width={272}
        height={92}
      ></Image>
    </Box>
  )
}
