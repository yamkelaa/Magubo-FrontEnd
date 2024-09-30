import {Outlet} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
const Layout = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
