import type { AppProps } from "next/app"
import useIsHydrated from "../hooks/isHydrated/isHydrated.hook"
import Layout from "../layouts/layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  const isHydrated = useIsHydrated()
  if (!isHydrated) {
    return null
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
