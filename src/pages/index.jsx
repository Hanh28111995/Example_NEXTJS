import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import aboutBlock from '../assets/images/about-block-bg.png'
import Navbar from '@/components/layout/Navbar'
import { useEffect } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    // Access the document object here
    console.log(document.title);
  }, []);
  return (
    <>
      <Head>
        <title>Gamestorm - Gaming Studio HTML Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <div>
        {/* start preloader */}
        {/* <div className="preloader align-items-center justify-content-center">
          <span className="loader" />
        </div> */}
        {/* end preloader */}
        {/* Scroll To Top Start*/}
        <button className="scrollToTop d-none d-md-flex d-center" aria-label="scroll Bar Button">Back To Top</button>
        {/* Scroll To Top End */}
        {/* Start Custom Cursor */}
        <div className="mouse-follower">
          <span className="cursor-outline" />
          <span className="cursor-dot" />
        </div>
        {/* End Custom Cursor */}
        {/* header-section start */}
        <Navbar />
        {/* header-section end */}
        {/* Sidebar Menu start */}
        <div className="sidebar-wrapper">
          <div className="position-relative">
            <div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center">
              <div className="sidebar-close d-none d-xl-block">
                <button className="d-center d-grid">
                  <i className="material-symbols-outlined mat-icon fs-three"> menu_open </i>
                  <span>MENU</span>
                </button>
              </div>
              <ul className="d-grid gap-4 social-area">
                <li>
                  <a href="https://www.facebook.com/" aria-label="Facebook" className="d-center">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" aria-label="Instagram" className="d-center">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" aria-label="Linkedin" className="d-center">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" aria-label="Twitter" className="d-center">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
              <div className="bottom-area">
                <select>
                  <option value={1}>ENG</option>
                  <option value={2}>BNG</option>
                  <option value={3}>HIN</option>
                </select>
              </div>
            </div>
            <div className="sidebar-content d-center flex-columnn">
              <div className="header-section d-block">
                <div className="navbar bg-transparent">
                  <ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
                    <li>
                      <a className="dropdown-nav fs-three heading" href="index.html">Home</a>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="our-services-1.html">Services</a>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="about-us.html">About</a>
                    </li>
                    <li className="dropdown show-dropdown">
                      <button type="button" aria-label="Navbar Dropdown Button" className="dropdown-toggle dropdown-nav fs-three heading">Pages</button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item fs-three heading" href="pricing-plan.html">pricing
                            plan</a>
                        </li>
                        <li>
                          <a className="dropdown-item fs-three heading" href="privacy-policy.html">privacy
                            policy</a>
                        </li>
                        <li>
                          <a className="dropdown-item fs-three heading" href="terms-conditions.html">terms
                            conditions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-three heading" href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-items w-100 bottom-0">
                <div className="row">
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Office</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> location_on </i>
                        </div>
                        <div className="right-item w-75">
                          <h5>London</h5>
                          <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Email address</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> mail </i>
                        </div>
                        <div className="right-item d-grid">
                          <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="82c7fae3eff2eee7c2e5efe3ebeeace1edef">[email&nbsp;protected]</a></span>
                          <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="185d60797568747d587f75797174367b7775">[email&nbsp;protected]</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Phone Number</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> call </i>
                        </div>
                        <div className="right-item d-grid">
                          <span>(302) 555-0107</span>
                          <span>(302) 555-0107</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Working Hours</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> schedule </i>
                        </div>
                        <div className="right-item w-50">
                          <span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Menu end */}
        {/* Banner-section start */}


        {/* About block section start */}
        <section className="about-block pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
                <div className="sec-img mw-100 position-relative d-center">
                  <Image src={aboutBlock} alt="sec-img" />
                  <div className="experience p-2 p-lg-4 position-absolute ">
                    <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-inline-flex d-center gap-3">
                      <div className="counters d-center">
                        <span className="odometer display-four" data-odometer-final={20}>0</span>
                        <span className="display-four visible-slowly-bottom symbol">+</span>
                      </div>
                      <span className="w-25 d-inline-bloc">Years Of Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-6">
                <div className="section-text">
                  <h4 className="sub-title">Welcome to <span>Gamestorm</span> Game Studios</h4>
                  <span className="fs-two heading mb-6">Bringing people together through <span>the power of
                    play</span></span>
                  <p>As Game Gamestorm, we continue to open doors to new worlds every day and we are
                    working excitedly for creating new games and unique ideas!</p>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={500}>0</span>
                        <span className="fs-three heading">M</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Downloads, or 6% of the world’s population.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={2}>0</span>
                        <span className="fs-three heading">M</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Our games have over 20 million unique daily users.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={52}>0</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Experts collaborating to blow your mind in one place.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={4}>0</span>
                        <span className="fs-three heading">k</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        The Gamestorm Studio is launching with 4K+ Games.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="btn-area alt-bg mt-2">
                  <a href="game.html" className="box-style btn-box d-center">
                    Explore Our Games
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About block section end */}

        {/* Contact Us start */}
        <section className="contact-us pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="section-text">
                  <h4 className="sub-title">Have <span>Questions?</span></h4>
                  <span className="fs-two heading mb-6">We'd Love To <span>Hear From You</span></span>
                  <p>Please fill out the form and let us know about your concerns.We will try our best to
                    provide optimized solutions.</p>
                </div>
                <div className="contact-area">
                  <div className="btn-area mt-10 d-grid gap-6 align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-five"> call </i>
                      </div>
                      <span>+(2) 578 - 365 - 379</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-five"> mail </i>
                      </div>
                      <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d991bcb5b5b699bca1b8b4a9b5bcf7bab6b4">[email&nbsp;protected]</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 me-20 mt-7 mt-lg-0">
                <form action="#" className="p-4">
                  <div className="form-inside p-4">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactName">Name</label>
                          <input type="text" id="contactName" placeholder="Enter Your Name" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactEmail">Email</label>
                          <input type="email" id="contactEmail" placeholder="Enter your email" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactSubject">Subject</label>
                          <input type="text" id="contactSubject" placeholder="Enter Subject" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactMessage">Leave us a message</label>
                          <textarea cols={4} rows={4} id="contactMessage" placeholder="Please type your Message here..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-4">
                        <div className="btn-area">
                          <button className="box-style btn-box">
                            Send Massage
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us end */}
        {/*==================================================================*/}
        {/* <!-- ==== js dependencies start ==== --> */}

      </div>
      <script type="text/javascript" src="../assets/js/plugins/plugins.js" ></script>
      <script type="text/javascript" src="../assets/js/plugins/plugin-custom.js" ></script>
      <script type="text/javascript" src="../assets/js/main.js" ></script>
      <script type="text/javascript" data-cfasync="false" src="../assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" ></script>
    </>

  )
}
