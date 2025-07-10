import { createContext } from 'react';
import ContextA from './Components/ContextSample/ContextA';

type User = {
  name: string;
  age: number;
};

// Context の作成
export const UserContext = createContext<User>({ name: '', age: 0 });
export const HobbyContext = createContext<string>('趣味なし');

const App = () => {
  return (
    <UserContext.Provider value={{ name: 'spring', age: 25 }}>
      <HobbyContext.Provider value="映画鑑賞">
        <ContextA />
      </HobbyContext.Provider>
    </UserContext.Provider>
  );
};

export default App;


