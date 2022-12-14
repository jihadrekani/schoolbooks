import React from "react";
import { Link } from "react-router-dom";
import pola1 from '../images/poolbadini/pola1.jpg'
import pola2 from '../images/poolbadini/pola2.jpg'
import pola3 from '../images/poolbadini/pola3.jpg'
import pola4 from '../images/poolbadini/pola4.jpg'
import pola5 from '../images/poolbadini/pola5.jpg'
import pola6 from '../images/poolbadini/pola6.jpg'

import Footer from '../components/Footer'





export default function SeretayiBadini() {
  return (
    <div className=" mx-auto ">
      <h2 className="text-center   font-bold text-3xl mt-[50px] mb-5 text-sky-900">
        پەرتوکێن قوناغا سەرەتایی بادینـی
      </h2>




      <div className='grid correct-display  grid-cols-2 xl:grid-cols2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1    container mx-auto space-x-1 mt-[80px]'>

        <div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini1">

                <img
                  className="p-2 h-[400px]"
                  src={pola1}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
            
              </div>
          </div>
        </div>
        
{/* ------------------------------------------------- */}

<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini2">
               
                <img
                  className="p-2 h-[400px]"
                  src={pola2}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
              
              </div>
          </div>
        </div>
        

        
{/* ------------------------------------------------- */}




        <div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini3">
             
                <img
                  className="p-2 h-[400px]"
                  src={pola3}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
                
              </div>
          </div>
        </div>


        
{/* ------------------------------------------------- */}








        <div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini4">
              
                <img
                  className="p-2 h-[400px]"
                  src={pola4}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
              
              </div>
          </div>
        </div>




{/* ------------------------------------------------- */}



<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini5">
                
                <img
                  className="p-2 h-[400px] w-[310px]"
                  src={pola5}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
             
              </div>
          </div>
        </div>

{/* ------------------------------------------------- */}







<div className="rounded ">
          <div className="flex justify-center ">
            <Link to="/badini6">
                
                <img
                  className="p-2 h-[400px]"
                  src={pola6}
                  alt=""
                />
                </Link>
              <div className="p-6 flex items-center justify-center">
               
              </div>
          </div>
        </div>
{/* ------------------------------------------------- */}
      </div>
      <Footer />
    </div>
  );
}
