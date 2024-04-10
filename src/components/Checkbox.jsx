import React from 'react'

const Checkbox = ({ label, isChecked, handleSelect }) => {
  return (
    <div className="flex items-center">
      <input checked={isChecked} type="checkbox" value={label} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
      onChange={handleSelect}
      />
      <label className="ms-2 text-sm font-medium select-none text-gray-600 capitalize">{label}</label>
    </div>
  )
}

export default Checkbox