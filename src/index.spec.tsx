import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';

import App from './App';

describe('Hello test', () => {
  it('shoud pass', () => {
    const container = render(<App />);

    expect(container.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
