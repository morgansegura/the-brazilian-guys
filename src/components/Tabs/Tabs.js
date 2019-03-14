import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0][0].props.label,
    }
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this
    // console.log(this.props.children)
    return (
      <div className="tabs">
        <ol className="tab-list container">
          {children[0].map((child, i) => {
            const { label } = child.props

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </ol>
        <div className="tab-content">
          {children[0].map(child => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
