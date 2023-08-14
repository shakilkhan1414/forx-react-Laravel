import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import AppStorage from '../../helpers/AppStorage';

export const index = () => {

    const[links,setLinks]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const [filteredLink,setFilteredLink]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{

        if(AppStorage.getUserType()!='admin'){
            navigate('/')
        }
        getLinks()

    },[])

    useEffect(()=>{
        setFilteredLink(()=>{
            return links.filter(link=>{
                return link.type.toLowerCase().match(searchTerm.toLowerCase()) || link.link.toLowerCase().match(searchTerm.toLowerCase())
            })
        })

    },[searchTerm])

    useEffect(()=>{
        setFilteredLink(links)

    },[links])


    const getLinks=()=>{
        axios.get('/api/link')
        .then((res)=>{
            setLinks((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <>
        <div className="pagetitle">
            <h1>Links</h1>
            <nav>
                <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item"><Link to='/dashboard'>Home</Link></li>
                <li className="breadcrumb-item active">Links</li>
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
                    <th scope="col">Type</th>
                    <th scope="col">Link</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredLink.map((link,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{link.type}</td>
                        <td>{link.link}</td>
                        <td>
                            <Link to={`/links/edit/${link.id}`} className='btn btn-primary btn-sm mx-1 mb-1'>Edit</Link>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        {links.length==0 && <div className='text-center'> <ClipLoader color="#4154f1" /></div>}
    </div>

    </>
  )
}

