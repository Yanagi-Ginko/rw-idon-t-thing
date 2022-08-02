import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <div className="banner">
        <div className="navBar">
          <div className="logo">
            <Link to={routes.dashboard()}>
              <h1>ThiênNghĩa</h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link to={routes.dashboard()}>home</Link>
            </li>
            <li>
              <Link to={routes.dashboard()}>DashBoard</Link>
            </li>
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
            <li>
              <Link to={routes.dashboard()}>Shop</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h1>THIẾT KẾ NGÔI NHÀ CỦA BẠN</h1>
          <br />
          <p>Hãy để đó là nơi khiến bạn hạnh phúc nhất</p>
        </div>
      </div>
    </>
  )
}

export default LandingPage
