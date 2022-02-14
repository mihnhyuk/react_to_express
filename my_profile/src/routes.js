import Home from './components/Home'
import About from './components/About'
import Category from './components/Category'

const routes = [
    {title: "Home", path: "/", element:Home, isNav:true},
    {title: "About", path: "/about", element:About, isNav:true},
    {title: "Category", path: "/category", element:Category, isNav:true},
]

export default routes;