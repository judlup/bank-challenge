import useAuthStore from "../../stores/auth/auth.store"
import MyAccountView from "./myAccount.view"

const MyAccountContainer = () => {
  const { user, balance } = useAuthStore()
  return (
    <>
      <MyAccountView user={user} balance={balance} />
    </>
  )
}

export default MyAccountContainer
