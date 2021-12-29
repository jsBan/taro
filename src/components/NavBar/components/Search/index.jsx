// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
// import { AtIcon } from 'taro-ui'
import "./index.less"

// @import "~taro-ui/dist/style/components/icon.scss";

const Search = () =>  {
    return (
        <View className='navSearch'>
            <View className="left">
                {/* <View className='at-icon at-icon-settings'></View> */}
                {/* <AtIcon value='clock' size='30' color='#F00'></AtIcon> */}
                icon
            </View>
            <View className="right">
                icon
            </View>
        </View>
    )
}

export default Search