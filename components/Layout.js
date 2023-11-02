import React from 'react'
import style from './Layout.module.css'

function Layout({children}) {
  return (
    <div className="layout">
      <header className={style.header}>NARAS🌎</header>
      <main className={style.main}>{children}</main>
    </div>
  )
}
export default Layout