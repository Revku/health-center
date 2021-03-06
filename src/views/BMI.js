import React from 'react'

import Box from 'components/Box/Box'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button'
import Result from 'components/Result/Result'
import Highlight from 'components/Highlight/Highlight'
import Description from 'components/Description/Description'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import AppWrapper from 'components/AppWrapper/AppWrapper'

const BMI = () => {
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [bmiCategory, setBmiCategory] = React.useState('');
    const [error, setError] = React.useState('');

    const appReset = () => {
        setWeight('');
        setHeight('');
        setBmi('');
        setBmiCategory('');
        setError('');
    }

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
        } else if (bmi >= 18.5 && bmi < 25) {
            setBmiCategory('waga prawidłowa');
        } else if (bmi >= 25 && bmi < 30) {
            setBmiCategory('nadwaga');
        } else if (bmi >= 30) {
            setBmiCategory('otyłość');
        } else {
            setBmiCategory('brak danych');
        }
    }
  
    return (
      <AppWrapper>
        <Box>
          <h2>Kalkulator BMI</h2>
          <Description>Wskaźnik masy ciała (body mass index – BMI) jest obecnie najczęściej stosowaną metodą oceny nadwagi czy otyłości. Jest to iloraz masy ciała wyrażonej w kilogramach i wzrostu (w metrach) podniesionego do kwadratu. Pozwala on na rozróżnienie niedowagi, prawidłowej masy ciała, nadwagi oraz różnych stopni otyłości.</Description>

          { bmi ? (
            <>
              <Result>
                <p>Twoje BMI wynosi <Highlight>{bmi}</Highlight></p>
                <p>Twoja kategoria to <Highlight>{bmiCategory}</Highlight></p>
              </Result>
              <Button onClick={appReset}>Powrót do aplikacji</Button>
            </>
          ) : (
            <>
              <FormWrapper>
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
              </FormWrapper>

              <Button onClick={calculateBMI}>Oblicz</Button>
            </>
          ) }
        </Box>
      </AppWrapper>
    )
}

export default BMI