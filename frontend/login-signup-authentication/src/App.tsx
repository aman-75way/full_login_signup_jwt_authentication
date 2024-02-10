import Routes_ from './routes/Routes'
import Navbar from './navbar/Navbar'
import { AuthContext, AuthProvider } from './store/auth'


function App() {

  return (
    <>
       <AuthProvider>
            <Navbar />
            <Routes_ />
       </AuthProvider>
    </>
  )
}

export default App
