
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

const RootLayout = () => {
  return (
    <div className=''>
      <Navbar />
      <section className=''>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout