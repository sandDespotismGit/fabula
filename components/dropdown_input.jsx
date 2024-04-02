import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const DropdownInput = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ]; // Замените на ваши опции

  const handleSelect = (index, value) => {
    setSelectedOption(options[index]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Select an option:</Text>

      <ModalDropdown
        options={options.map((option) => option.label)}
        onSelect={(index, value) => handleSelect(index, value)}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
        defaultValue={selectedOption ? selectedOption.label : 'Select an option'}
      />

      <Text style={styles.additionalInfo}>
        Additional information: {selectedOption ? selectedOption.value : ''}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  dropdownText: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 16,
  },
  dropdown: {
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  additionalInfo: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default DropdownInput;

