import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {UserFooter} from './userComponents/UserFooter';
import { Header } from './userComponents/Header';

export const Home = () => {

    const [loggedIn,setLoggedIn]=useState(false)
    const [loginModal,setLoginModal]=useState(false)
    const [signupModal,setSignupModal]=useState(false)

    const [links,setLink]=useState(false)

    useEffect(()=>{
        if(User.loggedIn()){
            setLoggedIn(true)
        }
    })

    useEffect(()=>{
        getLinks()
    },[])

    const toggleLogin=()=>{
        setLoggedIn(()=>{
            return true
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

    const loginViewHandeler=()=>{
        setLoginModal(()=>{
            return !loginModal
        })
    }

    const signupViewHandeler=()=>{
        setSignupModal(()=>{
            return !signupModal
        })
    }

    const hotItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Hot Games').link;
        }
        else{
            loginViewHandeler()
        }
    }

    const cricketItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Cricket').link;
        }
        else{
            loginViewHandeler()
        }
    }

    const casinoItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Casino').link;
        }
        else{
            loginViewHandeler()
        }
    }

    const sportsItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Sports').link;
        }
        else{
            loginViewHandeler()
        }
    }

    const crushItemClick=()=>{
        if(loggedIn){
            window.location.href = links.find(link => link.type === 'Crush').link;
        }
        else{
            loginViewHandeler()
        }
    }

  return (
    <>

        <Header loginView={loginModal} loginViewHandeler={loginViewHandeler} signupView={signupModal} signupViewHandeler={signupViewHandeler} toggleLogin={toggleLogin} />

        <section className='container-fluid p-0'>
            <img className='img-fluid hero-img' src="/assets/img/hero.png" />
        </section>

        <section className="container-fluid bg-dark p-0 pt-1">
            <marquee className='text-warning' width="100%" direction="left">
                <b>ForxBet-</b>এ স্বাগতম:বাংলাদেশের #1 ক্রিকেট এক্সচেঞ্জ এবং বেটিং প্ল্যাটফর্ম
            </marquee>
        </section>

        <section className='container-fluid bg-light py-4' id='home-tab'>
            <Tabs
                defaultActiveKey="হটগেমস"
                id="justify-tab-example"
                className="mb-4"
                justify
                >

                <Tab eventKey="হটগেমস" title={<><img src='/assets/img/homepageHot.svg'/><p className='mb-0'>হটগেমস</p></>}>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb(1).webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb(2).webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb(11).webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb13.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb(12).webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumbsds.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/630e18f571cac.jpeg" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/630e1865d83d2.jpeg" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/51_0.jpg" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/94_0.jpg" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb444.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb5555.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb544.webp" />
                        </div>
                        <div className="col-4 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={hotItemClick} src="/assets/img/thumb872.webp" />
                        </div>
                    </div>
                    </div>
                </Tab>
                <Tab eventKey="ক্রিকেট" title={<><img src='/assets/img/cricket2.svg'/><p className='mb-0'>ক্রিকেট</p></>}>
                    <div className="container-fluid">
                        <div className="row mb-4">
                            <div className="col-12">
                            <img className='img-fluid rounded-img' onClick={cricketItemClick} src="/assets/img/cricket_betswiz_BDT.jpg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <img className='img-fluid rounded-img' onClick={cricketItemClick} src="/assets/img/cricket_sap_BDT.jpg" />
                            </div>

                        </div>
                    </div>
                </Tab>
                <Tab eventKey="ক্যাসিনো" title={<><img src='/assets/img/ld2.svg'/><p className='mb-0'>ক্যাসিনো</p></>}>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_aura.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_evo.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_ezugi.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_pp.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_pt.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_royal.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={casinoItemClick} src="/assets/img/ld_sexy_v2.jpg" />
                        </div>
                    </div>
                    </div>
                </Tab>

                <Tab eventKey="স্পোর্টস" title={<><img src='/assets/img/sb2.svg'/><p className='mb-0'>স্পোর্টস</p></>}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={sportsItemClick} src="/assets/img/table_jili.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={sportsItemClick} src="/assets/img/table_ludo.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={sportsItemClick} src="/assets/img/table_sexy_v2.jpg" />
                        </div>
                        <div className="col-6 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-md' onClick={sportsItemClick} src="/assets/img/table_spg.jpg" />
                        </div>

                    </div>
                    </div>
                </Tab>

                <Tab eventKey="ক্র্যাশ" title={<><img src='/assets/img/crash1.svg'/><p className='mb-0'>ক্র্যাশ</p></>}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={crushItemClick} src="/assets/img/rng_jili.jpg" />
                        </div>
                        <div className="col-3 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={crushItemClick} src="/assets/img/smart_avatar.png" />
                        </div>
                        <div className="col-3 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={crushItemClick} src="/assets/img/crash_spribe.jpg" />
                        </div>
                        <div className="col-3 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={crushItemClick} src="/assets/img/crash_aviatrix.jpg" />
                        </div>
                        <div className="col-3 p-2">
                        <img className='img-fluid hero-img rounded-img height-img-sm' onClick={crushItemClick} src="/assets/img/crash_bslt.jpg" />
                        </div>
                    </div>
                    </div>
                </Tab>
            </Tabs>
        </section>

        <section className='container-fluid'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-sm-12">
                <img className='img-fluid rounded-img' src="/assets/img/BB88_mobile.png" />
                </div>
            </div>
        </section>

        <section className='container-fluid mt-5'>
            <div className="row">
                <div className="col-12">
                <img className='img-fluid rounded-img full-width' src="/assets/img/mobile_BDT_bd.png" />
                </div>
            </div>
        </section>

        <section className='container-fluid pt-5 pb-3'>
            <div className="row">
                <div className="col-12">
                    <h1><b>Bangladesh’s Trusted Online Casino and Cricket Exchange</b></h1>
                    <h5 className='lh-base'>বাংলাদেশের প্রধান অনলাইন ক্যাসিনো, যা মোবাইল এবং ডেস্কটপ ব্যবহারকারীদের জন্য বিভিন্ন ধরনের গেম দিচ্ছে। খেলোয়াড়রা roulette, poker, baccarat, ব এবং এমনকি cricket exchange betting উপভোগ করতে পারেন, এবং অনলাইনে আসল অর্থ জিতার সুযোগ পাবেন। আমাদের প্ল্যাটফর্মটি দ্রুত, স্মুদ্ধ গেমপ্লে এবং খেলোয়াড়দের জন্য মহান বোনাস দিচ্ছে। আমরা সুরক্ষা এবং নিরাপত্তা প্রাথমিকতা দিই, আপনার তথ্য সুরক্ষিত রাখতে উন্নত এনক্রিপশন প্রযুক্তি ব্যবহার করি, এবং আমাদের গ্রাহক সেবা ২ 24/7 উপলব্ধ। পছন্দ সেরা অনলাইন ক্যাসিনো গেমিং এবং ক্রিকেট এক্সচেঞ্জ বেটিং অভিজ্ঞতার জন্য আজই যোগ দিন।</h5>
                </div>
            </div>
        </section>

        <UserFooter/>

    </>
  )
}
