import AuthProvider from "./authContext";
import ToggleProvider from "./togglesContext";
import UserProvider from "./userContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ToggleProvider>
      <UserProvider>
        <AuthProvider>{children}</AuthProvider>
      </UserProvider>
    </ToggleProvider>
  );
}
