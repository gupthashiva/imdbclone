import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>i'm displaying from this {this.props.name}</h2>
      </div>
    )
  }
}
