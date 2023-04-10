import { useState,useEffect } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { getquestions,reset } from "../../services/question/questionSlice";
import { useDispatch } from "react-redux";

const Listquestions = () => {
   const [question,setQuestion] = useState([]);
   const dispatch = useDispatch();
    
   useEffect(() => {
  
      dispatch(getquestions())
      dispatch(reset())
    }, []);



   return (
      <div>
         <Sidebar/>
         <Navbar />
         <div>
            <section class="flex items-center py-16 bg-white lg:py-20 font-poppins ">
               <div class="justify-center flex-1 max-w-3xl px-4 py-4 mx-auto text-left lg:py-10 ">
                  <div class="mb-10 text-center">
                     <span
                        class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase text-black">
                        Our Questions
                     </span>
                     <h1 class="text-3xl font-bold capitalize "> Questions List</h1>
                  </div>

                  <div
                     class="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
                     <div>
                        <img src="https://i.postimg.cc/MKrLbcmm/pexels-max-fischer-5212345.jpg" alt=""
                           class="object-cover w-full rounded-md h-80 md:h-full" />
                     </div>
                     <div class="px-4 py-4 lg:px-2 ">
                        <a href="#" class="text-sm font-medium text-gray-600 text-black ">
                           June 4, 2022
                        </a>
                        <div class="w-8 pb-1 mb-4 border-b border-gray-600 "></div>
                        <a href="javacript:void(0)" class="mt-2 mb-4 text-xl font-semibold text-blue-500">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        <p class="mb-4 text-sm text-gray-500 text-black">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
                           labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor
                           incididunt ut
                           labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div class="flex items-center ">
                           <a href="#"
                              class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="w-4 h-4 mr-1 bi bi-eye" viewBox="0 0 16 16">
                                 <path
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                                 </path>
                                 <path
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                                 </path>
                              </svg>8sec read
                           </a>
                           <a href="#"
                              class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="w-4 h-4 mr-1 bi bi-chat" viewBox="0 0 16 16">
                                 <path
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                                 </path>
                              </svg>Comments
                           </a>
                           <a href="#"
                              class="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="w-4 h-4 mr-1 bi bi-archive" viewBox="0 0 16 16">
                                 <path
                                    d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z">
                                 </path>
                              </svg>Slider
                           </a>
                        </div>
                     </div>
                  </div>    

               </div>
            </section>
         </div>
         <Footer />
      </div>
   )
}

export default Listquestions;