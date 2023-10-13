import type { NextPage } from "next"
import Head from "next/head"
import DashboardContainer from "../features/dashboard/dashboard.container"
import DepositContianer from "../features/deposit/deposit.contianer"
import MovementsContainer from "../features/movements/movements.container"
import MyAccountContainer from "../features/myAccount/myAccount.container"
import SigninContainer from "../features/signin/singin.container"
import SignupContainer from "../features/signup/signip.container"
import WithdrawalContainer from "../features/withdrawal/withdrawal.container"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bank Challenge</title>
        <meta name="description" content="Bank Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardContainer />

      <SigninContainer />

      <SignupContainer />

      <MyAccountContainer />

      <DepositContianer />

      <WithdrawalContainer />

      <MovementsContainer />
    </div>
  )
}

export default Home
