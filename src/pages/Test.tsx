import { PageContainer } from '@ant-design/pro-components';
import { Card, Space, Button, Form, Input, DatePicker, Tabs, Modal, TabsProps } from 'antd';
import React, { useState, Component } from 'react';
import styles from './Test.less';
import { createFromIconfontCN, AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import { Pie } from '@ant-design/plots';
import moment from 'moment';

//引入样式
// import './index.less';

// const getOption = () => {
//     //剩余
//     let option = {
//       title: {
//         text: `总授予`,
//         x: 'center',
//         textStyle: {
//           color: 'rgba(0, 0, 0, 0.9)',
//           fontWeight: 400,
//           fontSize: 14,
//         },
//       },
//       tooltip: {
//         trigger: 'item',
//         //提示框浮层内容格式器，支持字符串模板和回调函数形式。
//         formatter: '{a} <br/>{b} : {c} ({d}%)',
//       },
//       legend: {
//         orient: 'horizontal',
//         bottom: 5,
//         data: ['已分配', '剩余'],
//         itemWidth: 8,
//         itemHeight: 8,
//         icon: 'circle',
//         borderRadius: 16,
//       },
//       series: [
//         {
//           name: `总授予`,
//           type: 'pie',
//           width: 200,
//           height: 200,
//           top: 8,
//           left: 'center',
//           data: [
//             {
//               value: 1111,
//               name: '已分配',
//               label: {
//                 show: true,
//                 //自定义内容
//                 formatter: String('paramAssign'),
//                 /* formatter: () => {
//                     if (paramAssign && paramAssign !== 0) {
//                         return String(paramAssign);
//                     } else {
//                         return '';
//                     }
//                 }, */
//                 color: '#fff',
//               },
//               itemStyle: { color: '#41D1A6' },
//             },
//             {
//               value: 1111,
//               name: '剩余',
//               label: {
//                 show: true,
//                 //自定义内容
//                 formatter: String('1111'),
//                 color: '#fff',
//               },
//               itemStyle: { color: '#607CE9' },
//             },
//           ],
//           clockwise: false, //是否顺时针
//           label: {
//             //去除饼图的指示折线label
//             normal: {
//               show: false,
//               position: 'inside',
//               formatter: '{b}:{d}%',
//             },
//           },
//         },
//       ],
//     };
//     return option;
//   };

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

// const onFinish = (values: any) => {
//   // message.success('标题：' + values.title);
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };
const format = (value: any) => {
  return moment(value).format('yyyy-MM-DD'); //将时间格式转成yyyy-MM-DD
};
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(format(date));
};

const billChange = (key: string) => {
  console.log(key);
};

const Welcome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const initialValues = {
    title: '',
    money: '',
    date: '',
  };

  const showModal = () => {
    // console.log(form.getFieldsValue());
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
      label: `列表模式`,
    },
    {
      key: '2',
      label: `图表模式`,
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
                          </Modal>
                          <Button onClick={hideModal}>取消</Button>
                        </Form.Item>
                      </Form>
                    </Card>
                  </Card>
                ) : (
                  <Card>
                    <Card>
                      <p>Keep记账</p>
                      <DatePicker onChange={onChange} picker="month" />
                      <span>收入：</span>
                      <span>支出：</span>
                    </Card>
                    <Tabs defaultActiveKey="1" items={items} onChange={billChange} />
                    <Space wrap>
                      <Button type="primary">创建新的记账记录</Button>
                      {/* <ReactEcharts option={getOption()} /> */}
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

export default Welcome;
