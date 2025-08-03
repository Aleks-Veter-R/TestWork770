import { create } from 'zustand';

export interface IUserData {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    birthDate: string;
    image: string;
}

interface State {
    data: IUserData | null;
    isLoad: boolean;
    error: string | null;
}

type Actions = {
    setData: (value: IUserData | null) => void;
    setIsLoad: (value: boolean) => void;
    setError: (value: string | null) => void;
    resetData: () => void;
};
  
const InitialState: State = {
    data: null,
    isLoad: false,
    error: null,
};

const useUserStore = create<State & Actions>()(
    (set) => ({
        ...InitialState,
        setData: (data) => {
            set({data});
        },
        setIsLoad: (isLoad) => {
            set({isLoad});
        },
        setError: (error) => {
            set({error});
        },
        resetData: () => {
            set({...InitialState});
        },
    })
);

export default useUserStore;
