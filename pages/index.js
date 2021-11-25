import { Box } from '@chakra-ui/layout'
import dynamic from 'next/dynamic'
import ILogo from './../components/ILogo'

const Card = dynamic(() => import('../components/Card'), { ssr: false })

export default function Home() {
  return (
    <Box w="100vw" h="100vh" bgColor="#1a202c" pt="100px">
      <ILogo></ILogo>
      <Card></Card>
    </Box>
  )
}
