import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'
const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>

      <p>
        Find me in
        <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>

      <p>
        <Link to={routes.landing()}>LandingPage</Link>
      </p>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
          <Link to={routes.signup()}>Sign Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
    </>
  )
}

export default HomePage
