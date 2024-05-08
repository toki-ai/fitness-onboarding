import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectPage } from "./shared/type";

function App() {
  const [selectPage, setSelectPage] = useState<SelectPage>(SelectPage.HOME);
  return (
    <div className='app bg-gray-20'>
      <Navbar selectPage = {selectPage} setSelectPage={setSelectPage}></Navbar>
    </div>
  )
}

export default App
