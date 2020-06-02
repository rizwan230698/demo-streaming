import React from 'react';
import Layout from '../Layout';
import errorImage from '../../assets/error.png';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './style';

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
    //If errored than return the error image else children
    if (this.state.hasErrored) {
      return (
        <Layout>
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={errorImage} />
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
          </ErrorImageOverlay>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
