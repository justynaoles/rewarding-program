import React from "react";
import "./style/base.scss";
import Homepage from "./pages/home-page";
import AppContext from "./context";
import { calcPoints } from "./utils/utils";
import { USERS as users } from "./data/users-data";
import { calculateAndDisplayUserTransaction } from "./utils/utils";

class App extends React.Component {

  state = {
    users: [],
  }

  componentDidMount() {
    const usersList = calculateAndDisplayUserTransaction(users,calcPoints);
    this.setState(prevState => ({
      users: [...prevState.users, ...usersList],
    }));
  }

  render() {
    return (
      <AppContext.Provider value={this.state.users}>
         <Homepage/>
      </AppContext.Provider>
    );

  }
};

export default App;
