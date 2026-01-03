import React from "react";
import './App.css'
import RazorpayX from "./assets/RazorpayX.svg";
import indianFlag from "./assets/indianFlag.webp";
import { FaArrowRight } from 'react-icons/fa';
import hero from "./assets/hero.jpg";
import heroShape from "./assets/heroShape.svg"
import dotted1 from "./assets/dotted1.png"
import featureDottedrows from "./assets/featureDottedrows.png"
import paymentSuite from "./assets/paymentSuite.png"
import { FaCheck } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { BiLink } from 'react-icons/bi';
import { MdCurrencyRupee } from 'react-icons/md';
import { FaCodeBranch } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import buisnessBanking from "./assets/buisnessBanking.png"
// import featurSection from "./assets/featurSection.svg"
import xFlame1 from "./assets/xFlame1.png"
import xFlame2 from "./assets/xFlame2.png"
import { MdAccountBalance } from 'react-icons/md';
import instantSettlementIcon from "./assets/instantSettlementIcon.svg"
import autopayIcon from "./assets/autopayIcon.svg"
import qrCode from "./assets/qrCode.svg"
import magicCheckout from "./assets/magicCheckout.svg"
import paymentButton from "./assets/paymentButton.svg"
import capitalCreditIcon from "./assets/capitalCreditIcon.svg"
import payroll from "./assets/payroll.svg"
// import paymentButtonBg from "./assets/paymentButtonBg.svg"
// import paymentButtonHoverbg from "./assets/paymentButtonHoverbg.svg"
// import instantSettlementBg from "./assets/instantSettlementBg.svg"
// import instantSettlementBghover from "./assets/instantSettlementBghover.svg"
// import magicCheckoutHoverbg from "./assets/magicCheckoutHoverbg.svg"
// import magiCheckoutBg from "./assets/magiCheckoutBg.svg"
// import upiAutopayBg from "./assets/upiAutopayBg.svg"
// import upiAutopayHoverbg from "./assets/upiAutopayHoverbg.svg"
// import qrCodesBg from "./assets/qrCodesBg.svg"
// import qrCodesHoverbg from "./assets/qrCodesHoverbg.svg"
// import coreFeaturesSectionBg from "./assets/coreFeaturesSectionBg.svg"
import iinstantActivationIcon from "./assets/iinstantActivationIcon.svg"
import easyIntegration from "./assets/easyIntegration.svg"
import dashboardReportingIcon from "./assets/dashboardReportingIcon.svg"
import paymentModes from "./assets/paymentModes.svg"
import secureIcon from "./assets/secureIcon.svg"
import simplePricing from "./assets/simplePricing.svg"
import industrySupportIcon from "./assets/industrySupportIcon.svg"
import apiDrivenIcon from "./assets/apiDrivenIcon.svg"
import companies from "./assets/companies.png"
import Anurag from "./assets/Anurag.jpg"
import { FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import quotes from "./assets/quotes.svg"
import CTABg from "./assets/CTABg.svg"
import ctaImg from "./assets/ctaImg.svg"
import RazorpayLogo from "./assets/RazorpayLogo.svg"
import linkedinIcon from "./assets/linkedinIcon.svg"
// import facebookIcon from "./assets/facebookIcon.svg"
import footerCertificate1 from "./assets/footerCertificate1.png"
import footerCertificate2 from "./assets/footerCertificate2.jpg"
import instagram from "./assets/instagram.webp"
import git from "./assets/git.jpg"










function App() {


  return (
    <>
     <nav className='bg-[#00022E] '>
      <div className='relative w-full max-w-[1080px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 flex-wrap'>
      <a href="#" className='cursor-pointer py-7 pr-7'>
        <img src={RazorpayX} alt="" width="125" height="30"/>
      </a>
      <ul className=" lg:flex lg:space-x-6 hidden">
        <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Payment</a>
          <div className=" absolute bottom-0  w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200 "></div>
          </li>
          <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> your  Banking</a>
             <div className=" absolute bottom-0  w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200 "></div>
          </li>
          <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Corporate Card </a>
     
          </li>
          <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Payroll</a>
          
          </li>
          <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Resaurce</a>
            <div className=" absolute bottom-0  w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200 "></div>
          </li>
          <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Support</a>
           <div className=" absolute bottom-0  w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200 "></div>
           </li>
           <li className="text-white py-7 font-mollish hover:text-blue-400 cursor-pointer transition-all duration-200 relative group"> <a href="#"> Pricing</a>
           <div className=" absolute bottom-0  w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200 "></div>
           </li>
          </ul>
          <div className=" lg:flex hidden space-x-6">
             <img src={indianFlag} alt="" width="30px" height="20px" className=""/>
            
          </div>
           <div> <button className=" py-1 px-2 text-white border border-blue-400 rounded-sm">Log in</button>
            </div>
            <div className="lg:flex hidden">
               <button className="py-2 px-1 bg-white  text-blue-500 hover:text-blue-600 transition-all duration-200">Sign up < FaArrowRight className=" h-3 w-6 ml-20 -mt-4 "/></button>
            </div>
           
       
      </div>

     </nav>
     <section className="relative bg-[#00022E]">
     <div className=" w-10/12 flex flex-col lg:flex-row max-w-[1080px] justify-between items-center mx-auto ">
      <div  >
        <h1 className="font-bold text-[40px] text-white leading-[1.2]">Power your finance, grow your business</h1>
        <div className="h-1 w-6 bg-green-500 m-7 -ml-1"></div>
        <p className="text-[20px] text-gray-400 leading-7 ">Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
        <button className="bg-blue-500 mt-6 py-4 px-5 font-bold text-white hover:bg-blue-600 transition-all duration-200 rounded-md py-16px px-14px"> Sign up know</button>
      </div>
      <div className="lg:w-10/12 w-[20%]" >
         <img src={hero} alt="" className=" lg:max-w-[600px] max-w-[350px] lg:ml-0 -ml-33 mt-10"/>
         </div>
     </div>
      
     </section>
     <div>
      <img src={heroShape} className="w-full" />
     </div>
     {/* feature section */}
      <section className="relative mt-{10px}">
     
      <img src={dotted1} alt="" className=" absolute lg:left-10 w-[100px] ml-10 hidden " />
      <img src={featureDottedrows } alt="" width={233} height={167} className="absolute right-0 lg:inline-block w-[100px] mt-10 rotate-180 hidden" />
      <div className="relative w-11/12 mx-auto max-w-[1080px]" >
      <h2 className="font-bold text-center   text-2xl mt-10 lg:-mt-2">Accept Payments with Razorpay Payment Suite</h2>
      <div className="h-1 mx-auto mt-4 w-6 bg-green-400"></div>
      {/* content box */}
     <div className="lg:flex flex-row  lg:w-10/12 lg:max-w-[1080px] h-[200] justify-between items-center mx-auto mt-10 shadow-md bg-white ">
      {/* left part */}
      <div className="ml-10">
        <h3 className="text-2xl  leading-[1.4] lg:w-[400px] w-[300px] -mr-30 -mt-3 text-gray-700 py-4 font-bold">Supercharge your business with the all‑powerful <span className="text-blue-500">Payment Gateway</span></h3>
        <ul>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> 100+ Payment Methods</li>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> Industry Leading Success Rate</li>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> Superior Checkout Experience</li>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> Easy to Integrate</li>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> Instant Settlements from day 1</li>
          <li> < FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/> In-depth Reporting and Insights</li>
        </ul>
        {/* button & hyperlink */}
        <div className="space-x-4">
        <button className="bg-blue-500 mt-6 py-4 px-5 font-bold text-white hover:bg-blue-600 transition-all duration-200 rounded-md py-16px px-18px"> Sign up know < FaArrowRight className="ml-33 -mt-4"/></button>
        <a href="#" className="text-blue-600 font-bold">Know more <FaAngleRight className="ml-73 -mt-8.5" /></a>
        </div>
      </div>
      {/* right part */}
      <div>
        <img src={paymentSuite} alt="" className= "lg:max-w-[550px] max-w-[400px] -ml-10 mt-5   " />
      </div>
        </div>
     </div>
     
     <div className="lg:grid grid-cols-3 mt-8">
        {/* box 1 */}
        <div className="relative bg-white rounded-tr-3xl  lg:ml-30 ml-10 m-5 shadow-sm rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
    <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2">< BsArrowUpRight className="ml-3"/>< BsArrowUpRight className="rotate-180 ml-3"/>
         </div>
      

      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Payment Links</h2>
      <p className="text-gray-500 text-sm mb-4">
        Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"> Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 2 */}
     <div className="relative bg-white m-5 lg:ml-15 ml-10 rounded-tr-3xl  shadow-sm rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><BiWallet className="text-3xl ml-2"/>
         </div>
     
      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Payment Pages</h2>
      <p className="text-gray-500 text-sm mb-4">
        Take your store online instantly with zero coding. Accept international & domestic payments
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 3 */}
     <div className="relative bg-white m-5 rounded-tr-3xl ml-10 shadow-sm rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-13 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><img src={paymentButton} alt="" width={50}/> 
       
         </div>
     

      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Payment Buttons</h2>
      <p className="text-gray-500 text-sm mb-4">
        Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
        <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 4 */}
     <div className="relative bg-white m-5 lg:ml-30 ml-10 rounded-tr-3xl shadow-sm rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Corner icon */}<div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><MdCurrencyRupee className="text-3xl ml-2"/>
         </div>

     

      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Subscriptions</h2>
      <p className="text-gray-500 text-sm mb-4">
        Subscription plans with automated recurring transactions on various payment modes.
      </p>
       <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 5 */}
     <div className="relative bg-white m-5 lg:ml-15 ml-10 rounded-tr-3xl  shadow-sm rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><FaCodeBranch className="text-3xl ml-2"/>
         </div>
      

      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Route</h2>
      <p className="text-gray-500 text-sm mb-4">
        Split incoming payments auto- matically to vendor’s accounts, manage marketplace money flow...
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1" /></a>
    </div>
     {/* box 6 */}
     <div className="relative bg-white m-5 mr-5 ml-10 shadow-sm rounded-tr-3xl rounded-lg border border-gray-200 p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><MdOutlineVerifiedUser className="text-3xl ml-2"/>
         </div>
      

      {/* Card content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Smart Collect</h2>
      <p className="text-gray-500 text-sm mb-4">
       Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1" /></a>
    </div>
    
      </div>
    </section>
  
   <section className="bg-[url('./assets/featurSection.svg')] bg-cover bg-no-repeat pt-16 pb-{500px} mt-5 w-90%  lg:h-330 h-460" >
    
     <div className=" relative pt-4 w-10/12 max-w-[1080px] mx-auto ">
      <h2 className="font-bold text-white pt-4 mb-4 lg:text-center text-3xl">Explore Razorpay Business Banking</h2>
      <div className="h-1 w-6 mx-auto mt-4 mb-4 bg-green-500"></div>
      {/* main container */}
      <div className=" relative w-full min-h[440px] flex">
        <img src={xFlame1} alt="" className="absolute -top-[150px] lg:-left-[110px] -left-[200px] w-[200px]" />
        <img src={xFlame2} alt="" className="absolute top-[150px] lg:-right-[110px] -right-[200px] hidden w-[200px]"/>
        {/* content box  */}
        <div  className="lg:flex flex-row lg:w-10/12 w-[1080px] justify-between items-center mx-auto border shadow-md border-gray-400 ">
          {/* left section */}
          <div className="ml-10 lg:w-full ">
            <h2 className="text-2xl leading-[1.4] lg:w-[400px] w-[200px] text-white -mr-30 -mt-3 py-4 font-bold">Manage your company’s finances with <img src={RazorpayX} alt="" width="135" height="30" className="lg:ml-15 lg:-mt-7"/>
            <div className="lg:-mt-7">
            <span className="text-green-200 font-bold lg:ml-50   "> Business Banking</span>
            </div></h2>
            <div>
            <ul className="text-white">
              <li >< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>
                <span className="text-[14px]">Open a fully digital current account</span>
                </li>
              <li>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>
                <span className="text-[14px]">Automate payables & compliment payments</span>
              </li>
              <li>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>
                <span className="text-[14px]">Simplify and track spends with Corporate cards</span>
              </li>
              <li>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>
                <span className="text-[14px]">View financial insights at a glance</span>
              </li>
            </ul>
            </div>
            <div>
                <div className="space-x-4">
               <button className="relative flex items-center mt-4 justify-between overflow-hidden bg-blue-500 text-white font-semibold px-13 py-3 rounded-md group transition-all duration-300">
                 <span className="z-10">Sign Up</span>
                  <div className="absolute right-0 top-0 h-full w-12 bg-teal-400 rotate-180 -skew-x-12 flex items-center justify-center group-hover:w-16 transition-all duration-300">
                    < BsArrowUpRight className="text-white text-xl rotate-225" />
                     </div>
                     </button>
                     <div className="-mt-9">
                      <a href="" className="text-blue-600 font-bold ml-45 "> know more <FaAngleRight className="ml-68 -mt-4" /></a>
                      </div>
                 </div>
            </div>
          </div>
          <img src={buisnessBanking} alt="" className="lg:max-w-[550px] mt-8 " />
          </div> 
        </div>
      </div>

      <div className="lg:grid grid-cols-3 mt-8">
        {/* box 1 */}
   <div className="relative rounded-tr-3xl  lg:ml-30 ml-10 m-5 shadow-sm rounded-lg border border-gray-700 p-6 w-80 hover:shadow-3xl transition-shadow">
    <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-15 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2">< MdAccountBalance className=" text-3xl ml-2"/>
         </div>
         {/* Card content */}
      <h2 className="text-lg font-semibold text-white mb-2">Current Account</h2>
      <p className="text-gray-500 text-sm mb-4">
        Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"> Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 2 */}
     <div className="relative  m-5 lg:ml-15 ml-10  rounded-tr-3xl  shadow-sm rounded-lg border border-gray-700 p-6 w-80 hover:shadow-3xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-13 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><img src={capitalCreditIcon} alt="" width={40} />
         </div>
         {/* Card content */}
      <h2 className="text-lg font-semibold text-white mb-2">Capital & Credit</h2>
      <p className="text-gray-500 text-sm mb-4">
        Take your store online instantly with zero coding. Accept international & domestic payments
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 3 */}
     <div className="relative ml-10  m-5 rounded-tr-3xl  shadow-sm rounded-lg border border-gray-700 p-6 w-80 hover:shadow-3xl transition-shadow">
      {/* Corner icon */}
      <div className="absolute mt-4 mr-4 top-0 right-0 translate-x-1/3 w-13 -translate-y-1/3 bg-blue-500 text-white rounded-full p-2"><img src={payroll} alt="" width={50} />
        </div>
       {/* Card content */}
      <h2 className="text-lg font-semibold text-white mb-2">Payouts</h2>
      <p className="text-gray-500 text-sm mb-4">
        Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
        <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
        </div>
      </div>
      <div>
        <div className=" ml-10 mt-4 mr-10 border border-gray-600 shadow-md p-4">
          <span><h1 className="text-white text-2xl ml-6 mt-3">Check out the live demo to learn how RazorpayX works. No sign-up required!
            </h1></span>
            <div className="-mt-8 mb-3">
             <button className="relative lg:flex lg:ml-220  lg:-mt-2 mt-10 ml-7  overflow-hidden bg-blue-500 text-white font-semibold px-13 py-3 rounded-md group transition-all duration-300">
                 <span className="z-10 -ml-3">Check out of demo</span>
                  <div className="absolute right-0 top-0 h-full w-12 bg-teal-400 rotate-180 -skew-x-12 flex items-center justify-center group-hover:w-16 transition-all duration-300">
                    < BsArrowUpRight className="text-white text-xl rotate-225" />
                  </div>
              </button>
              </div>
        </div>
      </div>
    </section>

    <section>
      <div>
        <img src={featureDottedrows} alt="" className="lg:ml-70 hidden" />
        <img src={featureDottedrows} alt="" className="lg:ml-200 -mt-44 hidden"/>    
      <div>
        <div className="lg:grid grid-cols-3 -mt-8">
      
        <div className="relative bg-white mt-13 lg:ml-30 ml-10 m-5 space-y-4 p-6 w-80 ">
      {/* Card content */}
      <span className="text-4xl font-bold text-gray-900 ">New in the </span> <span className="text-4xl text-blue-600 font-bold"> Razorpay </span>
       <span className="text-4xl font-bold text-gray-900 ">Product Suite</span>
    </div>

     {/* box 1 */}
     <div className=" bg-[url('./assets/instantSettlementBg.svg')] hover:bg-[url('./assets/instantSettlementBghover.svg')] relative bg-white m-5 lg:ml-15 ml-10 shadow-xl rounded-lg  p-6 w-80 h-70 hover:shadow-2xl transition-shadow">
      {/* icon */}
      
      <div className="absolute mt-4 mr-4 top-0 w-13  bg-blue-500 text-white rounded-full p-2"><img src={instantSettlementIcon} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="text-xl font-bold text-gray-900 mt-13 mb-2">Instant Settlements</h2>
      <p className="text-gray-500 text-lg mb-4">
        Settle your customer payments within 10 seconds as smart-collect-icon your account is activated, even during holidays
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
    
     {/* box 2 */}
     <div className=" bg-[url('./assets/upiAutopayBg.svg')]  hover:bg-[url('./assets/upiAutopayHoverbg.svg')] relative bg-no-repeat m-5 lg:ml-0 ml-10 shadow-xl rounded-lg p-6 w-80 hover:shadow-2xl transition-shadow">
      {/*  icon */}
      <div className="absolute mt-4 mr-4 top-0 w-13 bg-blue-500 text-white rounded-full p-2"><img src={autopayIcon} alt="" width={30} className="ml-1"/>
       
         </div>
     {/* Card content */}
      <h2 className="text-xl font-bold text-gray-900 mt-13 mb-2">UPI AutoPay</h2>
      <p className="text-gray-500 text-lg mb-4">
        Allow customers to set up recuring payments using UPI Apps.</p>
        <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
     {/* box 3 */}
    <div className="bg-[url('./assets/paymentButtonBg.svg')] bg-no-repeat hover:bg-[url('./assets/paymentButtonHoverbg.svg')] relative  m-5 lg:ml-30 ml-10 shadow-xl rounded-lg  p-6 w-80 h-70 hover:shadow-2xl transition-shadow">
      {/* icon */}
      
      <div className="absolute mt-4 mr-4 top-0 w-13 bg-blue-500 text-white rounded-full p-2"><img src={paymentButton} alt="" width={40} />
         </div>
         {/* Card content */}
      <h2 className="text-xl font-bold text-gray-900 mt-13 mb-2">Payment Button</h2>
      <p className="text-gray-500 text-lg mb-4">
        Accept payments on your website, in less than 5 minuites. No developer needed
      </p>
       <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1"  /></a>
    </div>
    
     {/* box 4 */}
     <div className="bg-[url('./assets/qrCodesBg.svg')] bg-no-repeat hover:bg-[url('./assets/qrCodesHoverbg.svg')] relative  m-5 lg:ml-15 ml-10 shadow-xl rounded-lg p-6 w-80 hover:shadow-2xl transition-shadow">
      {/* icon */}
      <div className="absolute mt-4 mr-4 top-0 w-13  bg-blue-500 text-white rounded-full p-2"><img src={qrCode} alt="" width={40}/>
         </div>
         {/* Card content */}
      <h2 className="text-xl font-bold text-gray-900 mt-13 mb-2">QR Codes</h2>
      <p className="text-gray-500 text-lg mb-4">
        Create unlimited QR Codes with business branding and start acceptiong payment for free*.
      </p>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1" /></a>
    </div>
     {/* box 5 */}
     <div className=" bg-[url('./assets/magiCheckoutBg.svg')] bg-no-repeat hover:bg-[url('./assets/magicCheckoutHoverbg.svg')] relative m-5 mr-5 lg:ml-0 ml-10 shadow-xl rounded-lg p-6 w-80 hover:shadow-2xl transition-shadow">
      {/*  icon */}
      <div className="absolute mt-4 mr-4 top-0 w-13  bg-blue-500 text-white rounded-full p-2"><img src={magicCheckout} alt="" width={40} />
         </div>
      

      {/* Card content */}
      <h2 className="text-xl font-bold text-gray-900 mt-13 mb-2">Magic Checkout</h2>
      <p className="text-gray-500 text-lg mb-4">
       Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%!
       </p>
      <a href="#" className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">Know More <FaAngleRight className=" mt-1" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
