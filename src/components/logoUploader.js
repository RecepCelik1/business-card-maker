import React from 'react'
import { useDispatch } from "react-redux"
import { uploadIconReducer } from "../redux/informationSlice"
import { FaImages } from "react-icons/fa";
import { IconContext } from 'react-icons';

const LogoUplodaer = () => {
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
      const fileInput = event.target;
      const file = fileInput.files[0];
  
      if (file) {
        const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const maxSize = 5 * 1024 * 1024;
  
        if (allowedFileTypes.includes(file.type) && file.size <= maxSize) {

          const logoPath = URL.createObjectURL(file);
          dispatch(uploadIconReducer(logoPath));

        } else {
          alert('Please select a valid .jpg, .jpeg or .png file (less than 5 MB).');
          fileInput.value = '';
        }
      }
    };
    return (

                    <div className='p-2 w-full sm:w-80 h-52 bg-gray-200 flex flex-col items-center rounded-md'>
                        <div className='flex flex-col items-center m-4'>
                            <div className='flex justify-center items-center'>
                            <IconContext.Provider value={{ color: "#0284c7", className: "global-class-name", size: "4em" }}>
                                <FaImages/>
                            </IconContext.Provider>
                            </div>

                            <div className='flex justify-center items-center text-xs text-gray-500 font-gabarito'> 
                                Add your logo by browsing from your device
                            </div>
                            <div className='flex justify-center items-center text-xs text-gray-500 font-gabarito'> 
                                (JPG, JPEG, PNG, less than 5mb)
                            </div>
                        </div>
                      <div className=' border-sky-600 border-2 cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out w-1/2 h-8 rounded-sm'
                          onClick={() => document.getElementById('np-upload-button').click()}>
                            <input 
                              id='np-upload-button' 
                              type='file' 
                              style={{ display: 'none' }} 
                              onChange={handleFileChange} 
                              accept='.jpg, .jpeg, .png'
                            /> 
                            <div className='flex justify-center items-center text-sky-600 font-gabarito mt-[2px]'>
                              Choose file
                            </div>
                      </div> 

                    </div>

    )
}

export default LogoUplodaer