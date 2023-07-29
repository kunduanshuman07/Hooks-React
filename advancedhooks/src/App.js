import React from "react";
import ComponentB from "./components/ComponentB";
export const UserContex = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div>
      <UserContex.Provider value={'Anshuman Kundu'}>
        <ChannelContext.Provider value={'KunduAnshuman07'}>
          <ComponentB/>
        </ChannelContext.Provider>
      </UserContex.Provider>
    </div>
  );
};

export default App;
