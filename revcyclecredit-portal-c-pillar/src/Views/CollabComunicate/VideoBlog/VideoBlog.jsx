import React from 'react';

import {useDropzone} from 'react-dropzone';
import { Container , Row , Col } from 'react-bootstrap';
import styles from "./VideoBlog.css";
import VideoBlogItemService from '../API/VideoBlogItemService.js';
import SCard from "../VideoBlog/Card/SCard.jsx";
import ReactPlayer from 'react-player';

class VideoBlog extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
         Items : [ ]
      }
    }

     componentDidMount(){
      VideoBlogItemService.retrieveAllItems()
        .then (
          response => {
           // console.log(response)
            this.setState({Items : response.data})
          }
        )
     }

  render() {
    const videoList = this.state.Items.map((item) => {
      return(
        <div className="col-sm-4">
           <SCard id={item.id} title={item.title} url={<ReactPlayer url={item.url} controls width="102%" height="105%" />} description ={item.description}/>
        </div>
      );});
      function Accept(props) {
        const {acceptedFiles,rejectedFiles, getRootProps, getInputProps} = useDropzone({
          accept: 'video/*'
        });
        
        const acceptedFilesItems = acceptedFiles.map(file => (
          <li key={file.path}>
            {file.path} 
          </li>
        ));
      
        const rejectedFilesItems = rejectedFiles.map(file => (
          <li key={file.path}>
            {file.path} 
          </li>
        ));
      
        return (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
            <p className={styles.dropzone}>  
              <p>Drag 'n' drop some files here, or <br></br><div className={styles.button}>Browse Files</div></p>
              <p></p>
            </p>
              <p></p><em>(Only videos will be accepted)</em>
            </div>
            <aside>
              <p>Accepted files</p>
              <ul className={styles.filess}>
                {acceptedFilesItems}
              </ul>
              <p>Rejected files</p>
              <ul className={styles.filess}>
                {rejectedFilesItems}
              </ul>
            </aside>
          </section>
        );
      }
      
    return (
      <div className={styles.mainBody}>
        <Container>
            <Row>
                <Col sm={10}>
                    <h3 className={styles.h3}>VideoBlog</h3>
                    <Row >   
                       {videoList}
                    </Row>
                </Col>
                <Col sm={2} className={styles.uploadVideo}>
                  video upload
                  <Accept />
                </Col>
            </Row>
        </Container>
      </div>
      
    );
  }

}

export default VideoBlog;
