import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  appName: PropTypes.string,
};

const defaultProps = {
  prefixCls: 'sidebar',
  className: '',
  style: {},
  appName: '',
  appLogo: '',
  appBaseUrl: '/',
  width: 256,
  menuData: [],
  pathname: '/',
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    const { pathname, menuData } = props;
  }

  renderSideHeader = () => {
    const { appBaseUrl, prefixCls, appLogo, appName } = this.props;

    return (
      <Link to={appBaseUrl} href={appBaseUrl}>
        123
      </Link>
    );
  };
  renderMenu = (data) => {};
  renderSideBody = () => {
    const { prefixCls, pathname, menuData } = this.props;
    // const {} = this.state

    return (
      <div className={`${prefixCls}-body`}>
        <Menu
          style={{ padding: '16px 0', width: '100%' }}
          mode="inline"
          theme="dark"
        ></Menu>
      </div>
    );
  };
  render() {
    const { prefixCls, className, style, width } = this.props;

    const classes = `${prefixCls} ${className}`;
    const styles = {
      ...style,
      width,
    };
    return (
      <div className={classes} style={styles}>
        {this.renderSideHeader()}
        {this.renderSideBody()}
      </div>
    );
  }
}

Sidebar.defaultProps = defaultProps;
Sidebar.propTypes = propTypes;
export default Sidebar;
