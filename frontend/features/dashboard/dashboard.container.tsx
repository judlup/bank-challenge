import useAuthStore from "../../stores/auth/auth.store"
import DashboardView from "./dashboard.view"

const DashboardContainer = () => {
  const { user, balance } = useAuthStore()

  return <DashboardView user={user} balance={balance} />
}

export default DashboardContainer
