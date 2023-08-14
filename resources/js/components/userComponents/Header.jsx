import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import AppStorage from '../../helpers/AppStorage'

export const Header = (props) => {

    const [loggedIn,setLoggedIn]=useState(false)
    const [user,setUser]=useState(false)
    const [links,setLink]=useState(false)

    const signupFormRef = useRef(null);
    const loginFormRef = useRef(null);

    const [sidebar,setSidebar]=useState(false)
    const [loginModal,setLoginModal]=useState(false)
    const [signupModal,setSignupModal]=useState(false)

    const name=useRef('')
    const email=useRef('')
    const phone=useRef('')
    const password=useRef('')
    const password_confirmation=useRef('')

    const [nameError,setNameError]=useState('')
    const [emailError,setEmailError]=useState('')
    const [phoneError,setPhoneError]=useState('')
    const [passwordError,setPasswordError]=useState('')

    const loginEmail=useRef('')
    const loginPassword=useRef('')

    const [loginEmailError,setLoginEmailError]=useState('')
    const [loginPasswordError,setLoginPasswordError]=useState('')

    useEffect(()=>{
        if(User.loggedIn()){
            setLoggedIn(true)
        }

        if(props.loginView){
            setLoginModal(props.loginView)
        }
        if(props.signupView){
            setSignupModal(props.signupView)
        }
    })

    useEffect(()=>{
        getUser()
        getLinks()
    },[])

    const getUser=()=>{

    const token= AppStorage.getToken()

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

    const getLinks=()=>{
        axios.get('/api/link')
        .then((res)=>{
            setLink((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const hotItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Hot Games').link;
        }
        else{
            toggleLoginModal()
        }
    }

    const cricketItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Cricket').link;
        }
        else{
            toggleLoginModal()
        }
    }

    const casinoItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Casino').link;
        }
        else{
            toggleLoginModal()
        }
    }

    const sportsItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Sports').link;
        }
        else{
            toggleLoginModal()
        }
    }

    const crushItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Crush').link;
        }
        else{
            toggleLoginModal()
        }
    }

    const toggleSidebar=()=>{
        setSidebar(()=>{
            return !sidebar
        })
    }

    const toggleLoginModal=()=>{
        setLoginModal(()=>{
            return !loginModal
        })
        if(props.loginView){
            props.loginViewHandeler()
        }
    }

    const toggleSignupModal=()=>{
        setSignupModal(()=>{
            return !signupModal
        })
        if(props.signupView){
            props.signupViewHandeler()
        }
    }

    const toggleModal=()=>{
        toggleLoginModal()
        toggleSignupModal()
    }

    const loginHandler=(e)=>{
        e.preventDefault()
        const formData={
            email: loginEmail.current.value,
            password: loginPassword.current.value
        }

        axios.post('/api/auth/login',formData)
        .then(res => {
            User.responseAfterLogin(res)
            Toast.fire({
            icon: 'success',
            title: 'Logged in successfully!'
            })
            getUser()
            toggleLoginModal()

            if(props.toggleLogin){
                props.toggleLogin()
            }
        })
        .catch(error=> {
                if(error.response.status === 401){
                    Toast.fire({
                    icon: 'warning',
                    title: 'Invalid Email or Password!'
                    })
                    setLoginEmailError('')
                    setLoginPasswordError('')
                }
                else if(error.response.status === 422){
                    setLoginEmailError(()=>{
                        return error.response.data.errors.email ? 'Email or phone required.' : ''
                    })
                    setLoginPasswordError(()=>{
                        return error.response.data.errors.password ? error.response.data.errors.password[0] : ''
                    })

                }
            }
        )
    }

    const signupHandler=(e)=>{
        e.preventDefault()
        const formData={
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value,
            password:password.current.value,
            password_confirmation:password_confirmation.current.value
        }

        axios.post('/api/auth/signup',formData)
        .then(res => {
            User.responseAfterLogin(res)
            Toast.fire({
            icon: 'success',
            title: 'Signed in successfully!'
            })
            signupFormRef.current.reset();
            getUser()
            toggleSignupModal()


        })
        .catch(error=> {
                if(error.response.status === 422){
                    setNameError(()=>{
                        return error.response.data.errors.name ? error.response.data.errors.name[0] : ''
                    })
                    setPhoneError(()=>{
                        return error.response.data.errors.phone ? error.response.data.errors.phone[0] : ''
                    })
                    setEmailError(()=>{
                        return error.response.data.errors.email ? error.response.data.errors.email[0] : ''
                    })
                    setPasswordError(()=>{
                        return error.response.data.errors.password ? error.response.data.errors.password[0] : ''
                    })

                }
            }
        )
    }

  return (
    <>
        <header className='container-fluid desk-show'>
            <div className="row py-2">
                <div className="col-md-6">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/img/logo2.png" height='50' />
                    </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    {!loggedIn ? (
                        <>
                        <a onClick={toggleLoginModal} className="btn btn-dark mx-2 text-warning head-btn">প্রবেশ করুন</a>
                        <a onClick={toggleSignupModal} className="btn btn-warning text-dark mx-2 head-btn">নিবন্ধন করুন</a>
                        </>
                    ) :

                (
                <nav className="header-nav ms-auto d-flex justify-content-center align-items-center">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li><h5 className='mb-0 balance'><b>৳ {user.balance}</b></h5></li>
                        <li className="nav-item dropdown pe-3">
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src="/assets/img/user.png" alt="Profile" className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem('user')}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                            <h6>{localStorage.getItem('user')}</h6>
                            <span className='user_type'>{localStorage.getItem('userType') && localStorage.getItem('userType').replace('_', ' ')}</span>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <Link className="dropdown-item d-flex align-items-center" to="/account">
                                <i className="bi bi-person"></i>
                                <span>My Profile</span>
                            </Link>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>

                            <li>
                            <Link className="dropdown-item d-flex align-items-center" to="/account/edit">
                                <i className="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </Link>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <Link to="/logout" className="dropdown-item d-flex align-items-center">
                                <i className="bi bi-box-arrow-right"></i>
                                <span>Sign Out</span>
                            </Link>
                            </li>

                        </ul>
                        </li>

                    </ul>
                    </nav>
                           ) }
                </div>
            </div>
        </header>

        <header className='container-fluid mobile-show home-header'>
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <i onClick={toggleSidebar} className="bi bi-list toggle-sidebar-btn header-bar close"></i>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/img/logo2.png" className='img-fluid' />
                    </Link>
                </div>
                <div className="col-4 d-flex justify-content-end">

                {loggedIn && (

                <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center ">
                    <li className='text-end'>
                        <h5 className='mb-0 balance'><b>৳{user.balance}</b></h5>
                    </li>
                    <li className="nav-item dropdown ">
                    <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="/assets/img/user.png" alt="Profile" className="rounded-circle" />
                        <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem('user')}</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li className="dropdown-header">
                        <h6>{localStorage.getItem('user')}</h6>
                        <span className='user_type'>{localStorage.getItem('userType') && localStorage.getItem('userType').replace('_', ' ')}</span>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <Link className="dropdown-item d-flex align-items-center" to="/account">
                            <i className="bi bi-person"></i>
                            <span>My Profile</span>
                        </Link>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>

                        <li>
                        <Link className="dropdown-item d-flex align-items-center" to="/account/edit">
                            <i className="bi bi-gear"></i>
                            <span>Account Settings</span>
                        </Link>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <Link to="/logout" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Sign Out</span>
                        </Link>
                        </li>

                    </ul>
                    </li>

                </ul>
                </nav>

                )}


                </div>
            </div>
        </header>

         <section className='container-fluid bg-dark desk-menu'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <a className="nav-link text-warning" onClick={hotItemClick}>হটগেমস</a>
                        </li>
                        <li className="nav-item mx-3 first-menu">
                            <a className="nav-link text-warning" onClick={cricketItemClick}>ক্রিকেট</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-warning" onClick={casinoItemClick}>ক্যাসিনো</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-warning" onClick={sportsItemClick}>স্পোর্টস</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-warning" onClick={crushItemClick}>ক্র্যাশ</a>
                        </li>
                        {loggedIn && (
                            <>
                                <li className="nav-item mx-3">
                                    <Link to="/deposit" className="nav-link text-warning">আমানত</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to="/deposit" className="nav-link text-warning">উত্তোলন</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                </nav>
            </div>
        </section>



        <section className={'sidebar-menu bg-body' + (sidebar ? ' active' : '')}>
            <div className='container-fluid'>
                <div className="row d-flex align-items-center">
                    <div className="col-3">

                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link to="/" className="navbar-brand">
                            <img src="/assets/img/logo2.png" className='img-fluid' />
                        </Link>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <i onClick={toggleSidebar} className="bi bi-list toggle-sidebar-btn header-bar close"></i>
                    </div>
                </div>
            </div>

            <div className='container-fluid pt-3'>
                <div className="row d-flex align-items-center">
                    <div className="col-12 mobile-menu">

                    </div>
                    <hr />
                    <div className="col-12 mobile-menu">
                        <a onClick={hotItemClick}><img src="/assets/img/rng.svg" />হটগেমস</a>
                        <a onClick={cricketItemClick}><img src="/assets/img/cricket.svg" />ক্রিকেট</a>
                        <a onClick={casinoItemClick}><img src="/assets/img/ld.svg" />ক্যাসিনো</a>
                        <a onClick={sportsItemClick}><img src="/assets/img/sb.svg" />স্পোর্টস</a>
                        <a onClick={crushItemClick}><img src="/assets/img/crash.svg" />ক্র্যাশ</a>
                    </div>
                    <hr className='mt-3' />
                    {loggedIn && (
                        <div className="col-12 mobile-menu">
                            <Link to="/deposit"><img src="/assets/img/143748-200.png" />ডিপোজিট</Link>
                            <Link to="/deposit"><img src="/assets/img/1682308.png" />উত্তোলন</Link>
                            <Link to="/logout"><img src="/assets/img/logout.svg" />প্রস্থান</Link>
                        </div>
                    )}

                </div>
            </div>
        </section>

        <section onClick={toggleSidebar} className={'bg-overlay' + (sidebar ? ' active' : '')}></section>

        {!loggedIn && (
            <section className='container-fluid mobile-show bottom-menu'>
                <div className="row">
                    <div className="col-6 p-0">
                        <a onClick={toggleLoginModal} className="btn btn-dark text-warning btn-lg btn-block rounded-0">প্রবেশ করুন</a>
                    </div>
                    <div className="col-6 p-0">
                        <a onClick={toggleSignupModal} className="btn btn-warning text-dark btn-lg btn-block rounded-0">নিবন্ধন করুন</a>
                    </div>
                </div>
            </section>
        )}


        {loggedIn && (
            <section className='container-fluid mobile-show bottom-menu bg-dark'>
                <div className="row">
                    <div className="col-4 p-0">
                        <Link to='/' className="btn btn-dark text-warning btn-block rounded-0 p-2">
                            <img src="/assets/img/home.svg" height='25' />
                            <h6 className='mt-2 mb-0'>বাড়ি</h6>
                        </Link>
                    </div>
                    <div className="col-4 p-0">
                        <Link to='/deposit' className="btn btn-dark text-warning btn-block rounded-0 p-2">
                            <img src="/assets/img/deposit.svg" height='25' />
                            <h6 className='mt-2 mb-0'>আমানত</h6>
                        </Link>
                    </div>
                    <div className="col-4 p-0">
                        <Link to='/account' className="btn btn-dark text-warning btn-block rounded-0 p-2">
                            <img src="/assets/img/account.svg" height='25' />
                            <h6 className='mt-2 mb-0'>হিসাব</h6>
                        </Link>
                    </div>
                </div>
            </section>
        )}


        <section className={'user-modal login-modal row d-flex justify-content-center align-items-center m-0' + (loginModal ? ' active' : '')}>
            <div className="col-md-3 bg-light rounded p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-8">
                        <h4 className='mb-0'>প্রবেশ করুন</h4>
                    </div>
                    <div className="col-4 text-end">
                        <i className="bi bi-x h1 close" onClick={toggleLoginModal}></i>
                    </div>
                </div>
                <hr className='mt-2 mb-3' />
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <form ref={loginFormRef} onSubmit={loginHandler}>
                            <div className="form-group mb-3">
                                <label htmlFor="loginEmail" className="form-label">ব্যবহারকারীর ফোন অথবা ইমেইল</label>
                                <input type="text" className="form-control" ref={loginEmail}></input>
                                {loginEmailError && <small className='text-danger'>{loginEmailError}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="loginPassword" className="form-label">গোপন নম্বর</label>
                                <input type="password" className="form-control" ref={loginPassword}></input>
                                {loginPasswordError && <small className='text-danger'>{loginPasswordError}</small>}
                            </div>
                            <div className="form-group mt-3  d-grid">
                                <button type="submit" className="btn btn-dark text-warning py-2"><b>প্রবেশ করুন</b></button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className='my-4'/>
                <div className="row d-flex align-items-center">
                    <div className="col-12 mb-3">
                        <h6 className='mb-0'>অ্যাকাউন্ট নেই?</h6>
                    </div>
                    <div className="col-12 d-grid">
                        <button type="submit" onClick={toggleModal} className="btn btn-warning text-dark text-warning py-2"><b>নিবন্ধন করুন</b></button>
                    </div>

                </div>
            </div>
        </section>



        <section className={'user-modal signup-modal row d-flex justify-content-center align-items-center m-0' + (signupModal ? ' active' : '')}>
            <div className="col-md-3 bg-light rounded p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-8">
                        <h4 className='mb-0'>নিবন্ধন করুন</h4>
                    </div>
                    <div className="col-4 text-end">
                        <i className="bi bi-x h1 close" onClick={toggleSignupModal}></i>
                    </div>
                </div>
                <hr className='mt-2 mb-3' />
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <form ref={signupFormRef} onSubmit={signupHandler}>
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">ব্যবহারকারীর নাম</label>
                                <input type="text" className="form-control" ref={name}></input>
                                {nameError && <small className='text-danger'>{nameError}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">ব্যবহারকারীর ইমেইল (ঐচ্ছিক)</label>
                                <input type="email" className="form-control" ref={email}></input>
                                {emailError && <small className='text-danger'>{emailError}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone" className="form-label">ব্যবহারকারীর ফোন নম্বর</label>
                                <input type="text" className="form-control" ref={phone}></input>
                                {phoneError && <small className='text-danger'>{phoneError}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">পাসওয়ার্ড</label>
                                <input type="password" className="form-control" ref={password}></input>
                                {passwordError && <small className='text-danger'>{passwordError}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="repassword" className="form-label">পাসওয়ার্ড নিশ্চিত করুন</label>
                                <input type="password" className="form-control" ref={password_confirmation}></input>
                            </div>
                            <div className="form-group mt-3  d-grid">
                                <button type="submit" className="btn btn-dark text-warning py-2"><b>নিবন্ধন করুন</b></button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className='my-4'/>
                <div className="row d-flex align-items-center">
                    <div className="col-12 mb-3">
                        <h6 className='mb-0'>ইতিমধ্যে একটি সদস্যপদ আছে?</h6>
                    </div>
                    <div className="col-12 d-grid">
                        <button type="submit" onClick={toggleModal} className="btn btn-warning text-dark text-warning py-2"><b>প্রবেশ করুন</b></button>
                    </div>

                </div>
            </div>
        </section>


    </>
  )
}
