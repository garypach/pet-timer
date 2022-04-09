import * as React from "react";

export const AppStateContext = React.createContext();

export default AppStateProvider = props => {

  const [myReminders, setMyReminders] = React.useState([])

  return (
    <AppStateContext.Provider
     value={{
        myReminders,
        setMyReminders
         }}>
      {props.children}
    </AppStateContext.Provider>
  );
};

