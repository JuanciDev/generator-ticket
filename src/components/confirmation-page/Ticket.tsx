import { useUserStore } from "../../store/User"

export const Ticket = () => {

  const store = useUserStore()
  const {fullName, gitHubUser, url} = store

  
  return (
    <div className="h-40 w-[342px] flex flex-col justify-between p-4 
    bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat
    relative sm:h-50 sm:w-[420px] md:h-[250px] md:w-[560px]  mx-auto">
      <div>
        <img src="/assets/images/logo-full.svg" alt="logo" />
        <p className="md:text-2xl">Aug 14, 2026 / Gualeguaychú, ER</p>
      </div>

      <div className="flex gap-3 items-center">
  <img 
    src={url}
    alt="imagen avatar"
    className="size-[45px] rounded-lg object-cover" 
  />
  <div>
    <p className="text-xl font-medium md: text-2xl">{fullName}</p>
    <div className="flex items-center gap-1">
      <img 
        src="/assets/images/icon-github.svg"
        alt="logo github" 
      />
      <p className="md:text-2xl">{gitHubUser}</p>
    </div>
  </div>
</div>
    <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-Neutral-500">#1408</p>
    </div>
  )
}
