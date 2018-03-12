import React from 'react';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {hover: false}
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand" href="/">Lee Ma</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={this.props.active === "projects" ? "nav-link active" : "nav-link"} href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={this.props.active === "blog" ? "nav-link active" : "nav-link"} href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <a className="nav-item nav-resume" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} href="./assets/leemaresume.pdf">
              <i className="fas fa-file-alt hover-hidden"></i><i className="fas fa-arrow-alt-circle-down hover-show"></i>
              {
                !this.state.hover
                ?
                <span> Resume</span>
                :
                <span> Download</span>
              }
            </a>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;