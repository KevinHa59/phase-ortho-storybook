import React from 'react';
import './SearchBoxTemplate.css';
import { MdSearch, MdClose } from 'react-icons/md';
export default function SearchBoxTemplate({ className, style, placeholder, onChange, value, setValue }) {
  return (
    <div className="InputSearchContainer">
      <input type="text" className={'Input ' + className} style={style} value={value} setValue={setValue} placeholder={placeholder} onChange={onChange} />

      {value?.length === 0 ? (
        <MdSearch className="Icon" />
      ) : (
        <MdClose
          className="Icon"
          onClick={() => {
            setValue('');
          }}
        />
      )}
    </div>
  );
}
