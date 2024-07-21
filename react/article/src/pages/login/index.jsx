import React from 'react';
import { Card } from 'antd';
import logo from '@/assets/logo.png';
import './index.scss';
import { message,Button, Checkbox, Form, Input } from 'antd';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const { loginStore } = useStore();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            await loginStore.login(values);
            navigate('/');
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: error.response?.data?.message || '登录失败',
              });
        }
        
    };
    return (
        <div className='login'>
            {contextHolder}
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />
                <Form
               
                    onFinish={onFinish}
                    validateTrigger={['onBlur','onChange']}
                    initialValues={
                        {
                            username:'13911111111',
                            password:'246810',
                            remember:true
                        }
                    }
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                pattern:/^1[3-9]\d{9}$/,
                                message:'手机号格式错误',
                                validateTrigger:'onBlur'
                            }
                        ]}
                    >
                        <Input size='large' placeholder='请输入手机号'/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空',
                            },
                            {
                                len:6,
                                message:'密码长度为6位',
                            }
                        ]}
                    >
                        <Input.Password size='large' placeholder='请输入密码' maxLength={6}/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className='login-checkbox-label'>我已阅读并同意「用户协议」和 「隐私条款」</Checkbox>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button block type="primary" htmlType="submit" size='large'>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    );
};

export default Login;