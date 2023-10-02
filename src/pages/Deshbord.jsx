import React from 'react'
import Header from '../Components/Navbar/Header'
import Userdeshbord from '../Components/User_deshbord/Userdeshbord'
import { Outlet } from 'react-router-dom'

const Deshbord = () => {
  return (
    <>
    <Header/>
    <Userdeshbord/>
 
    <Outlet/>
    </>
  )
}

export default Deshbord