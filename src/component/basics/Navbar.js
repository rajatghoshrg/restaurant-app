import React from 'react'

const Navbar = ({filterItem, menulist }) => {
  return (
    <>
       <nav className='navbar'>
                <div className='btn-group'>
                    {menulist.map((category) => (
                        <button
                            key={category}
                            className='btn-group__item'
                            onClick={() => filterItem(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </nav>
    </>
)
}
export default Navbar
