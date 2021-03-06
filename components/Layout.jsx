const isProd = process.env.NODE_ENV === 'production'
import { Fragment, Component } from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Router from 'next/router'

class Layout extends Component {
  state = { showSidebar: false }
  toggleSidebar = () => this.setState({showSidebar: !this.state.showSidebar})

  componentDidMount = () => {
    Router.onRouteChangeStart = url => {
      this.setState({showSidebar: false})
    }
    if (isProd && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render () {
    return (
      <div>

        <Sidebar visible={this.state.showSidebar}
                 onBlur={this.toggleSidebar}/>
        <Header title={this.props.title}
                onClick={this.toggleSidebar}
                actionElement={this.props.actionElement}
                actionEvent={this.props.actionEvent}
                />

        <div>
          <div className="container">
            <div className={this.props.className}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Layout.defaultProps = {
  title: '',
  actionElement: <div />,
  actionEvent: () => {}
}

export default Layout;
