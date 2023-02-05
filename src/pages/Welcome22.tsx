import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography, Space,Button ,Form, Input, message} from 'antd';
import React from 'react';
import styles from './Welcome.less';
import { createFromIconfontCN } from '@ant-design/icons';






const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const onFinish = (values: any) => {
  message.success("标题：" + values.title)
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
  console.log('Failed:', errorInfo);
};


const Welcome: React.FC = () => {

  return (
    <PageContainer>

      BBBBBB
      <Card>
      <Space wrap>
          <Button type="primary" className={styles.btnIncome}>收入</Button>
          <Button className={styles.btnExpend}>支出</Button>
      </Space>
      
      </Card>
      <Card>
        <Space className={styles.choose}>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
          <div  className={styles.classify}>
            <IconFont className={styles.icons}type="icon-tuichu" />
            <span>退出</span>
          </div>
        </Space>
      </Card>
      <Card>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="标题"
      name="title"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="金额"
      name="money"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="日期"
      name="date"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{offset: 8, span: 16}}>
      <Button type="primary" htmlType='submit'>提交</Button>
    </Form.Item>  
  </Form>
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
