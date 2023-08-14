import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../helpers/AppStorage';

export const Dashboard = () => {

    const[users,setUsers]=useState('')
    const[deposits,setDeposits]=useState('')
    const[totalAmount,setTotalAmount]=useState('')
    const[withdraws,setWithdraws]=useState('');
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()

    useEffect(()=>{
        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        getUsers()
        getDeposits()
        getWithdraws()

    },[])

    useEffect(()=>{
        if(!users || !deposits || !totalAmount || !withdraws){
            setLoading(true)
        }
        else{
            setLoading(false)
        }
    },[users,deposits,totalAmount,withdraws])

    const getUsers=()=>{
        axios.get('/api/user')
        .then((res)=>{
            setUsers(res.data.length)
        })
    }

    const getDeposits=()=>{
        axios.get('/api/deposit')
        .then((res)=>{

            if(res.data.length == 0){
                setDeposits('0')
            }
            else{
                setDeposits(res.data.length)
            }

            setTotalAmount(()=>{
                if(res.data.length==0){
                    return '0'
                }
                else{
                    return res.data.reduce((sum, deposit) => sum + parseInt(deposit.amount), 0);
                }
            })
        })
    }

    const getWithdraws=()=>{
        axios.get('/api/withdraw')
        .then((res)=>{

            if(res.data.length == 0){
                setWithdraws('0')
            }
            else{
                setWithdraws(res.data.length)
            }

        })
    }

  return (
    <>
        <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>
        {loading && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}

        {!loading &&

        <section className="section dashboard">
            <div className="row">

            <div className="col-xxl-4 col-md-4">
                <Link to='/users' className="card info-card sales-card">
                    <div className="card-body">
                    <h5 className="card-title">Total Users</h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                        <h6>{users}</h6>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>


                <div className="col-xxl-4 col-md-4">
                <Link to='/deposits' className="card info-card revenue-card">
                    <div className="card-body">
                    <h5 className="card-title">Total Deposits</h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-menu-button-wide"></i>
                        </div>
                        <div className="ps-3">
                        <h6>{deposits}</h6>
                        </div>
                    </div>
                    </div>

                </Link>
                </div>

                <div className="col-xxl-4 col-md-4">
                <Link to='/deposits' className="card info-card revenue-card">
                    <div className="card-body">
                    <h5 className="card-title">Total Deposit Amount</h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                        <h6>৳ {totalAmount}</h6>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>

                <div className="col-xxl-4 col-md-4">
                <Link to='/withdraws' className="card info-card revenue-card">
                    <div className="card-body">
                    <h5 className="card-title">Total Withdrows</h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                        <h6>{withdraws}</h6>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>
        </div>
        </section>
        }

    </>
  )
}
