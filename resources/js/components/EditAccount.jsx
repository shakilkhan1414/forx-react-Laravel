import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AppStorage from '../helpers/AppStorage'
import { useState,useEffect,useRef } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {UserFooter} from './userComponents/UserFooter';
import { Header } from './userComponents/Header';

export const EditAccount = () => {

    const navigate=useNavigate()

    useEffect(()=>{
        if(!User.loggedIn()){
            navigate('/')
        }
    })

    useEffect(()=>{
        getUser()
    },[]);


    const [loading,setLoading]=useState(true)

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [userType, setUserType]=useState('')
    const [id, setId]=useState('')
    const newPassword=useRef('')
    const confirmPassword=useRef('')

    const [nameError,setNameError]=useState('')
    const [emailError,setEmailError]=useState('')
    const [phoneError,setPhoneError]=useState('')
    const [passwordError,setPasswordError]=useState(false)

    const token= AppStorage.getToken()

    const getUser=()=>{
        axios.post('/api/auth/me',{},{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then((res)=>{
            setName(()=>{
                return res.data.name
            })

            setEmail(()=>{
                return res.data.email
            })
            setPhone(()=>{
                return res.data.phone
            })
            setId(()=>{
                return res.data.id
            })
            setUserType(()=>{
                return res.data.user_type.id
            })

            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const updateUserHandler=(e)=>{
        e.preventDefault()
        const formData={
            name: name,
            email: email,
            phone: phone,
            user_type: userType
        }

        if(newPassword.current.value!=''){
            if(newPassword.current.value != confirmPassword.current.value){
                setPasswordError(true)
                return
            }
            else{
                formData["password"] = newPassword.current.value;
            }
        }

        axios.patch('/api/user/'+id,formData)
        .then(() => {
            Notification.success()
            navigate('/account')
        })
        .catch(error=> {
                if(error.response.status === 422){
                    setNameError(()=>{
                        return error.response.data.errors.name ? error.response.data.errors.name[0] : ''
                    })
                    setEmailError(()=>{
                        return error.response.data.errors.email ? error.response.data.errors.email[0] : ''
                    })
                    setPhoneError(()=>{
                        return error.response.data.errors.phone ? error.response.data.errors.phone[0] : ''
                    })

                }
            }
        )
    }


  return (
    <>

        <Header/>

        <section className="container py-4">
        {loading && <div className='text-center'> <ClipLoader color="#ffc107" /></div>}
        {!loading &&
            <div className='col-md-12'>
                <h3>Edit Profile</h3>
                <form onSubmit={updateUserHandler}>
                    <div className="form-outline mb-2">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        {nameError && <small className='text-danger'>{nameError}</small>}
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <small className='text-danger'>{emailError}</small>}
                    </div>

                    <div className="form-outline mb-2">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        {phoneError && <small className='text-danger'>{phoneError}</small>}
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" ref={newPassword} />
                        {passwordError && <small className='text-danger'>The password confirmation does not match.</small>}
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" ref={confirmPassword} />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block mb-4">Update Profile</button>

                </form>
            </div>
        }
        </section>

        <UserFooter/>

    </>
  )
}
