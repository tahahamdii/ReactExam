import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false
    };
  }

  componentDidMount() {
    // Show message after component mounts
    setTimeout(() => {
      this.setState({ showMessage: true });
    }, 3000);

    // Hide message after 3 seconds
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 6000);
  }

  render() {
    return (
      <div>
        {this.state.showMessage && <p><Link to="/films">Redirect to Movies page</Link></p>}
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
