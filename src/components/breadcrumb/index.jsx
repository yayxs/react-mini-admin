import React, { memo } from "react";
import { Breadcrumb } from "antd";
export default memo(function BreadcrumbComp() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">表单</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">基本表单</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
});
