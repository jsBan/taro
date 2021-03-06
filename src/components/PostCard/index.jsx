// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"

import "./index.less"

export default function PostCard(props) {
    return (
        <View className='postcard'>
            <View className='post-title'>{props.title}</View>
            <View className='post-content'>{props.content}</View>
        </View>
    )
}