<section className=" bg-[url('./assets/coreFeaturesSectionBg.svg')] bg-no-repeat bg-cover w-80% lg:h-230 h-800 lg:mt-10 -mt-40 pt-16 pb-{500px}">
<div>
  <div>
    <h1 className="font-bold text-white pt-4 mb-4 lg:mt-20 mt-130  text-center text-2xl">Features</h1>
    <div className="h-1 w-6 mx-auto lg:mt-4 mb-2 bg-green-500"></div>
    {/* <p className=" text-white pt-2 mb-4 lg:text-center w-110 ml-105 hidden ">Empower your business with all the right tools to accept online payments and provide the best customer experience</p> */}
  </div>
  <div>
    
      <div className="lg:grid grid-cols-4 lg:mt-8">
        {/* box 1 */}
        <div className="relative lg:ml-30 ml-10 lg:m-5  p-6 lg:w-60 w-80">
           <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={iinstantActivationIcon} alt="" width={40} />
         </div>
         <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white mb-2">Instant Activation</h2>
         <p className="text-gray-300 lg:text-sm text-xl mb-4">
          Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.
          </p>
    </div>
     {/* box 2 */}
     <div className="relative lg:m-5 ml-10 lg:ml-15 p-6 lg:w-60 w-80">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={easyIntegration} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white  mb-2">Easy Integration</h2>
      <p className="text-gray-300  lg:text-sm text-xl mb-4">
       With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.
      </p>
    </div>
     {/* box 3 */}
     <div className="relative m-5 lg:-ml-1 ml-10 p-6 lg:w-60 w-80">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={apiDrivenIcon} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="text-2xl lg:text-lg  mt-12 font-semibold text-white  mb-2">API Driven</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
       Build your business for scale with our complete API-driven automation that requires zero manual intervention.</p>
    </div>
     {/* box 4 */}
     <div className="relative  m-5 lg:-ml-12 ml-10 p-6 lg:w-60 w-80">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={paymentModes} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white  mb-2">100+ payment modes</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
       Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.
      </p>
    </div>
     {/* box 5 */}
     <div className="relative m-5 lg:ml-30 ml-10 p-6 lg:w-60 ">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={simplePricing} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white mb-2">Simple Pricing</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
       Our innovative payment solutions with competitive pricing make payments simpler.
      </p>
    </div>
     {/* box 6 */}
     <div className="relative m-5 mr-5 lg:ml-15 ml-10 p-6 lg:w-60 ">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={industrySupportIcon} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white -mr-5 mb-2">Best in Industry Support</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
       Always available email, phone and chat based support to help you in your every step
      </p>
    </div>
     {/* box 7 */}
     <div className="relative  m-5 lg:-ml-1  ml-10 p-6 lg:w-60 w-80 ">
       <div className="absolute mt-4 mr-4 top-0 w-15 rounded-full p-2"><img src={dashboardReportingIcon} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-12 font-semibold text-white  mb-2">Dashboard Reporting</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
        Real-time data and insights on your Razorpay Dashboard to make informed business decisions.
      </p>
    </div>
     {/* box 8*/}
     <div className="relative  m-5 mr-5 lg:-ml-12 ml-10 p-6 lg:w-60 ">
       <div className="absolute  mr-4 top-0 w-15 rounded-full p-2"><img src={secureIcon} alt="" width={40} />
         </div>
      {/* Card content */}
      <h2 className="lg:text-lg text-2xl mt-8 font-semibold text-white  mb-2">Secure</h2>
      <p className="text-gray-300 lg:text-sm text-xl mb-4">
      PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.
      </p>
    </div>
      </div>
  </div>

