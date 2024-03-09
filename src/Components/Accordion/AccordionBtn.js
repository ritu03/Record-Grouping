import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './Accordion.css'
import textConstants  from '../../utils/staticConstants'

const AccordionBtn = ({ id, suburb, records, isSuburb }) => {
  return (
    <div className="container">
     <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={id}>
            <Accordion.Header> {suburb} ({records.length})</Accordion.Header>
            <Accordion.Body>
              <Container>
              <div className="table-responsive">
                <table className="table">
                      <thead>
                        <tr>
                          <th>{textConstants.DATE_REPORTED}</th>
                          {!isSuburb ? <th>{textConstants.SUBURB}</th> : ''}
                          <th>{textConstants.POSTCODE}</th>
                          <th>{textConstants.OFFENCE_LEVEL_1_DESCRIPTION}</th>
                          {isSuburb ? <th>{textConstants.OFFENCE_LEVEL_2_DESCRIPTION}</th> : ''}
                          <th>{textConstants.OFFENCE_LEVEL_3_DESCRIPTION}</th>
                          <th>{textConstants.OFFENCE_COUNT}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((record, index) => (
                          <tr key={index}>
                            <td>{record['Reported Date']}</td>
                            {!isSuburb ? <td>{record['Suburb Incident']}</td> : ''}
                            <td>{record['Postcode Incident']}</td>
                            <td>{record['Offence Level 1 Description']}</td>
                            {isSuburb ? <td>{record['Offence Level 2 Description']}</td> : ''}
                            <td>{record['Offence Level 3 Description']}</td>
                            <td>{record['Offence count']}</td>
                          </tr>
                        ))}
                      </tbody>
                </table>
               </div>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  );
};

export default AccordionBtn