import React from 'react';
import Layout from '../Layout';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <Layout>
          <p style={{ color: 'black' }}>Oops, something went wrong.</p>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
