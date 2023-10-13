import { FC } from "react"

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        Navbar
        <div>
          <ul>
            <li>Home</li>
            <li>Mi saldo</li>
            <li>Perfil</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
      {children}
      <div>Footer</div>
    </>
  )
}

export default Layout
