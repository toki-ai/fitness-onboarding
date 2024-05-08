import {useState} from 'react'
import Logo from '@/assets/Logo.png'

type props = {

}

const NavBar = (props : props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className={`${flexBetween} top-0 fixed py-6 w-full`}>
      <div className={`${flexBetween} w-5/6 mx-auto gap-16`}>
        <img src={Logo} alt="logo" />
        <div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-8`}>
            <p>Home</p>
            <p>Benefits</p>
            <p>Our Classes</p>
            <p>Contact Us</p>
          </div>
          <div className={`${flexBetween} gap-8`}>
            <p>Sign in</p>
            <button>Become a member</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
