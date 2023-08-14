import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const index = () => {

    const[deposits,setDeposits]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const [filteredDeposit,setFilteredDeposit]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{

        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        getDeposits()

    },[])

    useEffect(()=>{
        setFilteredDeposit(()=>{
            return deposits.filter(deposit=>{
                return deposit.user.name.toLowerCase().match(searchTerm.toLowerCase()) || deposit.send_from.toLowerCase().match(searchTerm.toLowerCase()) || deposit.transaction_id.toLowerCase().match(searchTerm.toLowerCase())
            })
        })

    },[searchTerm])

    useEffect(()=>{
        setFilteredDeposit(deposits)

    },[deposits])


    const getDeposits=()=>{
        axios.get('/api/deposit')
        .then((res)=>{
            setDeposits((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const approveStatus=(id)=>{

        const formData={
            status: '1'
        }

        axios.patch('/api/deposit/'+id,formData)
        .then(() => {
            Notification.success()
            getDeposits()
        })
        .catch(error=> {
                console.log(error)
            }
        )
    }

    const rejectStatus=(id)=>{

        const formData={
            status: '0'
        }

        axios.patch('/api/deposit/'+id,formData)
        .then(() => {
            Notification.success()
            getDeposits()
        })
        .catch(error=> {
                console.log(error)
            }
        )
    }


  return (
    <>
        <div className="pagetitle">
            <h1>Deposits</h1>
            <nav>
                <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
                <li className="breadcrumb-item active">Deposits</li>
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
                    <th scope="col">Name</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Sender Number</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredDeposit.map((deposit,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{deposit.user.name}</td>
                        <td>{deposit.payment_method}</td>
                        <td>{deposit.send_from}</td>
                        <td>{deposit.amount}</td>
                        <td>{deposit.transaction_id}</td>
                        <td>
                            {!deposit.status && <span class="badge bg-warning text-dark">Pending</span>}
                            {deposit.status=='1' && <span class="badge bg-success">Approved</span>}
                            {deposit.status=='0' && <span class="badge bg-danger">Rejected</span>}

                        </td>
                        <td>{new Date(deposit.created_at).toLocaleDateString()}</td>
                        <td>
                            {!deposit.status && (
                                <>
                                <button onClick={approveStatus.bind(null,deposit.id)} className="btn btn-primary btn-sm mx-1 mb-1">Approve</button>
                                <button onClick={rejectStatus.bind(null,deposit.id)} className="btn btn-danger btn-sm mx-1 mb-1">Reject</button>
                                </>
                            )}

                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        {deposits.length==0 && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    </div>

    </>
  )
}

