import TiketsFormPage from "./components/tikets-form-page/TiketsFormPage"
import { MainLayout } from "./components/layout/MainLayout"
import { ConfirmationPage } from "./components/confirmation-page/ConfirmationPage"
import { useShowTicket } from "./hooks/UseShowTicket"

function App() {

const context = useShowTicket()


  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto">
      {
        context.showTicket 

        ? <ConfirmationPage /> 
        : <TiketsFormPage />
      }
      </main>
    </MainLayout>
    
  )
}
console.log('2000 UD de sueldo mensuales Juanci!!!!')
export default App
