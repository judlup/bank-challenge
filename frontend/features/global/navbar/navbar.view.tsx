import { Avatar, Dropdown, Navbar } from "flowbite-react"
import { FC } from "react"
import { UserInterface } from "../../../models/user/user.interface"

type Props = {
  isAuthenticated: boolean
  user: UserInterface | null
  logout: () => void
}

const NavbarView: FC<Props> = ({ isAuthenticated, logout, user }) => {
  return (
    <Navbar fluid className="bg-gray-900">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Bank Challenge
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isAuthenticated && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://cdn.icon-icons.com/icons2/1371/PNG/512/nikolatesla_90830.png"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.name}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
      {isAuthenticated && (
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-white hover:text-teal-100">
            Dashboard
          </Navbar.Link>
          <Navbar.Link
            href="/deposit"
            className="text-white hover:text-teal-100"
          >
            Deposit
          </Navbar.Link>
          <Navbar.Link
            href="/transfer"
            className="text-white hover:text-teal-100"
          >
            Transfer
          </Navbar.Link>
          <Navbar.Link
            href="/withdrawal"
            className="text-white hover:text-teal-100"
          >
            Withdrawal
          </Navbar.Link>
          <Navbar.Link
            href="/movements"
            className="text-white hover:text-teal-100"
          >
            Movements
          </Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

export default NavbarView
