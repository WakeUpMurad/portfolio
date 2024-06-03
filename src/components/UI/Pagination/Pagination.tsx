import { FC } from 'react'
import { Pagination as AntPagination } from 'antd'
import classes from './Pagination.module.css'

interface IPagination {
  defaultCurrent: number
  defaultPageSize: number
  total: number
  onChange: () => void
}

const Pagination: FC<IPagination> = ({ defaultCurrent, defaultPageSize, total, onChange }) => {
  return (
    <div className={classes.pagination}>
      <AntPagination
        showQuickJumper
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        total={total}
        onChange={onChange}
      />
    </div>
  )
}

export default Pagination
