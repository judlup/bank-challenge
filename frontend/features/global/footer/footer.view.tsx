import { Footer } from "flowbite-react"
import { FC } from "react"

type Props = {
  date: number
}

const FooterView: FC<Props> = ({ date }) => {
  return (
    <Footer container className="bg-gray-200 fixed bottom-0">
      <Footer.Copyright
        href="https://www.linkedin.com/in/judlup/"
        by="Julián Luna"
        year={date}
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://www.linkedin.com/in/judlup/">
          About
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterView
