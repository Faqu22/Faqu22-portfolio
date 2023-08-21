import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Loader from './components/Loader'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Resume = lazy(() => import('./pages/Resume'))

const router = createHashRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loader />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: '/about',
        element: (
            <Suspense fallback={<Loader />}>
                <About />
            </Suspense>
        ),
    },
    {
        path: '/projects',
        element: (
            <Suspense fallback={<Loader />}>
                <Projects />
            </Suspense>
        ),
    },
    {
        path: '/resume',
        element: (
            <Suspense fallback={<Loader />}>
                <Resume />
            </Suspense>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
