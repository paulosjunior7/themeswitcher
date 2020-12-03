import { useState , useEffect , SetStateAction, Dispatch} from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
  ]

function usePersistedState<T>(key: string, initialState: T): Response<T>{
    const [state, SetState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if(storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }

    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    },[key, state])

    return [state, SetState];
}

export default usePersistedState;