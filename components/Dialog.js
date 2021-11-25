import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { useAddItem } from '../store'

export default function Dialog({ isOpen, onClose, dialogRef }) {
  const cancelRef = useRef(null)
  const add = useAddItem()

  const defaultValue = {
    linkname: '百度',
    linkurl: 'https://www.baidu.com',
  }

  const schema = yup
    .object({
      linkname: yup.string().required('请输入名称'),
      linkurl: yup.string().required('请输入网址').url('请输入格式正确的网址'),
    })
    .required()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    clearErrors,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: defaultValue,
  })
  const onSubmit = (values) => {
    let url = values.linkurl
    add({
      ...values,
      url: `https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=${url.replace(
        /^http(s)?\:\/\//i,
        ''
      )}`,
    })
    clearErrors()
    reset(defaultValue)
    onClose()
  }
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>添加快捷方式</AlertDialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogBody>
              <FormControl isInvalid={errors.linkname}>
                <FormLabel>名称</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    name="linkname"
                    placeholder="请输入名称"
                    {...register('linkname')}
                  ></Input>
                  <FormErrorMessage>
                    {errors.linkname && errors.linkname.message}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>
              <FormControl isInvalid={errors.linkurl} mt="14px">
                <FormLabel>名称</FormLabel>
                <InputGroup flexDirection="column">
                  <Input
                    type="text"
                    name="linkurl"
                    placeholder="请输入网址"
                    {...register('linkurl')}
                  ></Input>
                  <FormErrorMessage>
                    {errors.linkurl && errors.linkurl.message}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                取消
              </Button>
              <Button
                colorScheme="red"
                type="submit"
                ml={3}
                isLoading={isSubmitting}
              >
                添加
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
