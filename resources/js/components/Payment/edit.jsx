import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const edit = () => {

    const [method, setMethod]=useState('')
    const [number, setNumber]=useState('')


    const [numberError,setNumberError]=useState('')

    const [loading, setLoading]=useState(true)

    const {id}=useParams()

    const navigate=useNavigate()

    useEffect(()=>{
        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        paymentData()
    },[])

    const paymentData=()=>{
        axios.get('/api/payment/'+id)
        .then(res=>{
            setMethod(()=>{
                return res.data.method
            })

            setNumber(()=>{
                return res.data.number
            })
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const updatePaymentHandler=(e)=>{
        e.preventDefault()
        const formData={
            number: number
        }

        axios.patch('/api/payment/'+id,formData)
        .then(() => {
            Notification.success()
            navigate('/payments')
        })
        .catch(error=> {
                if(error.response.status === 422){
                    setNumberError(()=>{
                        return error.response.data.errors.number ? error.response.data.errors.number[0] : ''
                    })

                }
            }
        )
    }

  return (
    <>
    <div className="pagetitle">
        <h1>Edit Payment Info</h1>
        <nav>
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
            <li className="breadcrumb-item active">Edit Payment Info</li>
            </ol>
        </nav>
    </div>
    {loading && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    {!loading &&
        <div className='col-md-12'>
        <form onSubmit={updatePaymentHandler}>
            <div className="form-outline mb-2">
                <label className="form-label">Method</label>
                <input type="text" className="form-control" disabled value={method} onChange={(e) => setMethod(e.target.value)} />
            </div>

            <div className="form-outline mb-2">
                <label className="form-label">Number</label>
                <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                {numberError && <small className='text-danger'>{numberError}</small>}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Update Payment Info</button>

        </form>
    </div>

    }

    </>
  )
}
