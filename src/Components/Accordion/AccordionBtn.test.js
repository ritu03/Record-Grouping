import React from 'react';
import { render, screen } from '@testing-library/react';
import AccordionBtn from './AccordionBtn';

const mockRecords = [
  {
    'Reported Date': '01/07/2019',
    'Suburb Incident': 'ADELAIDE',
    'Postcode Incident': '5000',
    'Offence Level 1 Description': 'OFFENCES AGAINST PROPERTY',
    'Offence Level 2 Description': 'FRAUD DECEPTION AND RELATED OFFENCES',
    'Offence Level 3 Description': 'Obtain benefit by deception',
    'Offence count': '1'
  },
];

describe('AccordionBtn component', () => {
  test('renders accordion header with suburb and record count', () => {
    render(<AccordionBtn id="1" suburb="ADELAIDE" records={mockRecords} isSuburb={true} />);
    
    const headerText = screen.getByText('ADELAIDE (1)');
    expect(headerText).toBeInTheDocument();
  });

  test('renders table with correct headers and records', () => {
    render(<AccordionBtn id="1" suburb="ADELAIDE" records={mockRecords} isSuburb={true} />);

    const dateReportedHeader = screen.getByText('Reported Date');
    expect(dateReportedHeader).toBeInTheDocument();

    const postcodeHeader = screen.getByText('Postcode');
    expect(postcodeHeader).toBeInTheDocument();

    const offenceLevel1Header = screen.getByText('Offence Level 1 Description');
    expect(offenceLevel1Header).toBeInTheDocument();

    const offenceLevel2Header = screen.getByText('Offence Level 2 Description');
    expect(offenceLevel2Header).toBeInTheDocument();

    const offenceLevel3Header = screen.getByText('Offence Level 3 Description');
    expect(offenceLevel3Header).toBeInTheDocument();

    const offenceCountHeader = screen.getByText('Offence count');
    expect(offenceCountHeader).toBeInTheDocument();

    // Check if each record is rendered
    mockRecords.forEach(record => {
      const dateReported = screen.getByText(record['Reported Date']);
      expect(dateReported).toBeInTheDocument();

      const postcode = screen.getByText(record['Postcode Incident']);
      expect(postcode).toBeInTheDocument();

      const offenceLevel1 = screen.getByText(record['Offence Level 1 Description']);
      expect(offenceLevel1).toBeInTheDocument();

      const offenceLevel2 = screen.getByText(record['Offence Level 2 Description']);
      expect(offenceLevel2).toBeInTheDocument();

      const offenceLevel3 = screen.getByText(record['Offence Level 3 Description']);
      expect(offenceLevel3).toBeInTheDocument();

      const offenceCount = screen.getByText(record['Offence count']);
      expect(offenceCount).toBeInTheDocument();
    });
  });

});
