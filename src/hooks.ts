import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store/store";

export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;