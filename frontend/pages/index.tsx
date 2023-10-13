import type { NextPage } from "next"
import Head from "next/head"
import { useEffect } from "react"
import DashboardContainer from "../features/dashboard/dashboard.container"
import DepositContianer from "../features/deposit/deposit.contianer"
import MovementsContainer from "../features/movements/movements.container"
import MyAccountContainer from "../features/myAccount/myAccount.container"
import WithdrawalContainer from "../features/withdrawal/withdrawal.container"
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

          <MyAccountContainer />

          <DepositContianer />

          <WithdrawalContainer />

          <MovementsContainer />
        </>
      )}
    </div>
  )
}

export default Home
