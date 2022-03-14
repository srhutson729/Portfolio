import React from 'react';
import { Document, Page } from 'react-pdf';

import resume from '../pdf/resume.pdf';

export default function Test() {
  return (
    <Document file={resume}>
          <div class="d-flex justify-content-center">
      <Page pageNumber={1} />
       </div>
       <div class="d-flex justify-content-center">
     <button type="button" class="btn btn-danger" >Download</button>
     </div>
     </Document>

     
     );}




