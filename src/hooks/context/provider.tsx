import AuthProvider from "./authContext";
import ModalProvider from "./modalContext";
import ToggleProvider from "./togglesContext";
import UserProvider from "./userContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ToggleProvider>
      <ModalProvider>
        <UserProvider>
          <AuthProvider>{children}</AuthProvider>
        </UserProvider>
      </ModalProvider>
    </ToggleProvider>
  );
}
