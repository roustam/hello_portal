import { useState } from 'react';

export const useToggleListOptions = (options: string[]) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      handleDeselect(option);
    } else {
      handleSelect(option);
    }
  };

  const toggleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      handleDeselectAll();
    } else {
      handleSelectAll();
    }
  };

  const handleSelect = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, option]);
  };

  const handleDeselect = (option: string) => {
    setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((el) => el !== option)
    );
  };

  const handleSelectAll = () => {
    setSelectedOptions(options);
  };

  const handleDeselectAll = () => {
    setSelectedOptions([]);
  };

  return {
    selectedOptions,
    toggleSelect,
    toggleSelectAll,
  };
};