const emptyResults = { data: { results: [] } };
const validResults = { data: { results: [{ name: 'Iron Man' }] } };

export const fetchValidResults = jest.fn(url =>
  Promise.resolve({ json: jest.fn(() => Promise.resolve(validResults)) })
);

export const fetchEmptyResults = jest.fn(url =>
  Promise.resolve({ json: jest.fn(() => Promise.resolve(emptyResults)) })
);

export const fetchAPIError = jest.fn(
  url => new Error('Could not find character')
);
