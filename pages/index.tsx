import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../static/style/pages/index.css'
import BackTop from '../components/backTop'
import Swiper from '../components/indexSwiper'

class Home extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <BackTop />
        <Nav active='/' />
        <Swiper></Swiper>
        <div className="common-title">
          <div className="line"></div>
          <div className="content">
            <span>一些项目</span>
            <span>Projects And Exercises</span>
          </div>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-sx-12">
            <div className="project-item">
              <div className="pic-cover">
                <img className="project-pic" src="http://qiniu.yinminqian.top/472x357.jpg" alt="" />
              </div>
              <div className="brief-intro">
                光芒商城 mini program
                <div>小程序 / 原生开发</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-sx-12">
            <div className="project-item">
              <div className="pic-cover">
                <img className="project-pic" src="http://qiniu.yinminqian.top/472x357.jpg" alt="" />
              </div>
              <div className="brief-intro">
                光芒商城 mini program
                <div>小程序 / 原生开发</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-sx-12">
            <div className="project-item">
              <div className="pic-cover">
                <img className="project-pic" src="http://qiniu.yinminqian.top/472x357.jpg" alt="" />
              </div>
              <div className="brief-intro">
                光芒商城 mini program
                <div>小程序 / 原生开发</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-sx-11">
            middle
          </div>
          <div className="col-md-4 col-sm-6 col-sx-12">
            right
          </div>
        </div>
      </div>
    )
  }
}

export default Home
