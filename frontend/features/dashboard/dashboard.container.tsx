import { useRouter } from "next/router"
import { useEffect } from "react"
import useAuthStore from "../../stores/auth/auth.store"
import DashboardView from "./dashboard.view"

const DashboardContainer = () => {
  const { user, balance, getBalaceByAccountNumber } = useAuthStore()
  const router = useRouter()

  // getBalaceByAccountNumber(Number(user?.phone))
  useEffect(() => {
    if (user) {
      getBalaceByAccountNumber(Number(user?.phone))
    }
  }, [])

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return <DashboardView user={user} balance={balance} navigateTo={navigateTo} />
}

export default DashboardContainer
