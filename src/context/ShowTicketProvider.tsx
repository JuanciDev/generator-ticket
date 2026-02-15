import { useState, type ReactNode } from "react"
import { ShowTicketContext } from "./ShowTicket"


interface ShowTicketProviderProps {
    children: ReactNode
}

export const ShowTicketProvider = ({children}: ShowTicketProviderProps) => {

    const [showTicket, setShowTicket ] = useState<boolean>(false)
  return (
   <ShowTicketContext.Provider value={{
    showTicket,
    setShowTicket
   }}>
    {children}
   </ShowTicketContext.Provider>
  )
}
