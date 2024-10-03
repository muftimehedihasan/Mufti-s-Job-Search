import {Route,
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, 
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' index element={<HomePage/>}/>
      <Route path='/jobs' index element={<JobsPage/>}/>
      <Route path='*' index element={<NotFoundPage/>}/>
    </Route>
)
);



const App = () => {
  return (
    <>

    <RouterProvider router={router}/>

    {/* <!-- Navbar --> */}
    {/* <Navbar/> */}
    {/* <!-- Hero --> */}
    {/* <Hero/> */}
    {/*<!-- Developers and Employers --> */}
    {/* <HomeCards/> */}
    {/* <!-- Browse Jobs --> */}
    {/* <JobListings/> */}
    {/* <!-- View All Jobs --> */}
    {/* <ViewAllJobs/> */}

 


    </>
  )
}

export default App