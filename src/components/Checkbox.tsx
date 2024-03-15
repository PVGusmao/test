import {useEffect, useState } from 'react';
import '../styles/checkbox.css';
import { FaCheck } from 'react-icons/fa'; // Import icons from react-icons library

type Props = {
  name: string
  allChecked?: boolean
  setAllChecked?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Checkbox({name, allChecked, setAllChecked}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleCheckboxClick = () => {
      setIsChecked(!isChecked);
  };

  useEffect(() => {
    if(setAllChecked) {
      setAllChecked(!allChecked)
    }
  }, [isChecked])

  return (
    <div
      className="checkbox-container"
      onClick={handleCheckboxClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      <span className="label">{name}</span>
      <div className={!(!isChecked && allChecked) || (isChecked && !allChecked) ? 'checkbox checked' : 'checkbox'}>
        {!(!isChecked && allChecked) || ((isChecked && !allChecked)) ? <FaCheck className="check-icon" /> : ''}
        {isHovered && (!isChecked || !allChecked) && <FaCheck className="hover-icon" />}
        {isHovered && isActive && (!isChecked || !allChecked) && <FaCheck className="hover-icon" color='black' />}
      </div>
    </div>
  );
}