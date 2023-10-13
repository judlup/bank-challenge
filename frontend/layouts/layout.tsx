import { FC } from "react"
import FooterContainer from "../features/global/footer/footer.container"
import NavbarContainer from "../features/global/navbar/navbar.container"

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarContainer />
      {children}
      <FooterContainer />
    </>
  )
}

export default Layout
