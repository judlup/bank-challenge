import { useRouter } from "next/router"
import useAuthStore from "../../../stores/auth/auth.store"
import NavbarView from "./navbar.view"

const NavbarContainer = () => {
  const { isAuthenticated, logout, user } = useAuthStore()
  const router = useRouter()

  const handlerLogout = () => {
    logout()
    router.push("/signin")
  }

  return (
    <>
      <NavbarView
        isAuthenticated={isAuthenticated}
        logout={handlerLogout}
        user={user}
      />
    </>
  )
}

export default NavbarContainer
