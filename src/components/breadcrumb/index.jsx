import React, { memo } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
export default memo(function BreadcrumbComp({ first, second }) {
const FirstComp = <Breadcrumb.Item>{first}</Breadcrumb.Item> || "";
const SecondComp = <Breadcrumb.Item>{second}</Breadcrumb.Item> || "";
  return (
    <div>
      <Breadcrumb style={{ margin: "12px 0" }}>
        <Breadcrumb.Item>
          <Link to={"/admin/dashboard"}></Link>
        </Breadcrumb.Item>
        {FirstComp}
        {SecondComp}
      </Breadcrumb>
    </div>
  );
});
