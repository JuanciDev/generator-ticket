interface Props {
    children: React.ReactNode;
}
export const MainLayout = ({children}: Props) => {
  return (
    <main className="py-8 px-4 bg-[url(assets/images/background-mobile.png)] 
    bg-cover bg-bottom mb:bg-[url(assets/images/background-tablet.png)]
    lg:bg-[url(assets/images/background-desktop.png)] relative overflow-hidden min-h-screen" >

        <img 
        src="/assets/images/pattern-squiggly-line-top.svg" 
        alt="pattern squiggly line top" 
        className="absolute top-4 right-0 h-[52px] md:h-[100px] lg:h-[200px]"/>
        <img 
        src="/assets/images/pattern-circle.svg"
         alt="pattern circle"
         className="absolute top-4 left-0 h-[52] md:h-[100px] lg:h-[200px]" />

        <img 
        src="/assets/images/pattern-lines.svg" 
        alt="paterren line" 
        className="absolute pointer-events-none top-0 left-0 min-5xl"/>

        <header className="flex justify-center mb-10">
        <img src="/assets/images/logo-full.svg" 
        alt="logo"
        className=""
         />
         </header>
        {children}

        <img
         src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
         alt="pattern-squiggly line bottom mobile tablet"
         className="absolute bottom-0 left-0h h-[200px] pointer-events-none"
          />
        </main>
  )
}
