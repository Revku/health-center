// Icons
import bmiIcon from "assets/icons/bmi.svg"
import waterIcon from "assets/icons/water.svg"
import caloriesIcon from "assets/icons/calories.svg"
import whrIcon from "assets/icons/whr.svg"

export const routes = [
    {
        name: 'Kalkulator BMI',
        path: '/bmi',
        component: <div></div>,
        icon: bmiIcon,
    },
    {
        name: 'Zapotrzebowanie wody',
        path: '/water',
        component: <div></div>,
        icon: waterIcon,
    },
    {
        name: 'Kalkulator kalorii',
        path: '/calories',
        component: <div></div>,
        icon: caloriesIcon,
    },
    {
        name: 'Kalkulator WHR',
        path: '/whr',
        component: <div></div>,
        icon: whrIcon,
    },
]