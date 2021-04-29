import * as React from "react";
import { View, Text } from "react-native";

import BottomNavigation from "./src/Navigation/BottomNavigation";
import StackNavigation from "./src/Navigation/StackNavigation";

function App() {
  return (
    <>
      <StackNavigation />
      <BottomNavigation />
    </>
  );
}

export default App;
