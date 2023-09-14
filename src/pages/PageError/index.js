import React from 'react'
import styles from './PageError.module.css'

function PageError() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>Conteudo não encontrado!</p>
    </section>
  )
}

export default PageError