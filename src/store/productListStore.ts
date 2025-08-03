import { create } from 'zustand';

export interface IProductData {
    id: number;
    category: string;
    images: string[];
    price: number;
    title: string;
}

interface State {
    data: IProductData[] | null;
    isLoad: boolean;
    error: string | null;
}

type Actions = {
    setData: (value: IProductData[] | null) => void;
    setIsLoad: (value: boolean) => void;
    setError: (value: string | null) => void;
    resetData: () => void;
};
  
const InitialState: State = {
    data: null,
    isLoad: false,
    error: null,
};

const useProductListStore = create<State & Actions>()(
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

export default useProductListStore;
