// import React, { useState, useEffect } from 'react'
import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import Nav from '../../components/nav'
import '../../static/style/pages/index.css'
const Work = ({ router }) => {
    console.log(router);
    // let [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log(`useEffect=>You clicked ${count} times`)
    // })
    return (<div>
        <Head>
            <title>WORK</title>
        </Head>
        <Nav active="/work"></Nav>
        <div className="project-detail">
            <div className="project-picture">
                <img src="http://qiniu.yinminqian.top/472x357.jpg" alt="" />
            </div>
            <div className="project-desc">
                <div className="title">XPEL mini program</div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Work)