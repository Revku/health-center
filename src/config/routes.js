import Home from "views/Home"

export const routes = [
    {
        name: 'Strona Główna',
        path: '/',
        component: <Home />,
    },
    {
        name: 'Kalkulator BMI',
        path: '/bmi',
        component: <Home />,
    },
    {
        name: 'Zapotrzebowanie wody',
        path: '/water',
        component: <Home />,
    },
    {
        name: 'Kalkulator kalorii',
        path: '/calories',
        component: <Home />,
    },
    {
        name: 'Kalkulator WHR',
        path: '/whr',
        component: <Home />,
    },
]