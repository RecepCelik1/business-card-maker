import React from "react";
import { Page, Text, View, Document, PDFDownloadLink ,StyleSheet, Font, Svg, Line, Image} from '@react-pdf/renderer';
import Gabarito from '../fonts/Gabarito/Gabarito-Regular.ttf'
import GabaritoBold from '../fonts/Gabarito/Gabarito-Bold.ttf'
import { useSelector } from "react-redux";

Font.register({
  family: 'Gabarito',
  src : Gabarito,
});
Font.register({
  family: 'GabaritoBold',
  src : GabaritoBold,
});

const styles = StyleSheet.create({
  page: {
    display : "flex",
    justifyContent : "center",
    flexDirection: 'row',
    paddingTop : "100px"
  },
  section: {
    margin: 10,
    padding: 15,
    flexGrow: 1,
    border : "1px",
    borderColor : "gray",
    maxWidth : "300px",
    height:"150px"
  }
});

const CreatePDFbutton = () => {

    const informations = useSelector(state => state.informations)
    let firstName = informations.firstName
    let lastName = informations.lastName
    let companyName = informations.companyName
    let jobTitle = informations.jobTitle
    let emailAdress = informations.emailAdress
    let webSite = informations.webSite
    let address = informations.address
    let city = informations.city
    let postalCode = informations.postalCode
    let country = informations.country.value
    let state = informations.state
    let logo = informations.logo

    const PDFile = () => {
      return(
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={{display : "flex", flexDirection : "row", justifyContent : "space-between"}}>
              <View style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                {logo !== null ? <Image src={logo} style={{width : "20px", height : "20px"}}/> : ""}
              </View>
              <View style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <Text style={{fontFamily : "GabaritoBold", fontSize : "8px", display : "flex", justifyContent : "center", alignItems : "center"}}>{firstName} {lastName}</Text>
              </View>
            </View>
            <View style={{display : "flex", flexDirection : "row", justifyContent : "space-between", marginTop: "4px"}}>
              <View style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
              <Text style={{fontFamily : "GabaritoBold", fontSize : "8px", display : "flex", justifyContent : "center", alignItems : "center"}}>{companyName}</Text>
              </View>
              <View style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <Text style={{fontFamily : "Gabarito", fontSize : "8px", display : "flex", justifyContent : "center", alignItems : "center"}}>{jobTitle}</Text>
              </View>
            </View>
            <Svg style={{marginTop : '30px', marginBottom : '20px'}} height="10px" width="100%">
            <Line
              x1="0"
              y1="2"
              x2="350"
              y2="2"
              stroke="rgb(192,192,192)"
            />
          </Svg>
          <View>
            <Text style={{fontFamily : "Gabarito", fontSize : "8px"}}>{address}</Text>
            <Text style={{fontFamily : "Gabarito", fontSize : "8px", marginTop : "8px"}}>{state}, {city}, {postalCode}</Text>
            <Text style={{fontFamily : "Gabarito", fontSize : "8px", marginTop : "8px"}}>{country}</Text>
          </View>
          <View style={{marginTop : "8px"}}>
            <Text style={{fontFamily : "Gabarito", fontSize : "8px", textAlign : "right"}}>{emailAdress}</Text>
            <Text style={{fontFamily : "Gabarito", fontSize : "8px", marginTop : "8px", textAlign : "right"}}>{webSite}</Text>
          </View>
          </View>
        </Page>
      </Document>
      )
    }
    return (
                 <div className='p-2'>
                <div className="hidden">
            <PDFDownloadLink document={<PDFile />} fileName="business-card.pdf" id="downloadPDF">
            </PDFDownloadLink>
          </div> 

                   <button 
                   onClick={() => document.getElementById('downloadPDF').click()}
                   className='w-52 bg-sky-600 p-4 text-sm font-gabarito text-white rounded-md cursor-pointer hover:bg-sky-800 transition-all duration-200 ease-in-out'>Create Business Card</button>
                 </div>
    )
}

export default CreatePDFbutton