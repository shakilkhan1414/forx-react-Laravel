import React from 'react'
import AppStorage from '../helpers/AppStorage';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Header } from './Layouts/Header'
import { ContentWrapper } from './Layouts/ContentWrapper'
import { Login } from './Auth/Login'
import { Signup } from './Auth/Signup'
import { Wrapper } from './Layouts/Wrapper'
import { Dashboard } from './Dashboard'
import { Logout } from './Auth/Logout'
import { SideBar } from './Layouts/SideBar'
import { index as Users } from './User'
import { create as CreateUser } from './User/create'
import { edit as EditUser } from './User/edit'
import { index as Deposits } from './Deposit'
import { index as Withdraws } from './Withdraw'
import { index as Payments } from './Payment'
import { edit as EditPayment } from './Payment/edit'
import { index as Links } from './Link'
import { edit as EditLink } from './Link/edit'
import { Profile } from './Profile'
import { EditProfile } from './EditProfile'
import { Account } from './Account'
import { EditAccount } from './EditAccount'
import { UserDeposit } from './UserDeposit'
import { NotFound } from './NotFound'

import { Home } from './Home'


export const App = () => {
    const [sidebar,setSidebar]=useState(false)
    const[viewLayout,setViewLayout]=useState(false)
    const[styleControl,setStyleControl]=useState(true)
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname=='/' || location.pathname=='/admin' || location.pathname=='/signup' || location.pathname=='/account' || location.pathname=='/account/edit'  || location.pathname=='/deposit'){
            setViewLayout(()=>{
                return false
            })
            setSidebar(()=>{
                return false
            })
        }
        else{
            setViewLayout(()=>{
                return true
            })
            setSidebar(()=>{
                return true
            })
        }

        if(location.pathname=='/' || location.pathname=='/account' || location.pathname=='/account/edit' || location.pathname=='/deposit'){
            setStyleControl(()=>{
                return false
            })
        }
    },[location])


    const toggleSidebar=()=>{
        setSidebar(()=>{
            return !sidebar
        })
    }

  return (
    <Wrapper view={sidebar}>

        {viewLayout && <Header toggleSidebar= {toggleSidebar}/>}
        {viewLayout && <SideBar/>}

        <ContentWrapper styleControl={styleControl}>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/account' exact element={<Account/>}></Route>
                <Route path="/account/edit" element={<EditAccount />} />
                <Route path='/admin' exact element={<Login/>}></Route>

                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>

                <Route path='/users' element={<Users/>}></Route>
                <Route path="/users/create" element={<CreateUser />} />
                <Route path="/users/edit/:id" element={<EditUser />} />

                <Route path='/deposits' element={<Deposits/>}></Route>
                <Route path='/deposit' element={<UserDeposit/>}></Route>

                <Route path='/withdraws' element={<Withdraws/>}></Route>

                <Route path='/payments' element={<Payments/>}></Route>
                <Route path="/payments/edit/:id" element={<EditPayment />} />

                <Route path='/links' element={<Links/>}></Route>
                <Route path="/links/edit/:id" element={<EditLink />} />

                <Route path="/user/profile" element={<Profile />} />
                <Route path="/user/profile/edit" element={<EditProfile />} />

{/*
                <Route path='*' element={<NotFound/>}></Route> */}
            </Routes>
        </ContentWrapper>
    </Wrapper>
  )
}
