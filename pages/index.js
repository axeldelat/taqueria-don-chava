import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://axt.s3.amazonaws.com/donchava/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="https://axt.s3.amazonaws.com/donchava/logo.png" alt="Don Chava" height="40px" width="102px"/>

        <p className={styles.description}>
          Selecciona una sucursal
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Suc. 28 de julio &rarr;</h2>
            <p>Av. 28 de Julio, Blvd. de Las Americas esq, Mundo Hábitat, 77714 Playa del Carmen, Q.R.</p>
            <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer"><button className={styles.btn}>Cómo Llegar</button></a>
            <a href="https://www.taqueriadonchavamundohabittat.com/" target="_blank" rel="noopener noreferrer"><button className={styles.btn}>Ordena en Línea</button></a>
          </div>

          <div className={styles.card}>
            <h2>Suc. Centro &rarr;</h2>
            <p>Gonzalo Guerrero Mz 38 Lt 1 Avenida 25 esquina con avenida 28, Gonzalo Guerrero, 77710 Q.R.</p>
            <a href="https://goo.gl/maps/FMxY4yRW4gFQ8bqt7" target="_blank" rel="noopener noreferrer"><button className={styles.btn}>Cómo Llegar</button></a>
            <a href="https://www.taqueriadonchavacentro.com/" target="_blank" rel="noopener noreferrer"><button className={styles.btn}>Ordena en Línea</button></a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.markerante.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="https://axt.s3.amazonaws.com/donchava/markerante.svg" alt="Vercel Logo" height={40} width={144} />
          </span>
        </a>
      </footer>
    </div>
  )
}
