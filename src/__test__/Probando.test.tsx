import { render } from '@testing-library/react';
import Home from '../pages/Home';
test('Renders main page correctly', () => {
  const title = 'Probando';
  const { getByTestId } = render(<Home />);
  expect(getByTestId('test-title').innerHTML).toContain(title);
});
