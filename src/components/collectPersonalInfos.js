import { useDispatch, useSelector } from "react-redux"
import { adressContentFunc } from "../redux/informationSlice"
import { selectedStateFunc } from "../redux/countries&statesSlice";
import Select from 'react-select';

const ColletPersonalInfos = () => {

    const dispatch = useDispatch()

    const dataPushingFunc = (content , field) => {
        dispatch(adressContentFunc({content , field}))
    }

      const countries = useSelector(state => state.countriesAndStates.countries)
      const states = useSelector(state => state.countriesAndStates)

      const customStyles = { //=> for dropdown menu customize
        option: (provided, state) => ({
          ...provided, 
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#0285c7' : state.isFocused ? '#38bdf8' : 'white',
          fontSize : '12px',
        }),
        control: (provided) => ({
          ...provided,
          width: '100%',
          minHeight: "48px",
          height : '48px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize : "12px",
          fontFamily : "Gabarito",
          maxHeight: '12px',
          borderColor : 'black'
        }),
        menu: (provided, state) => ({
            ...provided,
            borderRadius: '8px',
            overflowY: 'auto',
            
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menuList: (provided, state) => ({
            ...provided,
            padding: 0,
            fontSize: '12px', 
            backgroundColor: state.isFocused ? '#e6f7ff' : 'white', // 
            borderRadius: '8px',
            
        }),
          dropdownIndicator: (provided, state) => ({
            alignItems: 'items-center',
            justifyContent: 'center',
            marginRight : "5px",
            marginTop : "1px"
          }),
      };

      const selectedCountry = useSelector(state => state.informations.country)
      const selectedState = useSelector(state => state.countriesAndStates)

    return (
        <div className="flex flex-col w-full">

            <div className="flex flex-col sm:flex-row w-full">
                
                <input 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="First Name"
                    onChange={(e) => dataPushingFunc(e.target.value , "firstName")}
                />

                <input 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="Last Name"
                    onChange={(e) => dataPushingFunc(e.target.value , "lastName")}
                />

            </div>

            <div className="flex flex-col sm:flex-row w-full">
                
                <input
                    onChange={(e) => dataPushingFunc(e.target.value , "companyName")} 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="Company Name"
                />

                <input
                    onChange={(e) => dataPushingFunc(e.target.value , "jobTitle")} 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="Job Title"
                />

            </div>

            <div className="flex flex-col sm:flex-row w-full">
                
                <input
                    onChange={(e) => dataPushingFunc(e.target.value , "emailAdress")} 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="Email Address"
                />

                <input
                    onChange={(e) => dataPushingFunc(e.target.value , "webSite")} 
                    className="h-12 p-2 rounded-md w-full border border-black m-2"
                    placeholder="Website"
                />

            </div>
            
            <div className="text-xs m-2 font-gabarito">By entering your email, you agree to receive marketing emails from Startxpress.</div>

            <div className="flex flex-col w-full">

                <div className="w-full m-2 sm:pr-4">
                    <input
                        onChange={(e) => dataPushingFunc(e.target.value , "address")} 
                        className="h-12 p-2 rounded-md w-full border border-black"
                        placeholder="Adress"
                    />
                </div>

                <div className="w-full flex flex-col sm:flex-row">
                    
                    <input
                        onChange={(e) => dataPushingFunc(e.target.value , "city")} 
                        className="h-12 p-2 rounded-md w-full border border-black m-2"
                        placeholder="City"
                    />

                    <input
                        onChange={(e) => dataPushingFunc(e.target.value , "postalCode")} 
                        className="h-12 p-2 rounded-md w-full border border-black m-2"
                        placeholder="Zip/postal code"
                    />

                </div>
                <div className="w-full flex flex-col sm:flex-row pt-2 pb-2 pl-2 pr-0 sm:p-2">

                    <div className="w-full sm:mr-2">
                        <Select
                            className=''
                            options={countries}
                            styles={customStyles}
                            isSearchable
                            onChange={(selectedOption) => dataPushingFunc(selectedOption , "country")}
                            value={selectedCountry}
                        />
                    </div>

                    <div className="w-full mt-4 sm:ml-2 sm:mt-0">
                        {
                            selectedCountry.value ==="United States" ? 
                            (<Select
                                className=''
                                options={states.USstates}
                                styles={customStyles}
                                isSearchable
                                onChange={(selectedOption) => {dataPushingFunc(selectedOption.value , "state");
                                                            dispatch(selectedStateFunc({selectedOption , field : "USselectedState"}))}}
                                value={selectedState.USselectedState}
                            />) 
                            :
                            selectedCountry.value ==="United Kingdom" ? 

                            (<Select
                                className=''
                                options={states.UKStates}
                                styles={customStyles}
                                isSearchable
                                onChange={(selectedOption) => {dataPushingFunc(selectedOption.value , "state");
                                                            dispatch(selectedStateFunc({selectedOption , field : "UKselectedState"}))}}
                                value={selectedState.UKselectedState}
                            />)

                            :
                            (<input
                                onChange={(e) => dataPushingFunc(e.target.value , "state")} 
                                className="h-12 p-2 rounded-md w-full border border-black"
                                placeholder="State/Province"
                            />)
                        }


                    </div>


                </div>
            </div>

        </div>
    )
}

export default ColletPersonalInfos