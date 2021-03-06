/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component } from 'react'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from "../../components"
import './index.less'

export default class Index extends Component {
  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。'
      }
    ],
    formTitle: '',
    formContent: '',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSubmit(e) {
    e.preventDefault()
    const { formTitle: title, formContent: content } = this.state
    const newPosts = this.state.posts.concat({ title, content })

    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: '',
    })

  }
  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value,
    })
  }
  handleContentInput(e) {
    this.setState({
      formContent: e.target.value,
    })
  }

  render () {
    return (
      <View className='index'>
        {
          this.state.posts.map((post, index) => (
            <PostCard key={index} title={post.title} content={post.content} />
          ))
        }
        <PostForm 
          formTitle={this.state.formTitle}
          formContent={this.state.formContent}
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
        />
      </View>
    )
  }
}
