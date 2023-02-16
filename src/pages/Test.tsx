import { PageContainer } from '@ant-design/pro-components';
import { Card, Space, Button, Form, Input, DatePicker, Tabs, Modal, TabsProps } from 'antd';
import React, { useState } from 'react';
import styles from './Test.less';
import { createFromIconfontCN, AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import { Pie } from '@ant-design/plots';
import moment from 'moment';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const format = (value: any) => {
  return moment(value).format('yyyy-MM-DD'); //将时间格式转成yyyy-MM-DD
};
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(format(date)); //DatePicker日期选择框
};

function HelloMessage(props) {
  console.info(props);
  return <h1>Hello {props.name}!</h1>;
} //当为页面二时，取HelloMessage中的name属性，返回为<h1>Hello,zhangsan</h1>

const Test: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //控制对话框的初始状态
  const [currentItem, setCurrentItem] = useState({ id: 1 }); //定义初始currentItem为null（3）
  const [tabBtnValue, setTabBtnValue] = useState('first'); //控制页面二中tabs的默认页
  const [form] = Form.useForm();
  const initialValues = {
    title: '',
    money: '',
    date: '',
  }; //initialValues（初始值）的定义（1）

  const billChange = (key: string) => {
    setTabBtnValue(key);
    console.log(key);
  }; 

  const showModal = () => {
    // console.log(form.getFieldsValue());
    // todo: 1.取出时间  form.getfieldsValue().date   2.格式转换     3.显示到页面
    setIsModalOpen(true);
  };

  const hideModal = () => {
    form.resetFields(); //重置一组字段到 initialValues（初始值）initialValues（初始值）中定义了空字符串 （1
  };
  const handleOk = () => {
    setIsModalOpen(false); //点击时改变对话框的状态，点击确定时取消modal(modal中的按钮)
  };

  const handleCancel = () => {
    setIsModalOpen(false); //点击时改变对话框的状态，点击取消时取消modal（modal中的按钮）
  };

  const getClassByIsClick = (item) => {
    if (currentItem && currentItem.id) {
      //判断是否有currentItem，如果有进入内部（3）
      if (item.id == currentItem.id) {
        //判断当前元素和缓存的currentItem是否为同一个，如果是，进入内部
        return styles.choose + ' ' + styles.selected; //判断是同一个，给元素添加.selected 样式，拼接class字符串
      }
    }
    return styles.choose; //如果没有匹配就给默认的class
  };

  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }; //图表

  const items: TabsProps['items'] = [
    {
      key: 'first',
      label: `图表模式`,
    },
    {
      key: 'second',
      label: `列表模式`,
    },
  ];
  const clickIcon = (item) => {
    setCurrentItem(item); //b对应入参的item，即iconsList中的项（2）
  };

  const iconsList = [
    { id: '1', icon: 'icon-tuichu', text: '退出' },
    { id: '2', icon: 'icon-tuichu', text: '退出' },
    { id: '3', icon: 'icon-tuichu', text: '退出' },
    { id: '4', icon: 'icon-tuichu', text: '退出' },
    { id: '5', icon: 'icon-tuichu', text: '退出' },
    { id: '6', icon: 'icon-tuichu', text: '退出' },
    { id: '7', icon: 'icon-tuichu', text: '退出' },
    { id: '8', icon: 'icon-tuichu', text: '退出' },
    { id: '9', icon: 'icon-tuichu', text: '退出' },
  ];
  return (
    <PageContainer>
      <Card>
        {/* <Space wrap>
          <Button type="primary" className={styles.btnIncome}>收入</Button>
          <Button className={styles.btnExpend}>支出</Button>
      </Space> */}
        <Tabs
          defaultActiveKey="1"
          items={[AppleOutlined, AndroidOutlined].map((icons, index) => {
            const id = String(index + 1); //配置选项卡内容

            return {
              label: <span>{id == '1' ? '收入' : '支出'}</span>,
              key: id,
              children:
                id == '1' ? (
                  <Card>
                    <Space className={styles.choose}>
                      {iconsList.map((item) => {
                        return (
                          <div
                            className={getClassByIsClick(item)}
                            onClick={() => {
                              clickIcon(item);
                            }} //（2）
                            key={item.id}
                          >
                            <IconFont className={styles.icons} type={item.icon} />
                            <span>{item.text}</span>
                          </div>
                        );
                      })}
                    </Space>
                    <Card>
                      <Form
                        name="basic"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        form={form}
                        initialValues={initialValues}
                        autoComplete="off"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                      >
                        <Form.Item label="标题" name="title">
                          <Input placeholder="请输入标题" />
                        </Form.Item>

                        <Form.Item label="金额" name="money">
                          <Input placeholder="请输入金额" />
                        </Form.Item>
                        <Form.Item label="日期" name="date">
                          {/* <Input /> */}
                          <DatePicker onChange={onChange} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                          {/* <Button type="primary" htmlType="submit" onClick={showModal}>
                            提交
                          </Button>
                          <Modal
                            title="Basic Modal"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                          </Modal> */}
                          <Button type="primary" onClick={showModal}>
                            提交
                          </Button>
                          <Modal
                            title="Basic Information"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <p>标题：{form.getFieldsValue().title}</p>
                            <p>金额：{form.getFieldsValue().money}</p>
                            <p>日期：{format(form.getFieldsValue().date)}</p>
                          </Modal>
                          <Button onClick={hideModal}>取消</Button>
                          {/* 重置字段为空 */}
                        </Form.Item>
                      </Form>
                    </Card>
                  </Card>
                ) : (
                  <Card>
                    <Card className={styles.expend}>
                      <p>Keep记账</p>
                      <div className={styles.expendLayout}>
                        <DatePicker onChange={onChange} picker="month" />
                        <div>
                          <span>收入:</span>
                          <span>支出：</span>
                        </div>
                      </div>
                    </Card>
                    <Tabs defaultActiveKey="1" items={items} onChange={billChange} />
                    <div>
                      <Button type="primary" className={styles.createRecord}>
                        创建新的记账记录
                      </Button>
                      {tabBtnValue == 'first' && <Pie {...config} />}
                    </div>
                    {tabBtnValue == 'second' && <HelloMessage name="zhangsan"></HelloMessage>}
                  </Card>
                ),
            };
          })}
        />
      </Card>

      {/* <Card>
        <Space>
          <Button type="primary" htmlType="submit">提交</Button>
          <Button>取消</Button>
        </Space>
      </Card> */}
    </PageContainer>
  );
};

export default Test;
