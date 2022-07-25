import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getRequest } from '../helpers'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { TEST } from '../fetchURLS';

const server = setupServer(
  rest.get('/test', (req, res, ctx) => {
    return res(ctx.json({data : 'Hello World'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('tests related to fetch requests', () => {

  test('checks async fetch is working', async () => {
    const TestComponent = () => {
      const [fetchData, setFetchData] = useState(null)
      getRequest('/test', setFetchData)
      return (
        <div title='block' className="App">
          {fetchData && <h1>{fetchData}</h1>}
        </div>
      )
    }
    render(<TestComponent/>)
    const block = screen.getByTitle("block")
    await waitFor(() => screen.findByRole('heading'))
    expect(block).toHaveTextContent("Hello World")
  })

  test('checks fetch integration with API', async () => {
    const TestComponent = () => {
      const [fetchData, setFetchData] = useState(null)
      getRequest(TEST, setFetchData)
      return (
        <div title='block' className="App">
          {fetchData && <h1>{fetchData}</h1>}
        </div>
      )
    }
    render(<TestComponent/>)
    const block = screen.getByTitle("block")
    await waitFor(() => screen.findByRole('heading'))
    expect(block).toHaveTextContent("Hello World")
  })


})

