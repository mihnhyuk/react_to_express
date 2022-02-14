import Home from './components/Home'
import About from './components/About'

const routes = [
    {title: "Home", path: "/", element:Home, isNav:true},
    {title: "About", path: "/about", element:About, isNav:true},
    {title: "Category", path: "/", element:Home, isNav:true},
]

export default routes;