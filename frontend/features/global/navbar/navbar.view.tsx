import { Avatar, Dropdown, Navbar } from "flowbite-react"
import { FC } from "react"

type Props = {
  isAuthenticated: boolean
  logout: () => void
}

const NavbarView: FC<Props> = ({ isAuthenticated, logout }) => {
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
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
      {isAuthenticated && (
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Dashboard
          </Navbar.Link>
          <Navbar.Link href="#">Deposit</Navbar.Link>
          <Navbar.Link href="#">Transfer</Navbar.Link>
          <Navbar.Link href="#">Withdrawal</Navbar.Link>
          <Navbar.Link href="#">Movements</Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

export default NavbarView
