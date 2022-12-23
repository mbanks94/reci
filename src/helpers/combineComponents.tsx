import { FunctionComponent, PropsWithChildren } from "react";

export const combineComponents = (...components: FunctionComponent<PropsWithChildren>[]) => {
    return components.reduce(
        (PrevComponents, CurrComponent) => {
            return (props: PropsWithChildren<{}>) => (
                <PrevComponents>
                    <CurrComponent {...props} />
                </PrevComponents>
            )
        },
        ({ children }: PropsWithChildren<{}>) => <>{children}</>
    );
};