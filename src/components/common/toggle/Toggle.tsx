interface ToggleProps {
    isOn: boolean;
    onClick: () => void;
}

export const Toggle = ({ isOn, onClick }: ToggleProps) => {
    return (
        <>
            <input type="checkbox" className="toggle-checkbox" id="toggle" onClick={onClick} />
            <label style={{ background: `${isOn ? "#06D6A0" : ""}` }} className="toggle-label" htmlFor="toggle">
                <span className="toggle-button" />
            </label>
        </>
    );
};