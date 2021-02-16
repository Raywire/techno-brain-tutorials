import { render, screen } from '@testing-library/react';
import ListTutorials from '../components/ListTutorials';

test('renders loading...', () => {
  render(<ListTutorials />);
  const linkElement = screen.getByText('loading...');
  expect(linkElement).toBeInTheDocument();
});