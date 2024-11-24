import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MovieBotMessageForm } from './index';

describe('MovieBotMessageForm', () => {
  it('renders input and button', () => {
    render(<MovieBotMessageForm onSendMessage={() => {}} />);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('calls onSendMessage with input value when form is submitted', () => {
    const onSendMessage = vi.fn();
    render(<MovieBotMessageForm onSendMessage={onSendMessage} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(onSendMessage).toHaveBeenCalledWith('Hello');
  });

  it('clears input after form is submitted', () => {
    const onSendMessage = vi.fn();
    render(<MovieBotMessageForm onSendMessage={onSendMessage} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });

  it('disables button when input is empty', () => {
    render(<MovieBotMessageForm onSendMessage={() => {}} />);
    
    const button = screen.getByRole('button', { name: /send/i });

    expect(button).toBeDisabled();
  });

  it('enables button when input is not empty', () => {
    render(<MovieBotMessageForm onSendMessage={() => {}} />);
    
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(button).not.toBeDisabled();
  });
});