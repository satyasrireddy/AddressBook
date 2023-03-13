import React, {useState} from 'react'

import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'



   
export const View = ({address,deleteBook}) => {

    
    return address.map(addressBook=>(
       
        <tr key={addressBook.Id}>
            <td>{addressBook.Id}</td>
            <td>{addressBook.FirstName}</td>
            <td>{addressBook.LastName}</td>
            <td>{addressBook.Email}</td>
            <td className='delete-btn' onClick={()=>deleteBook(addressBook.Id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>   
           
    
))
}

  

export default View
