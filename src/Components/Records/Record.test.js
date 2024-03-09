import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Record from './Record';

// Mock the CSV parsing library
jest.mock('papaparse', () => ({
  parse: jest.fn(() => ({
    data: [
        {
            'Reported Date': '01/07/2019',
            'Suburb Incident': 'ADELAIDE',
            'Postcode Incident': '5000',
            'Offence Level 1 Description': 'OFFENCES AGAINST PROPERTY',
            'Offence Level 2 Description': 'FRAUD DECEPTION AND RELATED OFFENCES',
            'Offence Level 3 Description': 'Obtain benefit by deception',
            'Offence count': '1'
          },
    ],
  })),
}));

describe('Record component', () => {

  test('toggles between records by suburb and offence level 2', async () => {
    const { getByText } = render(<Record />);
    const suburbButton = getByText('Records by Suburb');
    const offenceLevel2Button = getByText('Offence Level 2 Description');

    // Click on offenceLevel2Button
    fireEvent.click(offenceLevel2Button);
    await waitFor(() => expect(getByText('Offence Level 2 Description')).toBeInTheDocument());

    // Click on suburbButton
    fireEvent.click(suburbButton);
    await waitFor(() => expect(getByText('Records by Suburb')).toBeInTheDocument());
  });
});
