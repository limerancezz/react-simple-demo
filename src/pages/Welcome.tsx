import { PageContainer } from '@ant-design/pro-components';
import { Card, Space, Button, Form, Input, DatePicker, Tabs, Modal } from 'antd';
import React, { useState } from 'react';
import styles from './Welcome.less';
import { createFromIconfontCN, AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';

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

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const doClick = () => {
  console.info(123);
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
                      <div className={styles.classify} onClick={doClick}>
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
                ) : null,
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

{
  /* <Card>
  <Tabs defaultActiveKey="1" items={billItems} onChange={billChange} />
  <Space wrap className={styles.summary}>
  <Button type="primary">创建新的记账记录</Button>
  <span>本月收入</span>
  <Pie {...config} />;
  </Space>
 </Card> */
}
