import type { NextPage } from "next"
import Head from "next/head"
import { useEffect } from "react"
import DashboardContainer from "../features/dashboard/dashboard.container"
import useAuthStore from "../stores/auth/auth.store"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/signin"
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Bank Challenge</title>
        <meta name="description" content="Bank Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAuthenticated && (
        <>
          <DashboardContainer />
        </>
      )}
    </div>
  )
}

export default Home
