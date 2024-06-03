import { FC } from 'react'
import { Layout } from 'antd'
import classes from './Footer.module.css'

const AntFooter = Layout.Footer

const Footer: FC = () => {
  return <AntFooter className={classes.footer}>Sber React JS course ©{new Date().getFullYear()} Created by Murad Gakhramanov</AntFooter>
}

export default Footer
