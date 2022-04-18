import React from 'react'
import styled from 'styled-components'

import Box from 'components/Box/Box'
import Description from 'components/Description/Description'
import AppWrapper from 'components/AppWrapper/AppWrapper'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button'
import Result from 'components/Result/Result'
import Highlight from 'components/Highlight/Highlight'

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

const WHR = () => {
    const [whr, setWhr] = React.useState(0);
    const [whrTitle, setWhrTitle] = React.useState('');
    const [waist, setWaist] = React.useState('');
    const [hip, setHip] = React.useState('');
    const [error, setError] = React.useState('');
    const [sex, setSex] = React.useState('male');

    const calculateWhr = () => {
        if (!waist || !hip) {
            setError('Podaj wszystkie dane!');
            return;
        }

        setWhr(waist / hip);

        if (sex === 'male') {
            if (whr > 1) {
                setWhrTitle('Typ androidalny (jabłko)');
            } else {
                setWhrTitle('Typ gynoidalny (gruszka)')
            }
        } else if (sex === 'female') {
            if (whr > 0.8) {
                setWhrTitle('Typ androidalny (jabłko)');
            } else {
                setWhrTitle('Typ gynoidalny (gruszka)')
            }
        }
    }

    return (
        <AppWrapper>
            <Box>
                <h2>Kalkulator WHR</h2>
                <Description>Kalkulator WHR (Waist Hip Ratio) to niezwykle przydatny wskaźnik w ocenie rozmieszczenia tkanki tłuszczowej w organizmie. Wskaźnik WHR to stosunek obwodu talii do bioder. Stosuje się go do określenia typu sylwetki lub typu otyłości u osób z nadmierną masą ciała.</Description>

                { whr ? (
                    <>
                        <Result>
                            <p>Twoje WHR wynosi: <Highlight>{whr}</Highlight></p>
                            <p>Twoje typ sylwetki to: <Highlight>{whrTitle}</Highlight></p>
                        </Result>
                        <Button onClick={() => setWhr(0)}>Powrót do aplikacji</Button>
                    </>
                ) : (
                    <>
                        <FormWrapper>
                            <Label>Płeć</Label>
                            <Select onChange={e => setSex(e.target.value)}>
                                <option value="male">Mężczyzna</option>
                                <option value="female">Kobieta</option>
                            </Select>
                            
                            <FormField 
                                id="waist"
                                name="waist"
                                value={waist}
                                onChange={e => setWaist(e.target.value)}
                                label="Obwód talii"
                                type="number"
                                placeholder="Obwód talii"
                            />

                            <FormField
                                id="hip"
                                name="hip"
                                value={hip}
                                onChange={e => setHip(e.target.value)}
                                label="Obwód bioder"
                                type="number"
                                placeholder="Obwód bioder"
                            />

                            { error && <p style={{color: 'red'}}>{error}</p> }
                        </FormWrapper>
                        <Button onClick={calculateWhr}>Oblicz</Button>
                    </>
                )}
            </Box>
        </AppWrapper>
    )
}

export default WHR