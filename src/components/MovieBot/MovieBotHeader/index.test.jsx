import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MovieBotHeader } from './index';

describe('MovieBotHeader', () => {
  it('should render the header with the correct text', () => {
    render(<MovieBotHeader onClose={() => {}} />);
    
    expect(screen.getByText('Movie bot')).toBeInTheDocument();
  });

  it('should call onClose when the button is clicked', () => {
    const onClose = vi.fn();
    render(<MovieBotHeader onClose={onClose} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should have the correct button text', () => {
    render(<MovieBotHeader onClose={() => {}} />);

    expect(screen.getByRole('button')).toHaveTextContent('chevron_backward');
  });
});