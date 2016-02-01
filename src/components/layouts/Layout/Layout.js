import './Layout.sass'
import React, {Component} from 'react'
import FlashMessages from 'layouts/FlashMessages'

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {this.props.isFlashMessagesShown && <FlashMessages />}
        {this.props.children}
      </div>
    )
  }
}

Layout.Header = class extends Component {
  render() {
    return (
      <header className='Layout-header'>
        {this.props.children}
      </header>
    )
  }
}

Layout.Main = class extends Component {
  render() {
    return (
      <div className='Layout-main'>
        {this.props.children}
        <div className='Layout-empty' />
      </div>
    )
  }
}

Layout.Body = class extends Component {
  render() {
    return (
      <div className='Layout-body'>
        {this.props.children}
      </div>
    )
  }
}

Layout.Content = class extends Component {
  render() {
    return (
      <section className='Layout-content'>
        {this.props.children}
      </section>
    )
  }
}

Layout.Sidebar = class extends Component {
  render() {
    return (
      <aside className='Layout-sidebar'>
        {this.props.children}
      </aside>
    )
  }
}
