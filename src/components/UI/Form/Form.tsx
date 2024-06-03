import { FC, useState } from 'react'
import { Button, Checkbox, Form as AntForm, Input } from 'antd'
import type { FormProps } from 'antd'
import { IForm } from '../../../models/IForm'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Form: FC<IForm> = ({ title, handleSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    handleSubmit(email, password, remember)
    console.log('Success:', values)
  }
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <AntForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <AntForm.Item
        label="Useremail"
        name="useremail"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="useremail"
        />
      </AntForm.Item>

      <AntForm.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
        />
      </AntForm.Item>

      <AntForm.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        >
          Remember me
        </Checkbox>
      </AntForm.Item>

      <AntForm.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
        >
          {title}
        </Button>
      </AntForm.Item>
    </AntForm>
  )
}
export default Form
