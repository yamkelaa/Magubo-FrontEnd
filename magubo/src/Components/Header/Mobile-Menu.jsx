import Socials from "../Socials-Bar/Socials"

const MobileMenu = ({mobileOpen, setMobileOpen}) => {
  return (
    <section className="mobile-menu-component">
       <div className="logo-and-icon-mobile">
        <div className="logo-container"></div> 
        <p>makhiwane</p>
       </div>

       <ul aria-label="mobile-menu navigation">
        <li><a href="">Services</a></li>
        <li><a href="">Savings Calculator</a></li>
        <li><a href="">Mission Statement</a></li>
        <li><a href="">About Us</a></li>
       </ul>

        <Socials></Socials>

    <button className="close" onClick={()=>setMobileOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
    </button>
    </section>
  )
}
export default MobileMenu