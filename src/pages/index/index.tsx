// @ts-ignore
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

const Index: React.FC<{}> = () => {
  return (
    <View className='index'>
      <Text className="title">Hello world!</Text>
      <AtButton type='primary'>I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type='primary' circle={true}>支持</AtButton>
      <Text>共建？</Text>
      <AtButton type='secondary' circle={true}>来</AtButton>
    </View>
  )
}

export default Index
