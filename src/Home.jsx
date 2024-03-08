import React from 'react'
import Create from './Create'
import Read from './Read'
import {callGetAPI} from './constant/api'

const Home = () => {
  return (
    <div>
      <Create/>
      {/* <Read userData={callGetAPI}/> */}
    </div>
  )
}

export default Home
