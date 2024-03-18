import { UserInfo } from "@toruslabs/torus-embed"
import Torus from "@toruslabs/torus-embed/dist/types/embed"
import { create } from "zustand"
type T_Torus_Action = {
  torus: Torus | null
  user: UserInfo | null,
  setTorus: (state: Torus | null) => void
  setUser: (state: UserInfo | null) => void
}
const useTorusStore = create<T_Torus_Action>((set) => ({
  torus: null,
  user: null,
  setTorus: (state: Torus | null) => set(() => ({ torus: state })),
  setUser: (state: UserInfo | null) => set(() => ({ user: state })),
}))
export default useTorusStore
