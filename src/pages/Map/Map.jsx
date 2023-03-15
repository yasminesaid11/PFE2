import React from 'react'
import '../Admin/Admin.css'
import SideBar from '../SideBar/SideBar';
const Map = () => {
  return (
    <div>
 <SideBar />
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5323495.991729017!2d-2.436507784723886!3d46.13135416288308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1677586086486!5m2!1sfr!2stn" width="2000" height="1000" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    </div>
  )
}

export default Map
