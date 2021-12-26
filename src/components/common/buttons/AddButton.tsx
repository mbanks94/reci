interface IAddButton {
    text: string;
    onClick: () => void;
}

export const AddButton = (props: IAddButton) => {
    const { text, onClick } = props;
    return <h3 className={"add-button"} onClick={onClick}>{text}</h3>
};