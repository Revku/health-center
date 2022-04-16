import React from 'react'
import styled from 'styled-components'

import Box from 'components/Box/Box'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button'
import Result from 'components/Result/Result'

const Form = styled.div`
  margin: 50px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BMI = () => {
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [bmiCategory, setBmiCategory] = React.useState('');
    const [bmiCategoryColor, setBmiCategoryColor] = React.useState('');
    const [error, setError] = React.useState('');

    const calculateBMI = () => {
        if (!weight || !height) {
          setError('Wprowadź wszystkie dane!');
          return false;
        }

        if (weight > 400 || height > 270 || height < 90) {
          setError('Wprowadź poprawne dane!');
          return false;
        }

        const bmi = weight / (height / 100) ** 2;
        setBmi(bmi.toFixed(2));
        setError('');

        if (bmi < 18.5) {
            setBmiCategory('niedowaga');
            setBmiCategoryColor('#f5c6cb');
        } else if (bmi >= 18.5 && bmi < 25) {
            setBmiCategory('waga prawidłowa');
            setBmiCategoryColor('#b2ebf2');
        } else if (bmi >= 25 && bmi < 30) {
            setBmiCategory('nadwaga');
            setBmiCategoryColor('#ffecb3');
        } else if (bmi >= 30) {
            setBmiCategory('otyłość');
            setBmiCategoryColor('#ff0000');
        } else {
            setBmiCategory('brak danych');
            setBmiCategoryColor('#f5f5f5');
        }
    }
  
    return (
      <Wrapper>
        <Box>
          <h2>Kalkulator BMI</h2>

          <Form>
            <FormField
                id="height"
                label="Wzrost (w cm)"
                type="number"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                placeholder='Wpisz swój wzrost (np. 180)'
            />

            <FormField
                id="weight"
                label="Waga (w kg)"
                type="number"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                placeholder='Wpisz swoją wagę (np. 70)'
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}

          </Form>

          <Button onClick={calculateBMI}>Oblicz</Button>
        </Box>
        {
          bmi ? (
            <Result 
              title={bmi}
              paragraph={bmiCategory}
              color={bmiCategoryColor}
            />
          ) : null
        }
      </Wrapper>
    )
}

export default BMI