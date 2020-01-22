import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css';

import { Layout } from 'antd';
import CustomFooter from '../components/footer';
import CustomHeader from '../components/header';
import CustomContent from '../components/body';


export default class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: 'auto' }}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <style jsx>
          {`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}

        </style>

        <Layout className="layout">
          <CustomHeader />
          <CustomContent />
          <CustomFooter />
        </Layout>
      </Layout>

    );
  }
}
