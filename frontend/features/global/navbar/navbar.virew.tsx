import { Avatar, Button, Dropdown, Navbar } from "flowbite-react"

const NavbarView = () => {
  return (
    <Navbar fluid className="bg-gray-900">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Bank Challenge
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="info" size="sm">
          SignIn
        </Button>
        <Button color="info" size="sm">
          SignUp
        </Button>
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
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Deposit</Navbar.Link>
        <Navbar.Link href="#">Transfer</Navbar.Link>
        <Navbar.Link href="#">Withdrawal</Navbar.Link>
        <Navbar.Link href="#">Movements</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarView
