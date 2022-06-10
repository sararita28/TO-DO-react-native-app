import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ToDoScreen from "../screens/ToDoScreen";
import Auth from "../screens/Auth";
import Register from "../screens/Register";
import Login from "../screens/Login";

const screens = {
  Auth: {
    screen: Auth,
  },
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
  Home: {
    screen: ToDoScreen,
  },
};

const LandingStack = createStackNavigator(screens);

export default createAppContainer(LandingStack);
