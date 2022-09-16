import React from 'react'
import Navbar from '../Components/Navbar'
import Image from "next/image"
import styles from "../styles/contact.module.css";



const contact = () => {
  return (
    <div>
    
     <Navbar/>
    <div className={styles.headings}> 
    <h1>Ichigo Kurusaki</h1> 
    <Image src = "https://wallpaperaccess.com/full/122457.jpg" width="200" height="300" />
    </div>
    </div>
  )
}

export default contact