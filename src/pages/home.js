'use client'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRouter } from 'next/navigation'
import React from 'react'
import Questions from '../screens/questions/questions'
import Users from '../screens/users/users'
import Dashboard from './dashboard';

const HomeScreen = () => {
  const router = useRouter()
  return (
    <Router>
      <div className="flex h-screen w-full">
        <div className="relative flex-none w-1/6 bg-background text-tahiti h-full">
          <div className="flex mt-5 pb-5 justify-center w-full inset-x-0 top-0 border-b-2 border-white-500">
            <h2>Admin Name</h2>
          </div>
          <div className="flex mt-5 justify-center text-tahiti">
            <ul>
              <li><Link to={'/'}>Dashboard</Link></li>
              <li><Link to={'/home/questions'}>Question Master</Link></li>
              <li><Link to={'/home/users'}>Users List</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex h-full w-full bg-foreground">
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/home/questions' element={<Questions/>}></Route>
            <Route path='/home/users' element={<Users/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default HomeScreen
