import React, { Component } from 'core-js/library/fn/reflect/es7/metadata';
import './index.scss';

class NormalLayout extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { children } = this.props;
    return <div className="normalLayout">{children}</div>;
  }
}

export default NormalLayout;
