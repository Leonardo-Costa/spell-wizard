import { Home } from "./src/screens";
import { StyleSheet } from "react-native";
import FilterProvider from "./src/contexts/filters";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <FilterProvider>
        <Tabs />
      </FilterProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
