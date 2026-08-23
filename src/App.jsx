import { Routes, Route } from 'react-router-dom'
import './App.css'
// Components
import Menu from './Components/Menu'
// View
import HomeView from './Views/HomeView'
import Formulario from './Views/Formulario'
// Importando os viewModel
import homeViewModel from './ViewModel/homeViewModel'
import formLivroViewModel from './ViewModel/formLivroViewModel'


function App() {
  const homeView = homeViewModel();
  const formView = formLivroViewModel();

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<HomeView {...homeView} />} />
        <Route path='/adicionar' element={<Formulario {...formView} />} />
      </Routes>
    </>
  )
}

export default App
