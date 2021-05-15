import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <footer style={{ display: 'flex' }}>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <div style={{ justifyContent: 'center' }}>
            <p style={{ fontSize: '13px', textAlign: 'center' }}>
                © 2021 <a href='https://github.com/sujijava'>Sujijava</a> |
              susieoh8@gmail.com
            </p>
          </div>
          <br></br>
        </div>
      </footer>
    )
  }
}
