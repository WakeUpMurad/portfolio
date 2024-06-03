import { FC } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Flex, Button, Layout } from 'antd'
import { NavLink } from 'react-router-dom'
import { ICollapsed } from '../../models/ICollapsed'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../redux/slices/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks'
import classes from './Header.module.css'

const AntHeader = Layout.Header

const Header: FC<ICollapsed> = ({ collapsed, setCollapsed }) => {
  const { isAuth, email } = useAuth()
  const dispatch = useAppDispatch()

  const handleBtnClick = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    dispatch(removeUser())
  }
  return (
    <AntHeader className={classes.header}>
      <Flex
        justify={'space-between'}
        align={'center'}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className={classes.collapseBtn}
        />
        {isAuth ? (
          <Button onClick={handleBtnClick}>Log out {email}</Button>
        ) : (
          <Button>
            <NavLink to={'login'}>Login</NavLink>
          </Button>
        )}
      </Flex>
    </AntHeader>
  )
}

export default Header
