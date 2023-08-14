import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const index = () => {

    const[payments,setPayments]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const [filteredPayment,setFilteredPayment]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{

        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        getPayments()

    },[])

    useEffect(()=>{
        setFilteredPayment(()=>{
            return payments.filter(payment=>{
                return payment.method.toLowerCase().match(searchTerm.toLowerCase()) || payment.number.toLowerCase().match(searchTerm.toLowerCase())
            })
        })

    },[searchTerm])

    useEffect(()=>{
        setFilteredPayment(payments)

    },[payments])


    const getPayments=()=>{
        axios.get('/api/payment')
        .then((res)=>{
            setPayments((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <>
        <div className="pagetitle">
            <h1>Payment Details</h1>
            <nav>
                <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
                <li className="breadcrumb-item active">Payment Details</li>
                </ol>
            </nav>
        </div>
        <div className="row mb-2">
            <div className="col-md-5 mb-1">
                <input type="text" className='form-control' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </div>

        <div className="table-responsive">
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Method</th>
                    <th scope="col">Number</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredPayment.map((payment,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{payment.method}</td>
                        <td>{payment.number}</td>
                        <td>
                            <Link to={`/payments/edit/${payment.id}`} className='btn btn-primary btn-sm mx-1 mb-1'>Edit</Link>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        {payments.length==0 && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    </div>

    </>
  )
}

