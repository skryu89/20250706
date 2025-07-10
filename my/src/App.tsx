type User = {
  name: string;
  age: number;
};

export const UserContext = createContext<User>({ name: '', age: 0 });
export const HobbyContext = createContext<string>('趣味なし');

<UserContext.Provider value={{ name: '田中', age: 25 }}>
  <HobbyContext.Provider value="映画鑑賞">
    <ContextA />
  </HobbyContext.Provider>
</UserContext.Provider>

