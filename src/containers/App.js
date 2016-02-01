import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Layout} from '../components/layouts/Layout'
import {FlashMessages} from 'layouts/FlashMessages'
import {Menu} from 'layouts/Menu'

import CurrentPage from './CurrentPage'
import logoutUser from 'actions/currentUser/logoutUser'

@connect((state) => {
  return {
    flashMessages: state.flashMessages,
    currentPageId: state.currentPageId,
    currentUser: state.currentUser
  }
})
export default class extends Component {
  logoutUser = () => {
    this.props.dispatch(logoutUser())
  }

  constructor(props) {
    super(props)
  }

  render() {
    const isAuthorized = this.props.currentUser && this.props.currentUser.role !== 'Anonymous'

    return (
      <Layout >
        {(this.props.flashMessages.length > 0) && <FlashMessages messages={this.props.flashMessages} dispatch={this.props.dispatch} />}
        <Layout.Main>
          {isAuthorized &&
            <div>
              Вы вошли как <b>{this.props.currentUser.full_name}</b>, <span onClick={this.logoutUser}>выйти</span>
            </div>
          }
          <Layout.Body>
            <Layout.Content>
              <CurrentPage />
            </Layout.Content>
            {isAuthorized && this.props.currentPageId &&
              <Layout.Sidebar>
                <Menu selectedPageId={this.props.currentPageId} />
              </Layout.Sidebar>}
          </Layout.Body>
        </Layout.Main>
        <Layout.Footer />
      </Layout>
    )
  }
}
