import { create } from "zustand";

interface UserData {
    fullName: string;
    email: string;
    gitHubUser: string;
    url: string;
}
interface User extends UserData {
   setUser: (user:UserData) => void;
}

export const useUserStore = create<User>()((set)=>({
    fullName: '',
    email: ' ',
    gitHubUser: '',
    url: '',
    setUser: (user:UserData) => set(() =>({
        email: user.email,
        fullName: user.fullName,
        gitHubUser: user.gitHubUser,
        url: user.url
     
    }))
}))