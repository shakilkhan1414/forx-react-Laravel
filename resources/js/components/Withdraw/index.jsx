import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const index = () => {

    const[withdraws,setWithdraws]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const [filteredWithdraw,setFilteredWithdraw]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{

        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        getWithdraws()

    },[])

    useEffect(()=>{
        setFilteredWithdraw(()=>{
            return withdraws.filter(withdraw=>{
                return withdraw.user.name.toLowerCase().match(searchTerm.toLowerCase()) || withdraw.withdraw_number.toLowerCase().match(searchTerm.toLowerCase())
            })
        })

    },[searchTerm])

    useEffect(()=>{
        setFilteredWithdraw(withdraws)

    },[withdraws])


    const getWithdraws=()=>{
        axios.get('/api/withdraw')
        .then((res)=>{
            setWithdraws((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const approveStatus=(id)=>{

        const formData={
            status: '1'
        }

        axios.patch('/api/withdraw/'+id,formData)
        .then(() => {
            Notification.success()
            getWithdraws()
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

        axios.patch('/api/withdraw/'+id,formData)
        .then(() => {
            Notification.success()
            getWithdraws()
        })
        .catch(error=> {
                console.log(error)
            }
        )
    }


  return (
    <>
        <div className="pagetitle">
            <h1>Withdraws</h1>
            <nav>
                <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
                <li className="breadcrumb-item active">Withdraws</li>
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
                    <th scope="col">Withdraw Method</th>
                    <th scope="col">Withdraw Number</th>
                    <th scope="col">Withdraw Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredWithdraw.map((withdraw,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{withdraw.user.name}</td>
                        <td>{withdraw.withdraw_method}</td>
                        <td>{withdraw.withdraw_number}</td>
                        <td>{withdraw.withdraw_amount}</td>
                        <td>
                            {!withdraw.status && <span class="badge bg-warning text-dark">Pending</span>}
                            {withdraw.status=='1' && <span class="badge bg-success">Approved</span>}
                            {withdraw.status=='0' && <span class="badge bg-danger">Rejected</span>}

                        </td>
                        <td>{new Date(withdraw.created_at).toLocaleDateString()}</td>
                        <td>
                            {!withdraw.status && (
                                <>
                                <button onClick={approveStatus.bind(null,withdraw.id)} className="btn btn-primary btn-sm mx-1 mb-1">Approve</button>
                                <button onClick={rejectStatus.bind(null,withdraw.id)} className="btn btn-danger btn-sm mx-1 mb-1">Reject</button>
                                </>
                            )}

                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        {withdraws.length==0 && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    </div>

    </>
  )
}

