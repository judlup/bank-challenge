import { useRouter } from "next/router"
import useAuthStore from "../../../stores/auth/auth.store"
import NavbarView from "./navbar.view"

const NavbarContainer = () => {
  const { isAuthenticated, logout, signin } = useAuthStore()
  const router = useRouter()

  const handlerLogout = () => {
    logout()
    router.push("/signin")
  }

  return (
    <>
      <NavbarView isAuthenticated={isAuthenticated} logout={handlerLogout} />
    </>
  )
}

export default NavbarContainer
