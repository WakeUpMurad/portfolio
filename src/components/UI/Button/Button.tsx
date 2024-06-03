import { Button as AntButton } from 'antd'

type Props = {
  onClick?: () => {}
  content: string
}

const Button = ({ onClick, content }: Props) => (
  <AntButton
    type="primary"
    size="large"
    onClick={onClick}
  >
    {content}
  </AntButton>
)
export default Button
