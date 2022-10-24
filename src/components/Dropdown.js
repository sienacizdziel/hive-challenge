import React, { useState } from 'react';
import './Dropdown.scss';
import collapseArrow from '../static/icons8-collapse-arrow-30.png';
import expandArrow from '../static/icons8-expand-arrow-30.png';

// assumes that all options in dropdown are unique!
export default function Dropdown({
    label = "",
    options = [], 
    multiple = false,
}) {
    if (multiple) {
        label = [label];
    } 
    const [displayValue, setDisplayValue] = useState(label);
    const [isOpen, setIsOpen] = useState(false);

    function handleSelect(option) {
        if (multiple) {
            let newDisplayValue;
            if (displayValue.includes(option)) {
                newDisplayValue = displayValue.filter((x) => {
                    return x !== option;
                });
                if (newDisplayValue.length === 0) {
                    newDisplayValue = [label[0]];
                }
            } else {
                newDisplayValue = displayValue.concat(option);
                if (displayValue[0] === label[0]) {
                    newDisplayValue = [option];
                }
            }
            setDisplayValue(newDisplayValue);
        } else {
            setDisplayValue(option);
        }
    }

    function handleDropdown() {
        setIsOpen(!isOpen);
    }

    function isSelected(option) {
        if (multiple) {
            return displayValue.includes(option);
        } else {
            return displayValue == option;
        }
    }

    function selectAll() {
        setDisplayValue(options);
    }

    function deselectAll() {
        setDisplayValue([label[0]]);
    }

    return (
        <div className="dropdown">
            <div className={`default ${isOpen ? "dropdown-open": ""}`} onClick={handleDropdown}>
                {!multiple ? displayValue : displayValue.join(", ")}
                <img src={isOpen ? collapseArrow : expandArrow} alt="arrow"/>
            </div>
            {isOpen && <div className="options">
                {multiple ? <>
                    <div className="option" onClick={selectAll}>select all</div>
                    <div className="option" onClick={deselectAll}>deselect all</div>
                </> : null}
                {options.map(option => (
                    <div 
                        className={`option ${isSelected(option) ? "selected" : ""}`}
                        onClick={function() { 
                            handleSelect(option);
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>}
        </div>
    )
}