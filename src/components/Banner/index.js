import React from 'react'
import styles from './Banner.module.css';

function Banner({imagem}) {
  return (
    <div class = {styles.capa} style = {{backgroundImage: `url('/imagens/banner-${imagem}.png')`}}></div>
  )
}

export default Banner