import React, { useEffect } from 'react';

const Select = ({ data, name, setSelectedId }) => {

  const handleSelect = (e) => {
    setSelectedId(parseInt(e.target.value));
  };

  const isDisabled = data.length < 2;

  useEffect(() => {
    if (data.length === 1) {
      setSelectedId(data[0].id);
    }
  }, [data]);

  return (
    <select
      defaultValue={""}
      disabled={isDisabled}
      onChange={handleSelect}
      className='px-3 py-2 rounded-lg dark:bg-slate-950 bg-slate-100 outline-none'
    >
      {data.length > 1 && <option value="">{`Select ${name}`}</option>}
      {data.map((item) => {
        return <option key={item.id} value={item.id}>{item.name}</option>;
      })}
    </select>
  );
};

export default Select;
