import React from "react";
import { Spinner } from ".";

interface IListView {
    title: string;
    isLoading: boolean;
    isError: boolean;
    ActionButton?: React.FC;
    children: JSX.Element | JSX.Element[];
};

export const ListView = (props: IListView) => {
    const { title, ActionButton, isLoading, isError, children } = props;
    return (
        <>
            <div className={"page-title"}>
                <h2>{title}</h2>
                {!!ActionButton && <ActionButton />}
            </div>
            {isLoading ?
                <Spinner />
                : (isError ?
                    <p>Something went wrong...</p> :
                    children
                )
            }
        </>
    )
};