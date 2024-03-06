import ColletPersonalInfos from "./components/collectPersonalInfos";
import CreatePDFbutton from "./components/createPDFbutton";
import LogoUplodaer from "./components/logoUploader";

function App() {



  return (
    <div className="h-full">
      <div className="bg-sky-600 h-20 w-full flex justify-center items-center font-bold text-white">Header</div>
      <div className="bg-emerald-600 h-10 w-full flex justify-center items-center font-bold text-white">Navbar</div>

      <div className="h-full flex justify-center items-center"> {/* aside and main content */}

        <div className="bg-slate-800 w-36 h-screen font-bold text-white hidden justify-center items-center sm:flex">aside</div>
        
        <div className="flex justify-center items-center w-full">

        <div className="w-[1000px] flex justify-center items-center pt-4 pl-4 pb-4 pr-8 sm:pr-4 "> {/* main content */}

            <div className="flex flex-col w-full"> {/* main container */}

                <div className="flex flex-col sm:flex-row w-full"> {/* collect infos and logo uploader */}
                  
                  <div className="w-full"> 
                    <ColletPersonalInfos/>
                  </div>

                  <div className="p-2">
                    <LogoUplodaer/>
                  </div>
                  
                </div> 

                <div> {/* button */}
                  <CreatePDFbutton/>
                </div> 

            </div>

        </div>

        </div>
      </div>

      <div className="w-full bg-cyan-900 font-bold text-white flex justify-center items-center h-20">Footer</div>

    </div>
  );
}

export default App;
