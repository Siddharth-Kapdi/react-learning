/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileLayout from '../layouts/ProfileLayout'
import ProtectedRoute from './ProtectedRoute'
import Loading from '../components/Loading'

const Home = lazy(() => import('../pages/Home'))
const Product = lazy(() => import('../pages/Product'))
const ProductDetails = lazy(() => import('../pages/ProductDetails'))
const Login = lazy(() => import('../pages/Login'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Profile = lazy(() => import('../pages/Profile/Profile'))
const WishList = lazy(() => import('../pages/Profile/WishList'))
const Checkout = lazy(() => import('../pages/Profile/Checkout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'product',
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
        loader: async () => {
          const res = await fetch('https://dummyjson.com/products?limit=8')
          const data = await res.json()
          return data.products
        },
      },
      {
        path: 'product/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
        loader: async ({ params }) => {
          const res = await fetch(`https://dummyjson.com/products/${params.id}`)
          const data = await res.json()
          return data
        },
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfileLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Profile /> },
      { path: 'wishlist', element: <WishList /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
])

export default router
