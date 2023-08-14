import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AppStorage from '../helpers/AppStorage';
import {UserFooter} from './userComponents/UserFooter';
import { Header } from './userComponents/Header';
import { useNavigate } from 'react-router-dom'

export const UserDeposit = (props) => {

    useEffect(()=>{
        getPayments()
        getUser()
    },[props.view])

    let id=User.id()
    const navigate=useNavigate()

    const depositFormRef = useRef(null);
    const withdrawFormRef = useRef(null);

    const [selectedOption, setSelectedOption] = useState('');
    const [balance, setBalance] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const depSender = useRef('');
    const depTrans = useRef('');

    const [depositPayTypeError,setDepositPayTypeError]=useState('')
    const [depositAmountError,setDepositAmountError]=useState('')
    const [depSenderError,setDepSenderError]=useState('')
    const [depTransError,setDepTransError]=useState('')

    const [selectedWithdrawOption, setSelectedWithdrawOption] = useState('');
    const withdrawAmount = useRef('');
    const withdrawNumber = useRef('');

    const [withdrawPayTypeError,setWithdrawPayTypeError]=useState('')
    const [withdrawAmountError,setWithdrawAmountError]=useState('')
    const [withdrawNumberError,setWithdrawNumberError]=useState('')

    const[payments,setPayments]=useState([]);

    const token= AppStorage.getToken()


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const handleWithdrawOptionChange = (event) => {
        setSelectedWithdrawOption(event.target.value);
      };

      const depositAmountChange=(value)=>{
        setDepositAmount(()=>{
            return value
        })
      }

    const getUser=()=>{
        axios.post('/api/auth/me',{},{
            headers: {
                Authorization: `Bearer ${token}`
              }
        })
        .then((res)=>{
            setBalance(()=>{
                return res.data.balance
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const getPayments=()=>{
        axios.get('/api/payment')
        .then((res)=>{
            setPayments((res.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const depositHandler=(e)=>{
        e.preventDefault()
        const formData={
            payment_method: selectedOption,
            amount: depositAmount,
            send_from: depSender.current.value,
            transaction_id:depTrans.current.value,
            user_id: id
        }

        axios.post('/api/deposit',formData)
        .then(() => {
            Toast.fire({
            icon: 'success',
            title: 'Deposit successfully!'
            })

            navigate('/')
        })
        .catch(error=> {
                if(error.response.status === 422){
                    setDepositPayTypeError(()=>{
                        return error.response.data.errors.payment_method ? error.response.data.errors.payment_method[0] : ''
                    })
                    setDepositAmountError(()=>{
                        return error.response.data.errors.amount ? error.response.data.errors.amount[0] : ''
                    })
                    setDepSenderError(()=>{
                        return error.response.data.errors.send_from ? error.response.data.errors.send_from[0] : ''
                    })
                    setDepTransError(()=>{
                        return error.response.data.errors.transaction_id ? error.response.data.errors.transaction_id[0] : ''
                    })

                }
            }
        )
    }

    const withdrawHandler=(e)=>{
        e.preventDefault()

        if(parseInt(withdrawAmount.current.value) > parseInt(balance) || parseInt(withdrawAmount.current.value)==0){
            setWithdrawAmountError('Not enough credit')
        }
        else{
            const formData={
                withdraw_method: selectedWithdrawOption,
                withdraw_amount: withdrawAmount.current.value,
                withdraw_number: withdrawNumber.current.value,
                user_id: id
            }

            axios.post('/api/withdraw',formData)
            .then(() => {
                Toast.fire({
                icon: 'success',
                title: 'Withdraw successfully!'
                })

                setBalance(()=>{
                    return parseInt(balance)-parseInt(formData.withdraw_amount)
                })
                navigate('/')

            })
            .catch(error=> {
                    if(error.response.status === 422){
                        setWithdrawPayTypeError(()=>{
                            return error.response.data.errors.withdraw_method ? error.response.data.errors.withdraw_method[0] : ''
                        })
                        setWithdrawAmountError(()=>{
                            return error.response.data.errors.withdraw_amount ? error.response.data.errors.withdraw_amount[0] : ''
                        })
                        setWithdrawNumberError(()=>{
                            return error.response.data.errors.	withdraw_number ? error.response.data.errors.	withdraw_number[0] : ''
                        })

                    }
                }
            )
        }

    }


  return (
    <>

        <Header/>

        <section id='home-tab' className={'deposit-modal row d-flex justify-content-center align-items-center m-0'}>
        <div className="col-md-5 bg-light rounded px-3 py-5">
            <Tabs
                defaultActiveKey="আমানত"
                id="justify-tab-example"
                className="mb-4"
                justify
                >

                <Tab eventKey="আমানত" title="আমানত">
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <h4 className='mb-0'>আমানত</h4>
                    </div>
                </div>
                <hr className='mt-2 mb-3' />

                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <form ref={depositFormRef} onSubmit={depositHandler}>
                            <div className="form-group mb-3 pay-method">
                                <p className="form-label">মুল্য পরিশোধ পদ্ধতি {selectedOption ? ': '+selectedOption : ''}</p>
                                <input type="radio" id="bkash" name="radioGroup" value="Bkash" checked={selectedOption === 'Bkash'} onChange={handleOptionChange}
                                    />
                                <label htmlFor="bkash">
                                    <img src="/assets/img/bkash.svg" alt="bkash" />
                                </label>

                                <input type="radio" id="rocket" name="radioGroup" value="Rocket" checked={selectedOption === 'Rocket'} onChange={handleOptionChange}
                                    />
                                <label htmlFor="rocket">
                                    <img src="/assets/img/rocket.svg" alt="rocket" />
                                </label>

                                <input type="radio" id="nagad" name="radioGroup" value="Nagad" checked={selectedOption === 'Nagad'} onChange={handleOptionChange}
                                    />
                                <label htmlFor="nagad">
                                    <img src="/assets/img/nagad.svg" alt="nagad" />
                                </label>

                                <input type="radio" id="upay" name="radioGroup" value="Upay" checked={selectedOption === 'Upay'} onChange={handleOptionChange}
                                    />
                                <label htmlFor="upay">
                                    <img src="/assets/img/upay.svg" alt="upay" />
                                </label>

                                {depositPayTypeError && <p className='text-danger'>{depositPayTypeError}</p>}

                                <p className='mb-2 mt-2'>{selectedOption ? `নীচে দেখানো এই ${selectedOption} নম্বরে স্থানান্তর করুন.` : ''}</p>
                                <h5 className='mb-2'>{selectedOption === 'Bkash' ? 'Bkash Number: '+ payments.find(payment => payment.method === 'Bkash').number : ''}</h5>
                                <h5 className='mb-2'>{selectedOption === 'Rocket' ? 'Rocket Number: '+ payments.find(payment => payment.method === 'Rocket').number : ''}</h5>
                                <h5 className='mb-2'>{selectedOption === 'Nagad' ? 'Nagad Number: '+ payments.find(payment => payment.method === 'Nagad').number : ''}</h5>
                                <h5 className='mb-2'>{selectedOption === 'Upay' ? 'Upay Number: '+ payments.find(payment => payment.method === 'Upay').number : ''}</h5>


                            </div>
                            <div className="form-group mb-3">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'200')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='200'? ' active' : '')}><b>200</b></a>
                                            </div>
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'500')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='500'? ' active' : '')}><b>500</b></a>
                                            </div>
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'1000')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='1000'? ' active' : '')}><b>1000</b></a>
                                            </div>
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'2000')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='2000'? ' active' : '')}><b>2000</b></a>
                                            </div>
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'5000')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='5000'? ' active' : '')}><b>5000</b></a>
                                            </div>
                                            <div className="col-4 p-1">
                                                <a onClick={depositAmountChange.bind(null,'10000')} className={'btn btn-dark btn-block text-warning amount-btn'+ (depositAmount ==='10000'? ' active' : '')}><b>10000</b></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="depositAmount" className="form-label">আমানত পরিমাণ</label>
                                <input type="text" className={'form-control'+ (depositAmountError ? ' is-invalid' : '') } onChange={(e)=>setDepositAmount(e.target.value)} value={depositAmount}></input>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="depSender" className="form-label">প্রেরকের নম্বর</label>
                                <input type="text" className={'form-control'+ (depSenderError ? ' is-invalid' : '') } ref={depSender}></input>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="depTrans" className="form-label">Transaction ID</label>
                                <input type="text" className={'form-control'+ (depTransError ? ' is-invalid' : '') } ref={depTrans}></input>
                            </div>
                            <div className="form-group mt-3  d-grid">
                                <button type="submit" className="btn btn-dark text-warning py-2"><b>নিশ্চিত করুন</b></button>
                            </div>
                        </form>
                    </div>
                </div>
                </Tab>

                <Tab eventKey="উত্তোলন" title="উত্তোলন">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 mb-3">
                        <h4 className='mb-0'>উত্তোলন</h4>
                    </div>
                    <div className="col-11 text-center bg-dark text-warning rounded p-3">
                        <p className='mb-0'>ক্রেডিট ব্যালেন্স<br/>৳ {balance}</p>
                    </div>
                </div>
                <hr className='mt-2 mb-3' />

                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <form ref={withdrawFormRef} onSubmit={withdrawHandler}>
                            <div className="form-group mb-3 pay-method">
                                <p className="form-label">উত্তোলন পদ্ধতি {selectedWithdrawOption ? ': '+selectedWithdrawOption : ''}</p>
                                <input type="radio" id="bkash1" name="radioGroup" value="Bkash" checked={selectedWithdrawOption === 'Bkash'} onChange={handleWithdrawOptionChange}
                                    />
                                <label htmlFor="bkash1">
                                    <img src="/assets/img/bkash.svg" alt="bkash" />
                                </label>

                                <input type="radio" id="rocket1" name="radioGroup" value="Rocket" checked={selectedWithdrawOption === 'Rocket'} onChange={handleWithdrawOptionChange}
                                    />
                                <label htmlFor="rocket1">
                                    <img src="/assets/img/rocket.svg" alt="rocket" />
                                </label>

                                <input type="radio" id="nagad1" name="radioGroup" value="Nagad" checked={selectedWithdrawOption === 'Nagad'} onChange={handleWithdrawOptionChange}
                                    />
                                <label htmlFor="nagad1">
                                    <img src="/assets/img/nagad.svg" alt="nagad" />
                                </label>

                                {withdrawPayTypeError && <p className='text-danger'>{withdrawPayTypeError}</p>}

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="depositAmount" className="form-label">উত্তোলন পরিমাণ</label>
                                <input type="text" className={'form-control'+ (withdrawAmountError ? ' is-invalid' : '') } ref={withdrawAmount}></input>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="depSender" className="form-label">{selectedWithdrawOption ? selectedWithdrawOption : 'উত্তোলন'} নম্বর</label>
                                <input type="text" className={'form-control'+ (withdrawNumberError ? ' is-invalid' : '') } ref={withdrawNumber}></input>
                            </div>
                            <div className="form-group mt-3  d-grid">
                                <button type="submit" className="btn btn-dark text-warning py-2"><b>নিশ্চিত করুন</b></button>
                            </div>
                        </form>
                    </div>
                </div>
                </Tab>
            </Tabs>

        </div>
        </section>

        <UserFooter/>


    </>
  )
}
