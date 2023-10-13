import { Footer } from "flowbite-react"
import { FC } from "react"

type Props = {
  date: number
}

const FooterView: FC<Props> = ({ date }) => {
  return (
    <Footer container className="bg-gray-200">
      <Footer.Copyright by="Julián Luna" year={date} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterView
