import "braft-editor/dist/index.css";
import React, { memo, useEffect, useState } from "react";

import moment from "moment";

import "./index.scss";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Space,
  DatePicker,
  message,
} from "antd";

import BraftEditor from "braft-editor";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 1,
  },
  wrapperCol: {
    span: 4,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 16,
  },
};
// 摘要的布局
const zhaiYLayout = {
  wrapperCol: {
    // offset: 8,
    span: 10,
  },
};
const richTextLay = {
  wrapperCol: {
    // offset: 8,
    span: 16,
  },
};
const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const BraftEditorPage = ({ history, location }) => {
  const [addOrEdit, setAddOrEdit] = useState("新建");
  const [curr, setCurr] = useState(undefined);

  // 编辑器的内容
  const [content, setContent] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [validateStatus, setValidateStatus] = useState("success");
  const [isDateDis, setIsDateDis] = useState(false); // 默认可以选择时间
  // 编辑器配置
  // const [controls, setControls] = useState([
  //   "bold",
  //   "italic",
  //   "underline",
  //   "text-color",
  //   "separator",
  //   "link",
  //   "separator",
  //   "media",
  // ]);
  const [form] = Form.useForm();
  // 发布时间radio
  const [radioVal, setRadioVal] = useState("2"); // 默认是定时发布 // 1 定时发布 2 立即发布 3 存草稿
  const [radioOptionsList, setRadioOptionsList] = useState([
    {
      val: "2",
      option: "定时发布",
    },
    {
      val: "1",
      option: "立即发布",
    },
    {
      val: "0",
      option: "存草稿",
    },
  ]);
  useEffect(() => {
    if (form) {
      form.resetFields();
      if (addOrEdit === "编辑") {
        if (curr) {
          let par = {
            content: BraftEditor.createEditorState(curr.content),
          };
          if (curr.timerTask) {
            par["timerTask"] = moment(curr.timerTask);
          }
          form.setFieldsValue({
            ...curr,
            ...par,
          });
        }
      }
    }
  }, [addOrEdit, curr, form, location]);
  // 改变发布方式触发
  const handleRadioValChange = ({ target: { value } }) => {
    console.log(value);
    if (value === "0" || value === "1") {
      setIsDateDis(true);
    } else {
      setIsDateDis(false);
    }
    setRadioVal(value);
  };

  function handleClickBack() {
    message.success("点击了返回");

    // history.goBack();
  }
  const handleFinishSubmit = (val) => {
    // 判断发布的时间
    if (!selectedTime && radioVal === "2") {
      setValidateStatus("error");
      message.warning("请选择定时发布的时间！");
      return;
    }
    if (selectedTime && new Date(selectedTime) - new Date() < 180000) {
      message.warning("请设置定时发布时间至少大于当前时间3分钟以上");

      return false;
    }
    setValidateStatus("success");
    const { title, typeId, summary, content, status } = val;
    let tempContent;
    form
      .validateFields()
      .then((values) => {
        tempContent = values.content.toHTML();
        let params = {
          title,
          typeId,
          summary,
          content: tempContent,
          status: radioVal,
        };
        if (radioVal === "2") {
          params["timerTask"] = selectedTime;
        }
        if (addOrEdit === "新建") {
        } else {
          // 编辑
          params["id"] = curr.id;
        }
        // 开始请求
      })
      .catch((info) => {
        message.warning("内容有误");
      });
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  function onGenderChange() {}

  function handleDateChange(val) {
    console.log(val);
    let time = val && val.format("YYYY-MM-DD HH:mm:ss");
    // 设置时间
    setSelectedTime(time);
  }

  // 校验标题
  const validateTittleRule = ({ getFieldValue }) => ({
    async validator(_, value) {
      if (value) {
        if (value.length >= 3 && value.length < 50) {
        } else {
          return Promise.reject("长度在3到50个字符");
        }
      }
      return Promise.reject();

      // end
    },
  });
  // 富文本编辑器
  const contentValidator = (_, value) => {
    console.log(`富文本编辑器${value}`);
    if (value) {
      if (!value.isEmpty()) {
        return Promise.resolve();
      } else {
        return Promise.reject("请输入内容");
      }
    }
    return Promise.reject(`请输入内容`);
  };
  // 发布方式

  const validateStatusRule = ({ getFieldValue }) => ({
    validator(_, value) {
      let status = getFieldValue("status");
      console.log(status);
      console.log(value);
      if (value) {
        return Promise.resolve();
      }
      return Promise.reject(`请选择发布方式`);

      // end
    },
  });
  return (
    <div className="admin_content">
      <section className="admin_cont">
        <Form
          {...layout}
          form={form}
          name="form-name"
          initialValues={{
            remember: true,
          }}
          onFinish={handleFinishSubmit}
          onFinishFailed={onFinishFailed}
          // onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Item
            label="标题"
            name="title"
            validateTrigger={["onBlur"]}
            rules={[
              {
                required: true,
                whitespace: true,
              },
              validateTittleRule,
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => {
              // console.log(prevValues)
              // console.log(currentValues)
              return prevValues.type !== currentValues.type;
            }}
          >
            {({ getFieldValue }) => {
              let res = getFieldValue("type");
              return res === "类型四" ? (
                <Form.Item
                  name="test"
                  label="测试"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null;
            }}
          </Form.Item>
          <Form.Item
            name="summary"
            label="摘要"
            validateTrigger={["onBlur"]}
            {...zhaiYLayout}
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          {/* 内容 */}
          {/* <Form.Item label="内容"  > */}
          <Form.Item
            {...richTextLay}
            name="content"
            // noStyle
            label="内容"
            validateTrigger={["onBlur"]}
            rules={[
              {
                required: true,
              },
              { validator: contentValidator },
            ]}
            className="con_calss"
          >
            <BraftEditor className="my_editor" placeholder="请输入内容" />
          </Form.Item>
          {/* </Form.Item> */}

          <Form.Item {...tailLayout} className="warpper_con">
            <Form.Item
              style={{ display: "inline-block", width: "100px" }}
              name="status"
              validateStatus={validateStatus}
              // rules={[

              //   // validateStatusRule,
              // ]}
            >
              <>
                <Radio.Group
                  onChange={(e) => handleRadioValChange(e)}
                  value={radioVal}
                >
                  {radioOptionsList.map((radio) => (
                    <Radio style={radioStyle} value={radio.val} key={radio.val}>
                      {radio.option}
                    </Radio>
                  ))}
                </Radio.Group>
              </>
            </Form.Item>
            <Form.Item
              style={{ display: "inline-block", width: "200px" }}
              name="timerTask"
            >
              <DatePicker
                showTime
                disabled={isDateDis}
                placeholder="请选择日期时间"
                onChange={handleDateChange}
                format="YYYY-MM-DD HH:mm:ss"
                style={{ marginLeft: "20px" }}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                // onClick={handleSubmitClick}
                style={{ background: "#2DABFF", borderColor: "#2DABFF" }}
              >
                保存
              </Button>
              <Button
                type="default"
                htmlType="button"
                onClick={handleClickBack}
              >
                返回
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default memo(BraftEditorPage);
