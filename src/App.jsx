import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './image/logo.png'
import image2 from './image/image.svg'
import image3 from './image/icon.svg'
import image4 from './image/Button.svg'
import image5 from './image/boking.svg'
import image6 from './image/tv.svg'
import image7 from './image/Images.png'
import image8 from './image/01.svg'
import image9 from './image/02.svg'
import image10 from './image/03.svg'
import image11 from './image/04.svg'
import image12 from './image/arrow-left.png'
import image13 from './image/arrow-right.png'
import image14 from './image/img1.svg'
import image15 from './image/img2.png'
import image16 from './image/img3.svg'
import image17 from './image/footer_logo.svg'
import image18 from './image/fresh.png'
import viteLogo1 from './image/item_01.png'
import viteLogo2 from './image/item_02.svg'
import image19 from './image/item_03.svg'
import image20 from './image/item_04.svg'
import image21 from './image/Avatar.png'
import image22 from './image/left.png'
import image23 from './image/Line.png'
import image24 from './image/f_1.png'
import image25 from './image/f_2.png'
import image26 from './image/f_3.png'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className="bg-white bg-center bg-cover px-20 py-2 m-auto md:flex md:justify-center">
      <nav className="flex items-center">
      <img src={image1} alt="logo" className="w-[85px] mr-16"/>

        <ul className="md:flex md:items-center duration-500">
          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-[#E5745D] px-2 hover:text-blue-700 ">Home</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-[#014A45] px-2 hover:text-red-600 ">Pages</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-[#014A45] px-2 hover:text-red-600">Services</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-[#014A45] px-2 hover:text-red-600">Blog</a></li>

          <li className=" list-none inline-block px-5"><a href="#" className="no-underline text-[#014A45] px-2 hover:text-red-600">Contact</a></li>
        </ul>


        <button className="ml-16 bg-orange-500 text-white py-[15px] px-10 border border-white outline outline-4 outline-red-500 hover:bg-blue-700 duration-500">Download cv</button>
      </nav>
    </div>


     <div className="container md:m-auto">
     <div className='md:flex md:justify-between'>
    <div className="bg-[#00413D] md:w-[980px] md:justify-center py-16 px-28">
      <h1 className="text-white text-6xl ">Hello! <br></br> I’m Zarror Nibors</h1>

      <p className="text-white mt-10 text-xs">I’am freelance UI/UX Desogner based in Indonesia who loves to craft <br></br> attractive design experiences for the web.</p>
      <button className="mt-10 bg-orange-500 text-white py-[10px] px-8 border border-white outline outline-4 outline-red-500 hover:bg-blue-700 duration-500
      ">Contact Me</button>
    </div>
    <div>
    <img src={image2} alt="" className=""/>
    </div>
    </div>
     </div>


    <div className='text-center mt-20 '>
      <div className='md:flex md:justify-center md:gap-2'>
       <div><img src={image23} alt="logo" className="md:w-7 mt-2 "/></div>
       <div><p className='text-[#E5745D] font-bold text-xs'>MY SERVICES</p></div>
      </div>
      <p className='text-[#00413D] text-3xl font-bold'>Provide Wide Range of <br></br>
      Digital Services</p>
    </div>



    <div className='md:flex gap-16 md:justify-center mt-[6rem] text-[#00413D]'>

      <div className="shadow-2xl px-6">
      <img src={image3} alt="" className="mt-2"/>
      <p className='text-lg text-black font-bold mt-5'>Ui/Ux Design</p>
      <p className='mt-5 text-xs'>Dolor repellendus tempo ribus aue<br></br>
quibusdam offi ciis debitis rerum na,<br />
aibus minima veniam</p>
      <img src={image4} alt="" className="mt-5 mb-4"/>
      </div>

      <div className='shadow-2xl px-6'>
      <img src={image5} alt="" className="mt-2"/>
      <p className='text-lg text-black font-bold mt-5'>Mobile App Design</p>
      <p className='mt-5 text-xs'>Dolor repellendus tempo ribus aue<br></br>
quibusdam offi ciis debitis rerum na,<br />
aibus minima veniam</p>
      <img src={image4} alt="" className="mt-5 mb-4"/>
      </div>

      <div className='shadow-2xl px-6'>
      <img src={image6} alt="" className="mt-2"/>
      <p className='text-lg text-black font-bold mt-5 '>Mobile App Design</p>
      <p className='mt-5 text-xs'>Dolor repellendus tempo ribus aue<br></br>
quibusdam offi ciis debitis rerum na,<br />
aibus minima veniam</p>
      <img src={image4} alt="" className="mt-5 mb-4"/>
      </div>
    </div>

    <div className="flex justify-center mt-16 bg-white ">
    <div>
    <img src={image7} alt="" className="object-cover h-80"/>
    </div>

    <div className="ml-10">
      <div className='flex gap-2'>
      <div><img src={image23} alt="" className="w-7 mt-3"/></div>
       <div><p className="text-[#E5745D]">About Me</p></div>
      </div>
      <p className="text-3xl text-[#00413D] mt-3 font-bold">I Enjoy Solving Problems<br></br>
      With Scalable Solutions</p>

      <p className="text-xs text-[#00413D]">Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
aeci velit, sed<br></br> quia non numquam eius modi tempora incidunt lao
magnam aliquam quaerat<br></br> voluptatem reprehenderit.<br></br><br></br>

Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
reprehenderit<br></br> non numquam eius.</p>

<button className="mt-10 bg-orange-500 text-white py-[10px] px-8 border border-white outline outline-4 outline-red-500 hover:bg-blue-700 duration-500">Download CV</button>
    
    </div>
    </div>
    <div className="flex bg-white justify-center">
    <img src={image8} alt="" className="w-60"/>
    <img src={image9} alt="" className="w-60"/>
    <img src={image10} alt="" className="w-60"/>
    <img src={image11} alt="" className="w-60"/>
    </div>


     <div className="flex justify-center bg-white">
     <div className='mr-60'>
       <div className='flex gap-2'>
        <div><img src={image23} alt="" className="w-7 mt-3"/></div>
        <div><p className="text-[#E5745D]">Recent Projects</p></div>
       </div>
      <p className="text-3xl mt-2 font-bold  text-[#00413D]">My Recent Projects</p>
    </div>
    <div className="flex ml-52">
      <img src={image12} alt="" className="px-2 w-14 h-10"/>
      <img src={image13} alt="" className="px-2 w-14 h-10"/>
    </div>
     </div>




      <div className="flex justify-center mt-12">

    <div className='shadow-2xl'>
     <img src={image14} alt="" className="px-2 w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">Analytics, UI-Ux</p>
     <p className="font-bold  text-[#00413D] mt-3">Branding & Digital Video <br></br> Campaign For George’s Cafe</p>
     <p className="text-xs mt-3  text-[#00413D]">Lorem Ipsum Is Simply Dummy Text Of The<br></br>
     Printing And Typesetting Industry.</p>
     <a href="#" className=" text-[#00413D] hover:text-red-600">View Case Studies</a>
    
     </div>
     </div>

     <div className='shadow-2xl'>
     <img src={image15} alt="" className="px-2  w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">Analytics, UI-Ux</p>
     <p className="font-bold  text-[#00413D] mt-3">Branding & Digital Video <br></br> Campaign For George’s Cafe</p>
     <p className="text-xs mt-3  text-[#00413D]">Lorem Ipsum Is Simply Dummy Text Of The<br></br>
     Printing And Typesetting Industry.</p>
     <a href="#" className=" text-[#E5745D] hover:text-red-600 mt-4 mb-4">View Case Studies</a>
     </div>
     </div>

     <div className='shadow-2xl'>
     <img src={image16} alt="" className="px-2  w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">Analytics, UI-Ux</p>
     <p className="font-bold  text-[#00413D] mt-3">Branding & Digital Video <br></br> Campaign For George’s Cafe</p>
     <p className="text-xs mt-3  text-[#00413D]">Lorem Ipsum Is Simply Dummy Text Of The<br></br>
     Printing And Typesetting Industry.</p>
     <a href="#" className=" text-[#014A45] hover:text-red-600 mt-4 mb-4">View Case Studies</a>
     </div>
     </div>
      </div>
       <div className='flex justify-center'>
       <button className=" mt-5  bg-orange-500 text-white py-[10px] px-5 border border-white outline outline-4 outline-red-500 hover:bg-blue-700 duration-500">Explore More</button>
       </div>



      <div className="bg-white text-center mt-16">
       <div className='flex gap-2 justify-center'>
       <div><img src={image23} alt="" className="w-7 mt-2"/></div>
       <div> <p className="text-[#E5745D] text-xs">My Portfolio</p></div>
       </div>

      <p className="text-4xl text-[#00413D]">My Work Example</p>

      <ul className="items-center mt-6 ">
          <li className=" list-none inline-block px-1"><a href="#" className="no-underline  text-[#00413D] px-2 hover:text-red-600">All</a></li>

          <li className=" list-none inline-block px-"><a href="#" className="no-underline  text-[#00413D] px-2 hover:text-red-600">Branding</a></li>

          <li className=" list-none inline-block px-1"><a href="#" className="no-underline  text-[#00413D] px-2 hover:text-red-600">Photography</a></li>

          <li className=" list-none inline-block px-1"><a href="#" className="no-underline  text-[#00413D]  px-2 hover:text-red-600 ">Fashion</a></li>

          <li className=" list-none inline-block px-1"><a href="#" className="no-underline  text-[#00413D] px-2 hover:text-red-600 ">Product</a></li>
          </ul>
     </div>

      <div className="bg-white w-[100%] ">
      <div className="flex justify-center mt-7 gap-4">
     <img src={viteLogo1} alt=" " className=""/>
     <img src={viteLogo2} alt=" " className=""/>
     </div>


     <div className="flex justify-center mt-4 gap-4">
     <img src={image19} alt=" " className=""/>
     <img src={image20} alt=" " className=" "/>
     </div>
      </div>

<div className="bg-white text-center mt-16">

       <div className='flex gap-2 justify-center'>
       <div><img src={image23} alt="" className="w-7 mt-2"/></div>
       <div><p className="text-[#E5745D] text-xs">Client Testimonial</p></div>
       </div>

      <p className="text-4xl text-[#00413D]">Feedback From Client</p>
     </div>


<div className="flex justify-center mt-8 text-[#00413D] space-x-2">
<div className='shadow-2xl p-3 border-t-4 border-[#E5745D] px-5'>
<p className="">Lorem Ipsum is simply dummy text of the printing and typesetting <br></br>industry.Lorem Ipsum is simply dummy text of the printing and this<br></br>
 typesetting industry.</p>
 </div>

 <div className='shadow-2xl p-3 border-t-4 border-[#E5745D] '>
 <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry.Lorem Ipsum is simply dummy text of the printing and this<br></br>
 typesetting industry.</p>
 </div>
 </div>

<div className="flex mt-6 justify-center gap-80 text-[#00413D]">
<div className="flex justify-center ">
<img src={image21} alt="" className=" w-11 h-13"/>
 <div className='px-3'><p>Michale Doie</p>
 <p className="text-xs">Product Designer</p></div>
</div>

<div className="flex justify-center">
<img src={image21} alt="" className="w-11 h-13"/>
 <div className='px-3'><p>Adam Smith</p>
 <p className="text-xs">Designer</p></div>
</div>
</div>

 <div className='mt-5 flex justify-center p-8'>
 <div>
<img src={image22} alt="" className="px-2  w-[400px]"/>
</div>
<div>
  <div className='flex gap-2 px-5 mt-5'>
   <div><img src={image23} alt="" className="w-7 mt-2"/></div>
   <div><p className='text-xs text-[#E5745D] '>Get In Touch</p></div>
  </div>
   

  <h1 className=' text-[#00413D] px-5 font-bold'>Feel Free to Contact</h1>

  <div className="flex mt-4  justify-center p-5 space-x-10  text-[#00413D]">
  <div className='flex flex-col'>
  <label htmlFor="name">Enter Name</label>
  <input type="text" id="name" className='border-b-2  space-x-2' />
  </div>
  <div className='flex flex-col'>
  <label htmlFor="email">Enter Email</label>
  <input type="email" id="name" className='border-b-2  space-x-2' />
  </div>
  </div>
  

 <div className="flex  justify-center p-5 space-x-10  text-[#00413D]">
 <div className='flex flex-col'>
  <label htmlFor="phone">Phone</label>
  <input type="number" id="name" className='border-b-2  space-x-2' />
  </div>
  <div className='flex flex-col '>
  <label htmlFor="subject">Subject</label>
  <input type="text" id="name" className='border-b-2  space-x-2' />
  </div>
 </div>


  <div className="p-5 flex flex-col  text-[#00413D]">
  <label htmlFor="subject">Subject</label>
  <input type="text" id="name" className='border-b-2  space-x-2' />
  </div>



  <button className=" mt-5 ml-6 bg-orange-500 text-white py-[12px] px-8 border border-white outline outline-4 outline-red-500 hover:bg-blue-700 duration-500">Contact Us</button>
</div>
</div>


     <div className="bg-white text-center mt-16">
      <div className='flex justify-center gap-2 mt-3'>
       <div><img src={image23} alt="" className="w-7 mt-2"/></div>
       <div><p className="text-[#E5745D] text-xs">Letest Blogs</p></div>
      </div>
       

      <p className="text-4xl text-[#00413D]">Blog & Articles</p>
     </div>

    <div className="flex justify-center mt-8">

    <div className='shadow-2xl'>
     <img src={image18} alt="" className="px-2 w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">By David William</p>
     <p className="font-bold  text-[#00413D] mt-3">Quis autem vea eum iure<br></br> reprehenderit.</p>
     <p className="text-xs mt-3  text-[#00413D]">Dolor repellendus temporibus autem rerum<br></br> quibusdam officiis debitis nece.</p>
     <p className="mt-4 mb-4 text-[#00413D] hover:text-blue-600 w-fit ">Read More</p>
     </div>
     </div>

     <div className='shadow-2xl'>
     <img src={image18} alt="" className="px-2  w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">By Will Doie</p>
     <p className="font-bold  text-[#00413D] mt-3">Reprehenderit in vouta<br></br>
     velit esse cillum.</p>
     <p className="text-xs mt-3  text-[#00413D]">Dolor repellendus temporibus autem rerum<br></br> quibusdam officiis debitis nece.</p>
     <p className="mt-4 mb-4 text-[#E5745D] hover:text-blue-600 w-fit">Read More</p>
     </div>
     </div>

     <div className='shadow-2xl'>
     <img src={image18} alt="" className="px-2  w-[288px]"/>
     <div className='ml-5'>
     <p className="text-[#E5745D] mt-3 text-xs">By Adam Smith</p>
     <p className="font-bold  text-[#00413D] mt-3">Soluta nobis ose aligen<br></br>
     optio cumue.</p>
     <p className="text-xs mt-3  text-[#00413D]">Dolor repellendus temporibus autem rerum<br></br> quibusdam officiis debitis nece.</p>
     <p className="mt-4 mb-4 text-[#00413D] hover:text-blue-600 w-fit">Read More</p>
     </div>
     </div>
      </div>

       <div className='bg-[#00413D] text-center mt-16'>
       <div className='w-full flex justify-center '>
      <img src={image17} alt="" className="text-white mt-5 w-20"/>
      </div>
      <div>
      <ul className="items-center mt-6 ">
          <li className=" list-none inline-block px-4"><a href="#" className="no-underline text-white px-2 hover:text-red-600">Home</a></li>

          <li className=" list-none inline-block px-4"><a href="#" className="no-underline  text-white px-2 hover:text-red-600">About</a></li>

          
          <li className=" list-none inline-block px-4"><a href="#" className="no-underline  text-white px-2 hover:text-red-600">Services</a></li>

          <li className=" list-none inline-block px-4"><a href="#" className="no-underline  text-white px-2 hover:text-red-600">Portfolio</a></li>

          <li className=" list-none inline-block px-4"><a href="#" className="no-underline  text-white px-2 hover:text-red-600 ">Blog</a></li>

          <li className=" list-none inline-block px-4"><a href="#" className="no-underline  text-white px-2 hover:text-red-600 ">Contact</a></li>
        </ul>

        <div className="flex justify-center items-center gap-2 mt-5 ">
        <img src={image24} alt="" className="bg-[#E5745D] p-1 rounded-2xl w-7"/>
        <img src={image25} alt="" className="bg-[#E5745D] p-1 rounded-2xl w-7"/>
        <img src={image26} alt="" className="bg-[#E5745D] rounded-2xl p-1 w-7"/>
        </div>
        <p className="text-xs text-white mt-12 ">Copyright © 2023 Design By Estiak. All rights reserved.</p>
      </div>
       </div>
    
    </>
  )
}

export default App
