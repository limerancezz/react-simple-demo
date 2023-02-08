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
  console.log(format(date));
};

const billChange = (key: string) => {
  console.log(key);
};

const Test: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const initialValues = {
    title: '',
    money: '',
    date: '',
  };

  const showModal = () => {
    // console.log(form.getFieldsValue());
    // todo: 1.取出时间  form.getfieldsValue().date   2.格式转换     3.显示到页面
    setIsModalOpen(true);
  };

  const hideModal = () => {
    form.resetFields();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `图表模式`,
    },
    {
      key: '2',
      label: `列表模式`,
    },
  ];
  const clickIcon1 = (e) => {
    console.info(e);
    e.target.style.background = 'red';
  };

  const clickIcon2 = () => {
    console.info('456');
  };
  return (
    <PageContainer>
      <Card>
        {/* <Space wrap>
          <Button type="primary" className={styles.btnIncome}>收入</Button>
          <Button className={styles.btnExpend}>支出</Button>
      </Space> */}
        <Tabs
          defaultActiveKey="1"
          items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);

            return {
              label: <span>{id == 1 ? '收入' : '支出'}</span>,
              key: id,
              children:
                id == 1 ? (
                  <Card>
                    <Space className={styles.choose}>
                      <div
                        className={styles.classify}
                        onClick={(e) => {
                          clickIcon1(e);
                        }}
                      >
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
                      <div className={styles.classify} onClick={clickIcon2}>
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
                      <div className={styles.classify}>
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
                      <div className={styles.classify}>
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
                      <div className={styles.classify}>
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
                      <div className={styles.classify}>
                        <IconFont className={styles.icons} type="icon-tuichu" />
                        <span>退出</span>
                      </div>
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
                            <p>金额：{format(form.getFieldsValue().date)}</p>
                          </Modal>
                          <Button onClick={hideModal}>取消</Button>
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
                    <Space wrap>
                      <Button type="primary">创建新的记账记录</Button>
                      <Pie {...config} />;
                    </Space>
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
