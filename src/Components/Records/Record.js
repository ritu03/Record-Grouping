import React, { useEffect, useState } from 'react';
import { parse } from 'papaparse';
import AccordionBtn from '../Accordion/AccordionBtn';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function Record() {
  const [records, setRecords] = useState([]);
  const [groupedRecords, setGroupedRecords] = useState({});
  const [offenceLevel2GroupedRecords, setOffenceLevel2GroupedRecords] = useState({});
  const [toggleOffence2, setToggleOffence2] = useState(true);

    // Fetch and parse CSV data
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/crime_record.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        const { data } = parse(csv, { header: true });
        setRecords(data);
      };

      fetchData();
    }, []);


  // Group records by suburbs
    useEffect(() => {
      const groupRecordsBySuburbs = () => {
        const groupedData = {};
        records.forEach(record => {
          const suburb = record['Suburb Incident'];
          if (!groupedData[suburb]) {
            groupedData[suburb] = [];
          }
          groupedData[suburb].push(record);
        });
        return groupedData;
      };

    // Group records by suburbs
      const groupRecordsByOffenceLevel2 = () => {
        const offenceLevel2GroupedData = {};
        records.forEach(record => {
          const offenceLevel2 = record['Offence Level 2 Description'];
          if (!offenceLevel2GroupedData[offenceLevel2]) {
            offenceLevel2GroupedData[offenceLevel2] = [];
          }
          offenceLevel2GroupedData[offenceLevel2].push(record);
        });
        return offenceLevel2GroupedData;
    };
    setGroupedRecords(groupRecordsBySuburbs());
    setOffenceLevel2GroupedRecords(groupRecordsByOffenceLevel2());
  }, [records]);


  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><Button variant="primary"  onClick={() => { setToggleOffence2(!toggleOffence2) }}>Records by Suburb</Button></Navbar.Brand>
              <Form className="d-flex">
                  <Button variant="primary"  onClick={() => { setToggleOffence2(!toggleOffence2) }}>Offence Level 2 Description</Button>
              </Form>
          </Container>
        </Navbar>
        {toggleOffence2 ? Object.keys(groupedRecords).map(suburb => (
            <AccordionBtn key={suburb} suburb={suburb} records={groupedRecords[suburb]} isSuburb={toggleOffence2} />
              )) : (Object.keys(offenceLevel2GroupedRecords).map(offenceLevel2 => (
            <AccordionBtn key={offenceLevel2} suburb={offenceLevel2} records={offenceLevel2GroupedRecords[offenceLevel2]} />
        )))}
    </div>
  );
}

export default Record;
