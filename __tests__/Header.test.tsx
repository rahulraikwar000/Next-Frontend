import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

// Next.js components
jest.mock('next/image', () => (props: any) => {
  return <img {...props} alt={props.alt || 'mocked image'} />;
});
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('Header', () => {
  it('renders the logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText('MainLogo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
  });

  it('links to the homepage', () => {
    render(<Header />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
