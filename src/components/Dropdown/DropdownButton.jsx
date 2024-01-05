import React, {useEffect, useState} from 'react';
import UpArrow from "../../assets/svg/up-arrow";
import DownArrow from "../../assets/svg/down-arrow";


const Dropdown = ({children, initialOption, onSelect, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialOption || 'Select an option');

    useEffect(() => {
        setSelectedOption(initialOption || 'Select an option');
    }, [initialOption]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    const filteredOptions = React.Children.toArray(children).filter(
        (child) => child.props.children !== selectedOption
    );

    return (
        <div className={className}>

            <div className='uppercase flex items-center' onClick={toggleDropdown}>
                {selectedOption} {isOpen ? <UpArrow className="mx-2" /> : <DownArrow className="mx-2"/> }
            </div>

            {isOpen && (
                <div className="uppercase text-primary">
                    {filteredOptions.map((child) =>
                        React.cloneElement(child, {
                            key: child.props.children,
                            onClick: (e) => {
                                handleOptionClick(child.props.children);
                            },
                        })
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
