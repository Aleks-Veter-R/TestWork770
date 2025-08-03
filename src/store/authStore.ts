import { create } from 'zustand';

interface State {
    data: boolean;
    isLoad: boolean;
    error: string | null;
    isNeedRedirect: boolean;
}

type Actions = {
    setData: (value: boolean) => void;
    setIsLoad: (value: boolean) => void;
    setError: (value: string | null) => void;
    setIsNeedRedirect: (value: boolean) => void;
    resetData: () => void;
};
  
const InitialState: State = {
    data: false,
    isLoad: false,
    error: null,
    isNeedRedirect: true,
};

const useAuthStore = create<State & Actions>()(
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
        setIsNeedRedirect: (isNeedRedirect) => {
            set({isNeedRedirect});
        },
        resetData: () => {
            set({...InitialState});
        },
    })
);

export default useAuthStore;
