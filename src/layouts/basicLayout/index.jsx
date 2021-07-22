import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menuData from '../../app/config/menu';
import './index.scss';
import Sidebar from '../../components/Sidebar';
import logo from '../../assets/svgs/logo.svg';
const classNames = require('classnames');

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  prefixCls: 'basicLayout',
  className: '',
};

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.menuData = menuData;
  }
  renderHeader = () => {
    // const { } = this.props
  };
  renderFooter = () => {
    return (
      <div className={`${this.props.prefixCls}-footer`}>Copyright 2021</div>
    );
  };
  render() {
    const { prefixCls, className, children, location } = this.props;
    const classes = classNames({
      [prefixCls]: true,
      [className]: true,
    });
    return (
      <>
        <div className={classes}>
          <div className={`${prefixCls}-side`}>
            <Sidebar
              appName="vast"
              appLogo={logo}
              pathname={location.pathname}
              menuData={this.menuData}
            />
          </div>
          <div className={`${prefixCls}-content`}>
            {/* 主要视图 */}
            <div className={`${prefixCls}-mainContent`}>{children}</div>
            {/* 底部 */}
            {this.renderFooter()}
          </div>
          <div></div>
        </div>
        {/* <div>通知</div> */}
      </>
    );
  }
}
BasicLayout.defaultProps = defaultProps;
BasicLayout.propTypes = propTypes;

export default BasicLayout;
