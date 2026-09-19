import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ProfileNavBar from '../components/ProfileNavBar'

const ProfileLayout = () => {
  return (
    <div>
      <ProfileNavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ProfileLayout
