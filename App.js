import { Home } from "./src/screens";
import { StyleSheet } from "react-native";
import FilterProvider from "./src/contexts/filters";

export default function App() {
  return (
    <FilterProvider>
      <Home />
    </FilterProvider>
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
