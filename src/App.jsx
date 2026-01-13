import { useState } from 'react'
import { Button, NavBar, Checkbox, RadioButton, TextField } from '@/components'

function App() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Components' },
    { href: '#', label: 'Documentation' },
  ];

  const [checkboxState, setCheckboxState] = useState(false);
  const [radioState, setRadioState] = useState('option1');
  const [textValue, setTextValue] = useState('');

  return (
    <>
      <NavBar
        brandName="Yukichi UI"
        links={navLinks}
        actions={
          <>
            <Button size="sm" variant="outline">Log In</Button>
            <Button size="sm">Sign Up</Button>
          </>
        }
      />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Yukichi-UI Playground</h1>
        <p>Welcome to the component library development environment.</p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Form Components</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem', maxWidth: '400px' }}>
            {/* Checkbox */}
            <div>
              <h3>Checkbox</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Checkbox
                  label="Accept Terms"
                  checked={checkboxState}
                  onChange={(e) => setCheckboxState(e.target.checked)}
                />
                <Checkbox label="Disabled" disabled />
                <Checkbox label="Checked Disabled" checked disabled />
              </div>
            </div>

            {/* Radio Button */}
            <div>
              <h3>Radio Buttons</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <RadioButton
                  label="Option 1"
                  name="radio-group"
                  checked={radioState === 'option1'}
                  onChange={() => setRadioState('option1')}
                />
                <RadioButton
                  label="Option 2"
                  name="radio-group"
                  checked={radioState === 'option2'}
                  onChange={() => setRadioState('option2')}
                />
              </div>
            </div>

            {/* TextField */}
            <div>
              <h3>Text Field</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                  label="Username"
                  placeholder="Enter your username"
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
                <TextField
                  label="Error State"
                  placeholder="Invalid input"
                  error="This field is required"
                />
                <TextField
                  label="Disabled"
                  value="Cannot edit this"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
