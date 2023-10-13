import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { SigninService } from "../../services/signin/signin.service"
import useAuthStore from "../../stores/auth/auth.store"
import SigninView from "./signin.view"

const SigninContainer = () => {
  const { signin } = useAuthStore()
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signinService = new SigninService()

  const handleSignin = async () => {
    if (email.length === 0 || password.length === 0) {
      alert("Please fill out all fields")
      return
    }

    const signinResponse = await signinService.signin(email, password)
    if (signinResponse) {
      signin(signinResponse.token, signinResponse)
      router.push("/")
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  return (
    <>
      <SigninView
        handleSignin={handleSignin}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        email={email}
        password={password}
      />
    </>
  )
}

export default SigninContainer
