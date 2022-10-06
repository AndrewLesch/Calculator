import React, { Component } from "react"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }


  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Error Boundary test</h2>
    }
    
    return this.props.children
  }
}