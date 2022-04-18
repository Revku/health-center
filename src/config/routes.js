// Icons
import bmiIcon from "assets/icons/bmi.svg"
import waterIcon from "assets/icons/water.svg"
import caloriesIcon from "assets/icons/calories.svg"
import whrIcon from "assets/icons/whr.svg"

// Views
import BMI from "views/BMI"
import Water from "views/Water"
import Calories from "views/Calories"

export const routes = [
    {
        name: 'Strona Główna',
        path: '/',
    },
    {
        name: 'Kalkulator BMI',
        path: '/bmi',
        component: <BMI />,
        icon: bmiIcon,
    },
    {
        name: 'Zapotrzebowanie wody',
        path: '/water',
        component: <Water />,
        icon: waterIcon,
    },
    {
        name: 'Kalkulator kalorii',
        path: '/calories',
        component: <Calories />,
        icon: caloriesIcon,
    },
    {
        name: 'Kalkulator WHR',
        path: '/whr',
        component: <div></div>,
        icon: whrIcon,
    },
]