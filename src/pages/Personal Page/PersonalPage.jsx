import React from 'react'
import Auth from '../Login/Auth';
import Topline from '../../widgets/topline/topline';
import Header from './../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';


function PersonalPage() {
  return (
    <div>
      <Topline />
      <Header />
      <Auth />
      <Footer />
    </div>  )
}

export default PersonalPage
