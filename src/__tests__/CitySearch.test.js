// src/__tests__/CitySearch.test.js

import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    
    //Check for element with 'textbox' role and 'city' class
    test('renders text input', () => {
        const CitySearchComponent = render(<CitySearch />);
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
      });
      
});