/*eslint-disable */
/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

// import Nav3 from './Nav3';
import Banner0 from './Banner0';
// import Nav0 from './Nav0';
import Banner1 from './Banner1';
import Banner3 from './Banner3';
import Content0 from './Content0';
import Content5 from './Content5';
import Content3 from './Content3';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Banner5 from './Banner5';
import Footer1 from './Footer1';

import {
  // Nav30DataSource,
  Banner01DataSource,
  Nav00DataSource,
  Banner10DataSource,
  Banner30DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Banner50DataSource,
  Footer11DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // <Nav3
      //   id="Nav3_0"
      //   key="Nav3_0"
      //   dataSource={Nav30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // <Banner0
      //   id="Banner0_1"
      //   key="Banner0_1"
      //   dataSource={Banner01DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // <Nav0
      //   id="Nav0_0"
      //   key="Nav0_0"
      //   dataSource={Nav00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
    
	<Content3
	id="Content3_0"
	key="Content3_0"
	dataSource={Content30DataSource}
	isMobile={this.state.isMobile}
  />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,

      <Banner3
      id="Banner3_0"
      key="Banner3_0"
      dataSource={Banner30DataSource}
      isMobile={this.state.isMobile}
    />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
     
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Footer1
      //   id="Footer1_1"
      //   key="Footer1_1"
      //   dataSource={Footer11DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
