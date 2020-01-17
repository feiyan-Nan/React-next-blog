import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../static/style/pages/index.css'
const Work = () => {
    let [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })
    return (<div>
        <Head>
            <title>WORK</title>
        </Head>
        <Nav active="/work"></Nav>
        work
        <div>{count}</div>
        <button onClick={() => setCount(++count)}>点</button>
    </div>
    )
}

export default Work