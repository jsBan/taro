import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import { NavBar } from "../../components"

import "./index.less"

const Index =() => {
    return (
        <View className="wrapper">
            <NavBar />
        </View>
    )
}

export default Index