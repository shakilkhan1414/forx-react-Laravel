import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AppStorage from '../helpers/AppStorage'
import { useState,useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {UserFooter} from './userComponents/UserFooter';
import { Header } from './userComponents/Header';

export const Account = () => {

    const navigate=useNavigate()

    useEffect(()=>{
        if(!User.loggedIn()){
            navigate('/')
        }
    })

    useEffect(()=>{
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=bc8a4e8294694ead8e9f70a461c6035b')
        .then(res => {
            let locationData=res.data.city +', '+ res.data.country_name
            setFlag(res.data.country_flag)
            setLocation(locationData)
        })
        .catch((error) => {
            console.log(error);
        })
        getUser()
    },[]);


    const [user,setUser]=useState(false)
    const token= AppStorage.getToken()

    const [location,setLocation]=useState('')
    const [flag,setFlag]=useState('')

    const getUser=()=>{
        axios.post('/api/auth/me',{},{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then((res)=>{
            setUser(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <>

        <Header/>

        <section className="container-fluid pt-3">
            {!user && <div className='text-center'> <ClipLoader color="#ffc107" /></div>}

            {user &&
                <section className="section profile">
            <div className="row">
                <div className="col-xl-4">

                <div className="card">
                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                    <img src="/assets/img/user.png" alt="Profile" className="rounded-circle" />
                    <h2>{user.name}</h2>
                    <h3>{user.username}</h3>

                    </div>
                </div>

                </div>

                <div className="col-xl-8">

                <div className="card">
                    <div className="card-body pt-3">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 className="card-title">Profile Details</h5>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Name</div>
                            <div className="col-lg-9 col-md-8">{user.name}</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Username</div>
                            <div className="col-lg-9 col-md-8">{user.username}</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Email</div>
                            <div className="col-lg-9 col-md-8">{user.email}</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Phone</div>
                            <div className="col-lg-9 col-md-8">{user.phone}</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Balance</div>
                            <div className="col-lg-9 col-md-8">৳ {user.balance}</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Location</div>
                            {location ? <div className="col-lg-9 col-md-8">{location} <img className='flag' src={flag} /></div> : <div className="col-lg-9 col-md-8">Loading...</div>}

                        </div>

                        <Link to='/account/edit' className='btn btn-warning mt-2'>Edit</Link>
                    </div>
                </div>
                </div>

                </div>
            </div>
            </section>

            }
        </section>

        <UserFooter/>

    </>
  )
}
