import { Routes, Route } from 'react-router-dom'
import './App.css'
// Components
import Menu from './Components/Menu'
// View
import HomeView from './Views/HomeView'
import Formulario from './Views/Formulario'
import AdicionarExemplares from './Views/AdicionarExemplares'
import FormularioExemplares from './Views/FormularioExemplares'
// Importando os viewModel
import homeViewModel from './ViewModel/homeViewModel'
import formLivroViewModel from './ViewModel/formLivroViewModel'
import formExemplares from './ViewModel/formExemplares'






function App() {
  const homeView = homeViewModel();
  const formView = formLivroViewModel();
  const formExemplar = formExemplares();

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<HomeView {...homeView} />} />
        <Route path='/adicionar' element={<Formulario {...formView} />} />
        <Route path='/adicionar_exemplar' element={<AdicionarExemplares {...homeView}/>}/>
        <Route path='/formulario_exemplar/:id' element={<FormularioExemplares {...formExemplar}/>}/>
      </Routes>
    </>
  )
}

export default App
