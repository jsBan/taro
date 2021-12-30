import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components"
import { NavBar } from "../../components"
import { useState } from 'react'

import "./index.less"

const Index = () => {
    const state = {
        list: [
            'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
            'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
            'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
        ],
        nav:  [
            {
            url: require("../../access/images/IPHONE.png"),
            name: "iPhone",
           },
           {
             url: require("../../access/images/anzhuo.png"),
             name: "安卓手机",
           },
           {
             url: require("../../access/images/pingban.png"),
             name: "平板电脑",
           },
           {
             url: require("../../access/images/diannao.png"),
             name: "电脑",
           },
           {
             url: require("../../access/images/erji.png"),
             name: "配件",
           },
           {
             url: require("../../access/images/money.png"),
             name: "捡漏专区",
           },
           {
             url: require("../../access/images/quan.png"),
             name: "抢优惠券",
           },
           {
             url: require("../../access/images/new.png"),
             name: "新品推荐",
           },
       ],
    }
    return (
        <View className="wrapper">
            <NavBar />
            <View className="default"></View>
            <View className="banner">
                <Swiper
                  className="swiper-container"
                  circular
                  indicatorDots
                  indicatorColor='#999'
                  indicatorActiveColor='#bf708f'
                  autoplay
                >
                    {
                        state.list && state.list.map((item, index) => (
                            <SwiperItem key={index}>
                                <Image className="swiper-img" src={item} mode='widthFix'></Image>
                            </SwiperItem>
                        ))
                    }
                </Swiper>
            </View>
            {/* nav导航模块 */}
            <View className="nav"> 
            {
                state.nav.map((item, index) => (
                    <View key={index} className="nav-info">
                        <View className="nav-image">
                            <Image src={item.url}></Image>
                            <View className="desc">{item.name}</View>
                        </View>
                    </View>
                ))
            }
            </View>
            {/* block 模块*/}
            <View className="block">
                <View className="block-left">
                    <View className="left-title">正品回收.更快.更高价</View>
                    <View className="left-bottom">
                        <View className="bottom-left">
                            <View><Text className="at-icon at-icon-check-circle"></Text>高价回收 加价收</View>
                            <View><Text className="at-icon at-icon-check-circle"></Text>顺丰上门 安全私密</View>
                            <View><Text className="at-icon at-icon-check-circle"></Text>专业质检 不卖秒退</View>
                            <View className="go">
                                立即前往<Text className="at-icon at-icon-chevron-right"></Text>
                            </View>
                        </View>
                        <View className="bottom-right">
                            <Image src={state.nav[0].url}></Image>
                        </View>
                    </View>
                </View>
                <View className="block-right">
                    <View className="right-title">本机回收</View>
                    <View className="right-center">还可以领取5%的红包</View>
                    <View className="right-bottom">
                        <View className="bottom-left">
                            <Image src={state.nav[0].url}></Image>
                        </View>
                        <View className="bottom-right">
                            <View>本机iPhone xs max</View>
                            <View className="senced"><Text className="mark">￥</Text><Text className="money">3300</Text></View>
                            <View>有550选择卖出</View>
                        </View>
                    </View>
                </View>
            </View>
            {/* 评论模块 */}
            <View className="comment">
                <View className="comment-desc">
                    <View className="desc-left">
                        已有<Text>1954617</Text>名用户选购
                    </View>
                    <View className="desc-right">
                        看看大家怎么说 <Text className="at-icon at-icon-chevron-right"></Text>
                    </View>
                </View>
                <View className="comment-swiper"></View>
            </View>
        </View>
    )
}

export default Index