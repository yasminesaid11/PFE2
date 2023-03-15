import React from 'react';
import './Add2D.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useState,useEffect } from "react";
import { Container,Row,Col } from 'react-bootstrap'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@material-ui/core/IconButton';
import { faCoffee,faCalculator,faFile } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../SideBar/SideBar';
import logo_ct from '../../images/logo-ct.png'

import admin from '../../images/admin.png'
import projet from '../../images/projet1.png'
import dash from '../../images/dash.png'
import payement from '../../images/payement.png'





const Points =[
  {"point":" 0.0,0.0"},
    {"point":" 0.0,0.0"},
    {"point":" 0.0,0.0"},
     {"point":" \n\t\t\t"}
]

            const Add2D = () => {
   
             
                  const [selectedFile, setSelectedFile] = useState(null);
                  const [coordinates, setCoordinates] = useState([{ point: "0,0" }]);
                  const [coordinates2, setCoordinates2] = useState([{ point: "0,0" }]);
                  const [coordinates3, setCoordinates3] = useState([{ point: "0,0" }]);
                  const [coordinates4, setCoordinates4] = useState([{ point: "0,0" }]);
                  const [errorMessage, setErrorMessage] = useState("");

                  const [error, setError] = useState(null);
                  const [showDownloadLink, setShowDownloadLink] = useState(false);
                  const [fileName, setFileName] = useState(""); // état pour stocker le nom de fichier

                  const handleFileInput = (event) => {
                    setSelectedFile(event.target.files[0]);
                  };
                 
                  const handleSubmit = (event) => {
                    event.preventDefault();
                    if (selectedFile.type !== "application/vnd.google-earth.kml+xml") {
                      setErrorMessage("Invalid file type. Only KML files are allowed.");
                      return;
                    }
                    const formData = new FormData();
                    formData.append("file", selectedFile);
                  
                    fetch('http://localhost/projet/api/kml_txt.php', {
                      method: 'POST',
                      body: formData,
                    })
                    .then(response => {
                      if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                      return response.text(); // parse response as plain text
                    })
                    .then(data => {
                      // split plain text into an array of coordinates
                      const coordinates = data.trim().split("\n").map(point => ({ point }));
                      setCoordinates(coordinates);
                      console.log(coordinates);
                      setShowDownloadLink(true); // update state to show download link
                      setFileName("resultat.txt"); // mettre à jour le nom de fichier

                    })
                    .catch(error => setError(error.message));
                  };
                  
                  
              
                  
                  return (
                    <div>
                      <Row>
                        <Col md={2}>
                      <SideBar/>
                      </Col>
               <Col md={10}>
                    <div className="upload-box">
                    <form name="main" method="POST" enctype="multipart/form-data"  onSubmit={handleSubmit}>
                    <h3 >Télécharger un fichier KML:</h3>
                    <div >
                        <input type="file" name="file-upload"  id="file-upload" onChange={handleFileInput}/>
                       <br></br>
                        {errorMessage && <div className="error">{errorMessage}</div>}
                        
                       <br></br>
                       </div>
                    
                        <Stack className="button" direction="row" spacing={2}>

                        <Button type="sumbit" variant="contained" disabled={!selectedFile}>
                        <FontAwesomeIcon icon={faFile} />

                                  Convertir</Button>
                           <Button variant="contained"  disabled={!selectedFile}>
                           <FontAwesomeIcon icon={faCalculator} />
                                      Calculer</Button>

                             </Stack>

      {fileName && ( // afficher le lien de téléchargement s'il y a un nom de fichier
                  <a href={`http://localhost/projet/api/${fileName}`}
                             download={fileName}>{fileName}</a>
)}
                             </form>
                    </div> 
                             
                  
                    <br></br>
                  
                    <div style={{ overflowX: 'auto' }}>
                    <div>
                      
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="yas">Convertir KML en TXT</h6>
              </div>
            </div>
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th colSpan={2} >WGS(84)</th>
                      <th colSpan={2} >STT</th>
                      <th colSpan={2} >NTT</th>
                      <th colSpan={2} >IGM</th>
                    </tr>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>X</th>
            <th>y</th>
            <th>X</th>
            <th>Y</th> 
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>
        {coordinates.map((coordinate, index) => {
          const coordinate2 = coordinates2[index] || { point: "0,0" };
          const coordinate3 = coordinates3[index] || { point: "0,0" };
          const coordinate4 = coordinates4[index] || { point: "0,0" };


          return (
            <tr key={index}>
              <td>{coordinate.point.split(',')[0]}</td>
              <td>{coordinate.point.split(',')[1]}</td>
              <td>{coordinate2.point.split(',')[0]}</td>
              <td>{coordinate2.point.split(',')[1]}</td>
              <td>{coordinate3.point.split(',')[0]}</td>
              <td>{coordinate3.point.split(',')[1]}</td>
              <td>{coordinate4.point.split(',')[0]}</td>
              <td>{coordinate4.point.split(',')[1]}</td>
            </tr>
          );
        })}
      </tbody>

         
      </table>
      </div>
      </div>
      </div>
      </div>
    </div>
  








                  </div>
                  </div>
                  </Col>
                  </Row>
</div>
                  );
                }
                
                

export default Add2D