import React from 'react'

import Box from 'components/Box/Box'
import Description from 'components/Description/Description'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button' 
import FormWrapper from 'components/FormWrapper/FormWrapper'
import Result from 'components/Result/Result'
import Highlight from 'components/Highlight/Highlight'
import AppWrapper from 'components/AppWrapper/AppWrapper'

const Water = () => {
    const [weight, setWeight] = React.useState('');
    const [error, setError] = React.useState('');
    const [water, setWater] = React.useState('');

    const appReset = () => {
        setWeight('');
        setWater('');
        setError('');
    }

    const calculateWater = () => {
        if (!weight) {
            setError('Wprowadź wszystkie dane!');
            return false;
        }

        if (weight > 400) {
            setError('Wprowadź poprawne dane!');
            return false;
        }

        const water = weight * 35;
        setError('');

        setWater(water)
    }

    return (
        <AppWrapper>
            <Box>
                <h2>Zapotrzebowanie wody</h2>
                <Description>Woda ma istotne znaczenie dla przebiegu procesu trawienia – ułatwia nam spożywanie, trawienie i wykorzystanie pożywienia. Pełni również funkcję ochronną dla mózgu, gałki ocznej i rdzenia kręgowego, a u kobiet ciężarnych – również płodu. Odpowiednie nawodnienie jest również niezbędne dla prawidłowej pracy stawów.</Description>

                {water ? (
                    <>
                        <Result>
                            <p>Zapotrzebowanie wody wynosi: <Highlight>{water} ml</Highlight></p>
                        </Result>
                        <Button onClick={appReset}>Powrót do aplikacji</Button>
                    </>
                ) : (
                    <>
                        <FormWrapper>
                            <FormField
                                id="weight"
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                name="weight"
                                label="Waga (w kg)"
                                placeholder="Waga (np. 70)"
                            />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </FormWrapper>

                        <Button onClick={calculateWater}>Oblicz</Button>
                    </>
                )}
            </Box>
        </AppWrapper>
    )
}

export default Water