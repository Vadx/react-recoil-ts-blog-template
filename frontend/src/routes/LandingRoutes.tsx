import LandingLayout from '../layout/LandingLayout'
import AboutPage from '../pages/AboutPage'
import ContactUsPage from '../pages/ContactUsPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

const LandingRoutes = {
  path: '/',
  element: <LandingLayout />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/contact-us',
      element: <ContactUsPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
  ],
}

export default LandingRoutes
