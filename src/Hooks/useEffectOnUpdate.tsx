import { useEffect, useRef } from "react"

export function useEffectOnUpdate(effect: React.EffectCallback, deps?: React.DependencyList) {
    const initialRender = useRef(false);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = true;
            return ;
        }
        deps?.map(attribute => {if (!attribute) return ;})
        return effect();
    }, deps);
}