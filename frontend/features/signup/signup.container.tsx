import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { SignupService } from "../../services/signup/signup.service"
import SignupView from "./signup.view"

const SignupContainer = () => {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const signupService = new SignupService()

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters")
      return
    } else if (phone.length < 10) {
      alert("Phone number must be at least 10 characters")
      return
    } else if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      alert("Please fill out all fields")
      return
    }

    const user = { name, email, phone, password, confirmPassword }
    const signupResponse = await signupService.signup(user)
    if (signupResponse) {
      router.push("/signin")
    } else {
      alert("Something went wrong, please try again")
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPhone(e.target.value)
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setConfirmPassword(e.target.value)
  }

  return (
    <>
      <SignupView
        handleSignup={handleSignup}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        name={name}
        email={email}
        phone={phone}
        password={password}
        confirmPassword={confirmPassword}
      />
    </>
  )
}

export default SignupContainer
