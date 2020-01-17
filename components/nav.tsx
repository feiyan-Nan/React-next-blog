import React, { useState } from 'react'
import Link from 'next/link'
import '../static/style/components/nav.css'
import classnames from 'classnames';

const links = [
  { title: '主页', hoverTitle: 'HOME', href: '/', hoverStatus: true },
  { title: '项目', hoverTitle: 'WORK', href: '/work', hoverStatus: false },
  { title: '关于', hoverTitle: 'ABOUT', href: '/about', hoverStatus: false },
  { title: '联系', hoverTitle: 'CONTACT', href: '/contact', hoverStatus: false },
  { title: '博客', hoverTitle: 'BLOG', href: '/blog', hoverStatus: false }
]
const handleClick = (index: number): void => {
  for (let i = 0; i < links.length; i++) {
    links[i].hoverStatus = false
  }
  links[index].hoverStatus = true
}


const Nav = (props) => {
  console.log(props)
  const [isShow, setIsShow] = useState(false)
  const headerMore = classnames(
    'animated',
    'faster',
    {
      'header-more': true,
      'zoomInUp': !isShow
    }
  )

  const toastMenuClass = classnames(
    'animated',
    'faster',
    'toast-menu',
    { fadeIn: isShow, 'toast-menu-block': isShow, fadeOut: !isShow }
  )
  return (
    <div className="placeholder">
      <div className="nav-bar">
        <div className={toastMenuClass} onTouchStart={() => { }}>
          <div className="animated rotateInDownRight faster delay-0.5s" onClick={() => setIsShow(false)}>
            <i className="iconfont icon-guanbi"></i>
          </div>
          <div className="small-nav">
            <div>
              {
                links.map(item => (
                  <div key={item.hoverTitle} className={item.href === props.active ? 'small-link small-link-active' : 'small-link'}><Link href={item.href}><a>{item.title}</a></Link></div>
                ))
              }
            </div>
          </div>
        </div><div className="small-flex">
          <div className="active">
            {
              links.map(item => {
                return item.href === props.active ? item.hoverTitle : null
              })
            }
          </div>
          <div className={headerMore} onClick={() => { setIsShow(true) }}>
            {isShow ? null : (<i className="iconfont icon-gengduo"></i>)}
          </div>
        </div>
        <div className="container">
          <div className="header-inner">
            <ul className="header-flex">
              {
                links.map((item, index) => (
                  <li className="flex-item" key={item.hoverTitle}>
                    <Link href={item.href}>
                      <a onClick={() => { handleClick(index) }} className={item.href === props.active ? 'current' : ''} data-hover={item.hoverTitle}>{item.title}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div >
    </div>



  )
}

export default Nav
