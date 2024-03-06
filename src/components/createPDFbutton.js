import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useSelector } from "react-redux";


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

    const generatePDF = () => {

      const doc = new jsPDF();

 
      doc.setDrawColor(169, 169, 169); 
      doc.rect(45, 30, 125, 60, 'S');

      if (logo) {
        const img = new Image();
        img.src = logo;
        doc.addImage(img, 'PNG', 52, 37, 7, 7);
        doc.addImage(img, 'JGP', 52, 37, 7, 7);
        doc.addImage(img, 'JPEG', 52, 37, 7, 7);
        console.log('Logo yüklendi');
      }

      doc.setFont("helvetica");
      doc.setFontSize(10);
      doc.text(`${companyName}`, 52 , 49)
      doc.text(`${firstName + " " + lastName}`, 145 , 40.5)
      doc.setFont("Times")
      doc.text(`${jobTitle}`, 145 , 49)
      doc.setDrawColor(169, 169, 169); // Gri renk (RGB)
      doc.line(45, 59, 170, 59); 
      doc.setFontSize(8);
      doc.text(`${address}`, 52 , 69) 
      doc.text(`${city}`, 52 , 75)
      doc.text(`${state}`, 52 , 78)
      doc.text(`${postalCode}`, 52 , 81)

      doc.text(`${emailAdress}`, 122 , 78) 
      doc.text(`${webSite}`, 122 , 81) 

      doc.save('business-card.pdf'); 

    }

    return (
                 <div className='p-2'>
                   <button 
                   onClick={generatePDF}
                   className='w-52 bg-sky-600 p-4 text-sm font-gabarito text-white rounded-md cursor-pointer hover:bg-sky-800 transition-all duration-200 ease-in-out'>Create Business Card</button>
                 </div>
    )
}

export default CreatePDFbutton