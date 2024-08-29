import React from 'react'
import SignUp from '../Login/SignUp'
import ProtectedComponent from './../Login/ProtectedComponent';
import Auth from '../Login/Auth';

function PersonalPage() {
  return (
    <div>
      <SignUp />
      <ProtectedComponent />
      <Auth />
    </div>  )
}

export default PersonalPage
