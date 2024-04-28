
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='w-full bg-white text-dark-1 '>
        <section>
            <Outlet/>
        </section>
    </div>
  )
}

export default AuthLayout