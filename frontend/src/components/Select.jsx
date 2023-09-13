import React from 'react'

const Select = ({data, name, setSelectedId}) => {

    const handleSelect = (e) => {
        setSelectedId(parseInt(e.target.value))
    }

  return (
    <select defaultValue={""} onChange={handleSelect} className='px-3 py-2 rounded-lg dark:bg-slate-950 bg-slate-100 outline-none'>
        <option value="" >{`Select ${name}`}</option>
        {data.map((item) => {
             return <option key={item.id} value={item.id}>{item.name}</option>
        })}
    </select>
  )
}

export default Select