import {useEffect, useState } from 'react';
import '../styles/checkbox.css';
import { FaCheck } from 'react-icons/fa';

type Props = {
  name: string
  allCheckbox?: boolean
  allChecked?: boolean
  setAllChecked?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Checkbox({name, allChecked, setAllChecked, allCheckbox}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    if (allCheckbox && setAllChecked) {
      setAllChecked(!allChecked)
      console.log(allChecked)
      return
    }
      setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (!isChecked && allChecked) {
      setIsChecked(true)
      return
    }

    if (isChecked && allChecked) {
      setIsChecked(true)
      return
    }

    setIsChecked(false);
  }, [allChecked])

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
      <div className={(isChecked && !allCheckbox) || (allCheckbox && allChecked) ? 'checkbox checked' : 'checkbox'}>
        {isChecked && !allCheckbox || allCheckbox && allChecked ? <FaCheck className="check-icon" /> : ''}
        {isHovered && !isChecked && <FaCheck className="hover-icon" />}
        {isHovered && isActive && !isChecked && <FaCheck className="hover-icon" color='black' />}
      </div>
    </div>
  );
}