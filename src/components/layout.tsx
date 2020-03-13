import * as React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

interface Props {
  location: Location;
}

class Template extends React.Component<Props> {
  render() {
    const {  children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
