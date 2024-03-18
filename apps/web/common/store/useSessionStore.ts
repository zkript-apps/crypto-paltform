import { create } from "zustand"
type T_State = { walletId: string | null, email: string | null, role: 'User' | 'Admin' | null };
type T_Session_Action = {
  setSession: (state: T_State | null) => void
}
const useSessionStore = create<T_State & T_Session_Action>((set) => ({
  walletId: null,
  email: null,
  role: null,
  setSession: (state: T_State | null) => set(() => ({ walletId: state?.walletId, email: state?.email, role: state?.role })),
}))
export default useSessionStore
