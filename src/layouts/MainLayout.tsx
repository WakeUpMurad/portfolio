import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, ConfigProvider } from 'antd'
import { TinyColor } from '@ctrl/tinycolor'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'
import classes from './MainLayout.module.css'

const { Content } = Layout
const colors = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516']

const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString())
const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString())

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e75516',
          borderRadius: 2,
          colorBgContainer: '#fff',
        },
        components: {
          Layout: {
            headerBg: '#25274d',
            siderBg: 'rgba(245, 245, 247, 0.8)',
          },
          Button: {
            colorPrimary: `linear-gradient(90deg,  ${colors.join(', ')})`,
            colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors).join(', ')})`,
            colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors).join(', ')})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Layout className={classes.layout}>
        <Slider collapsed={collapsed} />
        <Layout>
          <Header
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          />
          <Content className={classes.content}>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default MainLayout
