import React from 'react'
import styled from 'styled-components'

import AppWrapper from 'components/AppWrapper/AppWrapper'
import Box from 'components/Box/Box'
import Description from 'components/Description/Description'
import FormField from 'components/FormField/FormField'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import Button from 'components/Button/Button'
import Highlight from 'components/Highlight/Highlight'
import Result from 'components/Result/Result'

const Select = styled.select`
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    border-radius: 5px;
    padding: 15px 10px;
    color: ${props => props.theme.colors.text};
    width: 100%;
`;

const Label = styled.label`
    display: block;
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: ${props => props.theme.font.weight.semibold};
`;

const Calories = () => {
    const [calories, setCalories] = React.useState(0);
    const [age, setAge] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [activity, setActivity] = React.useState(1);
    const [error, setError] = React.useState('');
    const [sex, setSex] = React.useState('male');
    
    let ppm, cpm, pal;

    const calculateCalories = () => {
        if (!age || !weight || !height || !activity) {
            setError('Podaj wszystkie dane!');
            return;
        }

        if (activity == 1) {
            pal = 1.4;
        } else if (activity == 2) {
            pal = 1.6;
        } else if (activity == 3) {
            pal = 1.75;
        } else if (activity == 4) { 
            pal = 2.0;
        } else if (activity == 5) {
            pal = 2.2;
        }

        
        if (sex === 'male') {
            ppm = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            ppm = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        cpm = ppm * pal;
        setCalories(Math.round(cpm));
    }

    return (
        <AppWrapper>
            <Box>
                <h2>Zapotrzebowanie kaloryczne</h2>
                <Description>Dzienne zapotrzebowanie energetyczne cz??owieka jest niezwykle wa??ne w celu utrzymania optymalnego stanu organizmu. Znajomo???? w??asnego zapotrzebowania kalorycznego to niezwykle cenna wiedza, kt??ra b??dzie przydatna do wyznaczenia planu redukcyjnego.</Description>

                { calories ? (
                    <>
                        <Result>
                            <p>Twoje zapotrzebowanie kaloryczne wynosi: <Highlight>{calories} kcal</Highlight></p>
                        </Result>
                        <Button onClick={() => setCalories(0)}>Powr??t do aplikacji</Button>
                    </>
                ) : (
                    <>
                        <FormWrapper>
                            <Label>P??e??</Label>
                            <Select onChange={e => setSex(e.target.value)}>
                                <option value="male">M????czyzna</option>
                                <option value="female">Kobieta</option>
                            </Select>


                            <FormField 
                                type="number"
                                name="age"
                                label="Wiek"
                                id="age"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                            />

                            <Label>Aktywno???? fizyczna</Label>
                            <Select onChange={e => setActivity(e.target.value)}>
                                <option value="1">1. Niewielka / Brak trenin??w</option>
                                <option value="2">2. Niska aktywno???? (treningi 1-3 razy/tydzie??)</option>
                                <option value="3">3. ??rednia aktywno???? (codzienny wysi??ek fizyczny b??d?? intensywne treningi 3-4 razy/tydzie??</option>
                                <option value="4">4. Wysoka aktywno???? (intensywne treningi 6-7 razy/tydzien</option>
                                <option value="5">5. Bardzo wysoka aktywno???? (codzienne bardzo intensywne treningi lub wymagaj??ca praca fizyczna)</option>
                            </Select>

                            <FormField 
                                type="number"
                                name="weight"
                                label="Waga"
                                id="weight"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            

                            <FormField 
                                type="number"
                                name="height"
                                label="Wzrost"
                                id="height"
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                            />

                            { error && <p style={{color: 'red'}}>{error}</p> }
                        </FormWrapper>

                        <Button onClick={calculateCalories}>Oblicz</Button>
                    </>
                )}
            </Box>
        </AppWrapper>
    )
}

export default Calories