import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { SunOutlined, UserOutlined, InfoCircleOutlined, ContactsOutlined } from '@ant-design/icons'
import logo from './images/logo.svg'
import logoBrand from './images/logoBrand.svg'
import classes from './Slider.module.css'

const { Sider } = Layout

type Collapsed = {
  collapsed: boolean
}

const Slider: FC<Collapsed> = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className={classes.logoField}>
        <img
          className={classes.logo}
          src={logo}
          alt="img"
        />
        <img
          className={classes.logoBrand}
          src={logoBrand}
          alt="img"
        />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <SunOutlined />,
            label: (
              <NavLink
                to="."
                end
              >
                Weather
              </NavLink>
            ),
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: <NavLink to="profile">Profile</NavLink>,
          },
          {
            key: '3',
            icon: <InfoCircleOutlined />,
            label: <NavLink to="about">About</NavLink>,
          },
          {
            key: '4',
            icon: <ContactsOutlined />,
            label: <NavLink to="contacts">Contacts</NavLink>,
          },
        ]}
      />
    </Sider>
  )
}

export default Slider