</div>

</section>

<div className="lg:flex flex-row w-full lg:-mt-15 -mt-30 h-130 bg-gray-100 justify-between items-center mx-auto  ">
      {/* left part */}
      <div className="lg:ml-30 ml-10  lg:w-110 w-[300px]">
        <h3 className="lg:text-3xl text-2xl leading-[1.4] -mr-20 -mt-3 text-gray-700 py-4 font-bold">Join the 50,00,000+ business using Razorpay</h3>
        <div className="h-1 w-6 bg-green-500 mb-2"></div>
       <p >
        We make it easier for you focus on building great products while we work on simpling your payments. Become one of us by joining thousands of our happy users justify-around Simplify the online payments experience for your customers.
      </p>
      <br />
      <span className="mt-10 -mr-10 "> Focus on your business while we handle the complexities of payments for you</span>
        {/* button & hyperlink */}
        <div className="space-x-4">
        <button className="bg-blue-500 mt-6 py-4 px-2 font-bold text-white hover:bg-blue-600 transition-all duration-200 rounded-md"> Get started < FaArrowRight className="ml-30 -mt-5"/></button>
          </div>
      </div>
      {/* right part */}
       
        </div>
         <div className="relative lg:ml-180 lg:-mt-120 h-100 overflow-hidden w-94 flex items-center justify-center">
      <div className="absolute animate-scroll-up space-y-8">
        <img src={companies} alt="Companies" className="h-[1500px] w-auto" />
        <img src={companies} alt="Companies" className="h-[1500px] -mt-8 w-auto" />
        <img src={companies} alt="Companies" className="h-[1500px] -mt-8 w-auto" />
      </div>
    </div>
    <section className="mt-50">
      <div>
        <div className="lg:ml-100">
         <h1 className="ml-35 mb-2 font-bold text-2xl lg:text-3xl">Razorpay Clone</h1>
        <h1 className="lg:text-3xl text-2xl lg:w-[550px] w-[300px] lg:ml-0 ml-20 font-bold">This is not an official site of Razorpay</h1>
        <div className="h-1 w-6 bg-green-500 lg:ml-60 ml-50 mb-10  mt-3"></div>
        </div>
        <img src={featureDottedrows} alt="" className="lg:ml-40 lg:-mt-4 hidden" />
       </div>
       <div className="/lg:w-[550px]">
        {/* left part */}
        <img src={Anurag} alt="" width={250} className="lg:ml-70 ml-20 mb-10" />
        
        {/* right part */}
        <div className=" w-[370px] lg:ml-160 lg:-mt-70 ml-10">
          <img src={quotes} alt=""width={40} className="hidden" />
          <h1  className="text-xl ">Front-End Part of Razorpay</h1>
          <h1 className="text-xl font-bold m-2 lg:-ml-1">Anurag Mishra</h1>
          <div className="flex flex-row ml-40 mb-4 -mt-9 space-x-2">
            <a href="https://www.linkedin.com/in/anurag-mishra-034899318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedinIcon} alt="" width={30}  /></a>
            <a href="https://www.instagram.com/anurag_mishra676?utm_source=qr&igsh=MTd1ZW91c3Z2dmZ3bA=="><img src={instagram} alt="" width={30} /></a>
             <a href="https://github.com/dashboard"><img src={git} alt="" width={25} /></a>
          </div>
          <p className="text-xl">The goal of cloning the Razorpay <span className="font-bold">Responsive</span> website is to learn a lot about creating the visual part of web, making sure users have a really good experience.</p>
          <h1 className="text-xl font-bold mt-2">Made with</h1>
          <div className="flex flex-row space-x-4">
            <FaReact className="w-10 h-15 mt-2 text-green-400"/>
            <SiTailwindcss className="w-10 h-15  mt-2 text-green-400"/>
          </div>
        </div>
       </div>
       </section>

       <section className="bg-[url('./assets/CTABg.svg')] bg-no-repeat bg-cover w-full p-15  lg:h-130 h-240">
          <div >
            <div className=" mt-10 text-white ml-10 ">
            <h1 className="text-2xl font-bold mb-2 ">Supercharge your business with Razorpay</h1>
            <div className="h-1 w-6 bg-green-500 mb-3"></div>
            <p >Sign up now to experience the future of payments and offer your customers the best checkout <br /> experience.</p>
             </div>
             <div className="lg:flex flex-row space-x-10 text-white mt-8 ml-15">
                <span>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400   "/>Quick Onboarding</span>
                <span>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>Access to entire product suite</span>
                <span>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>API access</span>
                <span>< FaCheck className="-ml-6 -mb-5 mt-5 text-green-400  "/>24X7 support</span>
              </div>
              <button className="bg-white p-3 ml-10 rounded-sm mt-5 text-blue-400 font-bold">sign up know <FaAngleRight className="ml-30 -mt-4.5" /></button>
            
          </div>
          <div className="lg:ml-230 lg:-mt-40 mb-30">
          <img src={ctaImg} alt="" width={250} />
          </div>
        </section>

        <section className="lg:flex flex-row bg-[#eaf5f8] lg:-mt-20 mt-20 pb-10 ">
          <div className="ml-30 mt-20">
            <img src={RazorpayLogo} alt="" width={100} className="text-blue-950 mb-4" />
            <div className="lg:w-60 -ml-10 w-60 ">
             <p className="text-sm">Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p> <br />
            <p className="text-sm">RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p> br
            <p className="text-sm">Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p><br />
            <p className="text-sm">Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI & RBL bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>
             <img src={footerCertificate1} alt="" width={100} />
             <img src={footerCertificate2} alt="" width={100} className="ml-30 -mt-10"  />
             </div>
             </div>
             <div className="lg:ml-10 ml-30 mt-20">
              <h1 className="text-lg text-gray-500 font-bold">BANKING PLUS</h1>
              <div className="flex flex-col space-y-1">
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">RazorpayX </a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Current Account</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">payouts</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">payouts Links</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Corporate Cradit Card</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">view live Demobutt <button className="bg-green-400 rounded-md p-0.5 text-white">NEW</button></a>
              </div>
              
              <h1 className="text-lg text-gray-500 font-bold mt-4">LANDING</h1>
              <div className="flex flex-col space-y-1">
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Razorpay Capital </a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Instant Sattlements </a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Line of Cradit</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Working Capital Loans </a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Marketplace Instant Sattlements</a>
              </div>
              <h1 className="text-lg text-gray-500 font-bold mt-4">BECOME A PARTNER</h1>
              <div className="flex flex-col space-y-1">
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Rafer and Earn</a>
              <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Onboarding APIs </a>
              </div>
              <h1 className="text-lg text-gray-500 font-bold mt-4">MORE</h1>
              <div className="flex flex-col space-y-1">
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Routes</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Invoices</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Freelancer Payments</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">International </a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Flash checkout</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">UPI </a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">ePOS</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Checkout Demo</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">RazorpayX Payroll</a>
              </div>
              </div>
              <div  className="lg:ml-10 ml-30 mt-15 mb-20">
                <h1 className="text-lg text-gray-500 font-bold mt-4">ACCEPTS PAYMENTS</h1>
                <div className="flex flex-col space-y-1">
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Payment Gateway</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Payment pages</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200"> Payments Link</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Razorpay POS <button className="bg-green-400 rounded-md p-0.5 text-white">NEW</button> </a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">QR Codes</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Subscriptions</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Smart Collect</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Optimization</a>
                 </div>
                 <h1 className="text-lg text-gray-500 font-bold mt-4">DEVELOPERS</h1>
                 <div className="flex flex-col space-y-1">
                  <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Docs</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Integrations</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200"> APIs Referance</a>
                 </div>
                 <h1 className="text-lg text-gray-500 font-bold mt-4">RESOURCES</h1>
                 <div className="flex flex-col space-y-1">
                  <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Blogs</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Customer Stories</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200"> Events</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Chargeback Guide</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200"> Settlement Guide</a>
                 </div>
                 <h1 className="text-lg text-gray-500 font-bold mt-4">Solutions</h1>
                 <div className="flex flex-col space-y-1">
                  <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Education</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">E-Commerce</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">SaaS</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">BFSI</a>
                 </div>
                  <h1 className="text-lg text-gray-500 font-bold mt-4">FREE TOOLS</h1>
                 <div className="flex flex-col space-y-1">
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">GST Calculator</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Online TDS payment</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">GST Number Search</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">GST Search by PAN</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">ROI Calculator <button className="bg-green-400 rounded-md p-0.5 text-white">NEW</button></a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">CAGR Calculator <button className="bg-green-400 rounded-md p-0.5 text-white">NEW</button></a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">EBITDA Calculator <button className="bg-green-400 rounded-md p-0.5 text-white">NEW</button></a>
                 </div>
                </div>
                <div className="lg:ml-5 ml-30 mt-15">
                 <h1 className="text-lg text-gray-500 font-bold mt-4">COMPANY</h1>
                 <div className="flex flex-col space-y-1">
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">About Us</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Carreers</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Turm of Use</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Privacy Policy</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Grievance Redressal </a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Responsive Disclosure </a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Parters</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">White Paper</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Corporate Information</a>
                </div>
                <h1 className="text-lg text-gray-500 font-bold mt-4">HELP & SUPPORT</h1>
                 <div className="flex flex-col space-y-1">
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Support</a>
                 <a href="#" className="text-blue-500 text-xl hover:text-gray-500 transition-all duration-200">Knowledge Base</a>
                 </div>
                  <h1 className="text-lg text-gray-500 font-bold mt-4">FIND US ONLINE</h1>
                  <div className="mt-2 flex flex-row mb-10 space-x-2">
                    <a href="https://www.instagram.com/anurag_mishra676?utm_source=qr&igsh=MTd1ZW91c3Z2dmZ3bA=="><img src={instagram} alt="" width={30} /></a>
                     <a href="https://www.linkedin.com/in/anurag-mishra-034899318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedinIcon} alt="" width={25} /></a>
                       <a href="https://github.com/dashboard"><img src={git} alt="" width={25} /></a>
                  </div>
                 
    

                 </div>
            
        </section>
        
     

 </>
  )
}

export default App
