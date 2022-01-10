import React from 'react';
import {Router} from 'react-router-dom'
import { render, screen, } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import App from './App'

test('renders learn react link', async () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});


test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Login or SignUp?/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/High Score/i), leftClick)

  // // check that the content changed to the new page
  ////expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
    renderWithRouter(<App />, {route: '/something-that-does-not-match'})
  
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })

// This is an example of how to update the props of a rendered component.
// the basic idea is to simply call `render` again and provide the same container
// that your first call created for you.

  let idCounter = 1
  
  const NumberDisplay = ({number}) => {
    const id = useRef(idCounter++) // to ensure we don't remount a different instance
  
    return (
      <div>
        <span data-testid="number-display">{number}</span>
        <span data-testid="instance-id">{id.current}</span>
      </div>
    )
  }
  
  test('calling render with the same component on the same container does not remount', () => {
    const {rerender} = render(<NumberDisplay number={1} />)
    expect(screen.getByTestId('number-display')).toHaveTextContent('1')
  
    // re-render the same component with different props
    rerender(<NumberDisplay number={2} />)
    expect(screen.getByTestId('number-display')).toHaveTextContent('2')
  
    expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
  })  