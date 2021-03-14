import React from "react";
import {number} from "prop-types";

export default function Pagination({productPerPage, totalProducts , paginate}) {
    const pageNumbers  = [];

    for(let n = 1; n <= Math.ceil(totalProducts/ productPerPage); n++){
        pageNumbers.push(n)
    }


    return(
    <nav>
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a className="page-link" href="#" onClick={()=> paginate(number) }>{number}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
    )
}