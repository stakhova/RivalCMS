import React from 'react'
import {PagItem, PagLink, PagList} from "./Pagination.style";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    return (
            <PagList className='pagination justify-content-center'>
                {pageNumbers.map(pgNumber => (
                    <PagItem key={pgNumber}
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <PagLink onClick={() => setCurrentPage(pgNumber)}
                           className='page-link'
                           href='#'>

                            {pgNumber}
                        </PagLink>
                    </PagItem>
                ))}
            </PagList>
    )
}

export default Pagination