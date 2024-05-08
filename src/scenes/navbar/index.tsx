import {useState} from 'react'
import Logo from '@/assets/Logo.png'
import Link from './Link';
import { SelectPage } from '@/shared/type';

type props = {
  selectPage: SelectPage;
  setSelectPage: (value : SelectPage) => void
}

const NavBar = ({selectPage, setSelectPage} : props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className={`${flexBetween} top-0 fixed py-6 w-full`}>
      <div className={`${flexBetween} w-5/6 mx-auto gap-16`}>
        <img src={Logo} alt="logo" />
        <div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-8`}>
            <Link page="Home" selectPage = selectPage='' />
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
