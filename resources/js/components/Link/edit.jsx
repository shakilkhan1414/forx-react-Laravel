import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const edit = () => {

    const [type, setType]=useState('')
    const [link, setLink]=useState('')

    const [linkError,setLinkError]=useState('')

    const [loading, setLoading]=useState(true)

    const {id}=useParams()

    const navigate=useNavigate()

    useEffect(()=>{
        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        linkData()
    },[])

    const linkData=()=>{
        axios.get('/api/link/'+id)
        .then(res=>{
            setType(()=>{
                return res.data.type
            })

            setLink(()=>{
                return res.data.link
            })
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const updateLinkHandler=(e)=>{
        e.preventDefault()
        const formData={
            link: link
        }

        axios.patch('/api/link/'+id,formData)
        .then(() => {
            Notification.success()
            navigate('/links')
        })
        .catch(error=> {
                if(error.response.status === 422){
                    setLinkError(()=>{
                        return error.response.data.errors.link ? error.response.data.errors.link[0] : ''
                    })

                }
            }
        )
    }

  return (
    <>
    <div className="pagetitle">
        <h1>Edit Link</h1>
        <nav>
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
            <li className="breadcrumb-item active">Edit Link</li>
            </ol>
        </nav>
    </div>
    {loading && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    {!loading &&
        <div className='col-md-12'>
        <form onSubmit={updateLinkHandler}>
            <div className="form-outline mb-2">
                <label className="form-label">Type</label>
                <input type="text" className="form-control" disabled value={type} onChange={(e) => setType(e.target.value)} />
            </div>

            <div className="form-outline mb-2">
                <label className="form-label">Link</label>
                <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} />
                {linkError && <small className='text-danger'>{linkError}</small>}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Update Link</button>

        </form>
    </div>

    }

    </>
  )
}
