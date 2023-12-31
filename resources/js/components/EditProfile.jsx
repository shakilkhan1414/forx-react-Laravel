import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import AppStorage from '../helpers/AppStorage'
import ClipLoader from "react-spinners/ClipLoader";

export const EditProfile = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [id, setId]=useState('')
    const [userType, setUserType]=useState('')
    const newPassword=useRef('')
    const confirmPassword=useRef('')

    const [nameError,setNameError]=useState('')
    const [emailError,setEmailError]=useState('')
    const [phoneError,setPhoneError]=useState('')
    const [passwordError,setPasswordError]=useState(false)

    const [loading,setLoading]=useState(true)

    const navigate=useNavigate()
    const token= AppStorage.getToken()

    useEffect(()=>{
        if(!User.loggedIn()){
            navigate('/')
        }
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


    },[])


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
            navigate('/user/profile')
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
    <div className="pagetitle">
        <h1>Edit Profile</h1>
        <nav>
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
            <li className="breadcrumb-item active">Edit Profile</li>
            </ol>
        </nav>
    </div>
    {loading && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    {!loading &&
        <div className='col-md-12'>
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

                <button type="submit" className="btn btn-primary btn-block mb-4">Update Profile</button>

            </form>
        </div>
    }

    </>
  )
}

