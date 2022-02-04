import React from 'react';

export class ErrorBoundary extends React.Component<{}, { isError: boolean }> {
  state = { isError: false };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);

    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) return <div>Error</div>;

    return this.props.children;
  }
}
