import React from 'react'

const Search = ({placeholder, set}) => {
  return (
    <input
        className="px-3 py-2 rounded-lg bg-slate-100 border dark:bg-slate-900 text-center outline-none"
        type='text'
        placeholder={`🔎 Search ${placeholder}`}
        onChange={(e) => set(e.target.value.toLowerCase())}
    />
  )
}

export default Search