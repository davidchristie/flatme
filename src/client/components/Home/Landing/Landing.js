import React from 'react'

import BannerDemo from './BannerDemo'
import BannerDream from './BannerDream'
import BannerHeader from './BannerHeader'
import BannerRules from './BannerRules'

const Landing = () => {
  return (
    <div>
      <BannerHeader />
      <BannerRules />
      <BannerDemo />
      <BannerDream />
    </div>
  )
}

export default Landing
