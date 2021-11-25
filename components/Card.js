import {
  Wrap,
  WrapItem,
  Box,
  useDisclosure,
  CloseButton,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { GrAdd } from 'react-icons/gr'
import Dialog from './Dialog'
import { useRecoilValue } from 'recoil'
import { urlItems, listState, useDeleteItem } from '../store'
import Image from 'next/image'
import Link from 'next/link'

export default function Card() {
  const dialogRef = useRef(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const listItems = useRecoilValue(urlItems)
  const { listTotal } = useRecoilValue(listState)
  const remove = useDeleteItem()

  return (
    <>
      <Wrap maxW="600px" h="228px" mx="auto" mt="10px">
        {listItems.map((item) => (
          <WrapItem
            key={item.linkurl}
            w="112px"
            h="112px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            _hover={{ bgColor: 'rgba(255, 255, 255, 0.1)' }}
            borderRadius="10px"
            pos="relative"
          >
            <CloseButton
              size="sm"
              position="absolute"
              top="6px"
              right="6px"
              color="#b20b30"
              onClick={() => remove(item)}
            />
            <Box
              w="48px"
              h="48px"
              bgColor="#fff"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
            >
              <Image
                src={item.url}
                alt="this is google logo"
                width={24}
                height={24}
              ></Image>
            </Box>
            <Link href={item.linkurl}>
              <a
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#fff',
                  marginTop: '14px',
                }}
              >
                {item.linkname}
              </a>
            </Link>
          </WrapItem>
        ))}
        {listTotal != 8 ? (
          <WrapItem
            w="112px"
            h="112px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="48px"
              h="48px"
              bgColor="#fff"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              cursor="pointer"
              onClick={onOpen}
            >
              <GrAdd size="20px"></GrAdd>
            </Box>
            <Box mt="14px" color="#fff">
              添加快捷方式
            </Box>
          </WrapItem>
        ) : null}
      </Wrap>
      <Dialog dialogRef={dialogRef} isOpen={isOpen} onClose={onClose}></Dialog>
    </>
  )
}
