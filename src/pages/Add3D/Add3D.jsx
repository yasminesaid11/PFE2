import React from 'react';
import './Add3D.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useState,useEffect } from "react";

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

import { Container,Row,Col } from 'react-bootstrap'



const Points =[
  {"point":" 0.0,0.0"},
    {"point":" 0.0,0.0"},
    {"point":" 0.0,0.0"},
     {"point":" \n\t\t\t"}
]

            const Add3D = () => {
   
             
                  const [selectedFile, setSelectedFile] = useState(null);
                  const [coordinates, setCoordinates] = useState([]);
                  const [coordinates2, setCoordinates2] = useState([{ point: "0,0,0" }]);
                  const [coordinates3, setCoordinates3] = useState([{ point: "0,0,0" }]);
                  const [coordinates4, setCoordinates4] = useState([{ point: "0,0,0" }]);

                  const [error, setError] = useState(null);
                  const [showDownloadLink, setShowDownloadLink] = useState(false);
                  const [fileName, setFileName] = useState(""); // état pour stocker le nom de fichier

                  const handleFileInput = (event) => {
                    setSelectedFile(event.target.files[0]);
                  };
                 
                  const handleSubmit = (event) => {
                    event.preventDefault();
                    const formData = new FormData();
                    formData.append("file", selectedFile);
                  
                    fetch('http://localhost/projet/api/kmz_txt.php', {
                      method: 'POST',
                      body: formData,
                    })
                    .then((response) => response.json())
                    .then((data) => {setCoordinates(data)
                    console.log(coordinates)
                    setShowDownloadLink(true); // update state to show download link
                    setFileName("resultat3D.txt"); // mettre à jour le nom de fichier

                  })
                    .catch((error) => console.log(error));
                  };
                  
                  
                  
                    if (error) {
                      return <div>Error: {error}</div>;
                    }
              
                  
                  return (
                    <div>
                    <Row>
                    <Col md={2}>
                  <SideBar/>
                  </Col>
                   <Col md={10}>
                    <div className="upload-box">
                    <form name="main" method="POST" enctype="multipart/form-data"  onSubmit={handleSubmit}>
                    <h3 >Télécharger un fichier KMZ:</h3>
                    <div >
                        <input type="file" name="file-upload"  id="file-upload" onChange={handleFileInput}/>
                       <br></br>
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
                <h6 class="yas">Convertir KMZ en TXT</h6>
              </div>
            </div>
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th colSpan={3} >WGS(84)</th>
                      <th colSpan={3} >STT</th>
                      <th colSpan={3} >NTT</th>
                      <th colSpan={3} >IGM</th>
                    </tr>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Atitude </th>
            <th>X</th>
            <th>Y</th>
            <th>Z </th>
            <th>X</th>
            <th>Y</th>
            <th>Z </th>

            <th>X</th>
            <th>Y</th>
            <th>Z </th>

          </tr>
        </thead>
        <TableBody>
        {coordinates.map((coordinate, index) => {
          const coordinate2 = coordinates2[index] || { point: "0,0,0" };
          const coordinate3 = coordinates3[index] || { point: "0,0,0" };
          const coordinate4 = coordinates4[index] || { point: "0,0,0" };


          return (
            <TableRow key={index}>
              <TableCell>{coordinate.latitude}</TableCell>
              <TableCell>{coordinate.longitude}</TableCell>
              <TableCell>{coordinate.elevation}</TableCell>

              <TableCell>{coordinate2.point.split(',')[0]}</TableCell>
              <TableCell>{coordinate2.point.split(',')[1]}</TableCell>
              <TableCell>{coordinate2.point.split(',')[2]}</TableCell>

              <TableCell>{coordinate3.point.split(',')[0]}</TableCell>
              <TableCell>{coordinate3.point.split(',')[1]}</TableCell>
              <TableCell>{coordinate3.point.split(',')[2]}</TableCell>

              <TableCell>{coordinate4.point.split(',')[0]}</TableCell>
              <TableCell>{coordinate4.point.split(',')[1]}</TableCell>
              <TableCell>{coordinate4.point.split(',')[2]}</TableCell>

            </TableRow>
          );
        })}
      </TableBody>

         
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
                
                

export default Add3D