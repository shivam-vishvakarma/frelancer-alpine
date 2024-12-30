import AuthProvider from "./authContext";
import ToggleProvider from "./togglesContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ToggleProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToggleProvider>
  );
}
