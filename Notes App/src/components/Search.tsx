import { MagnifyingGlass } from "phosphor-react";

export function Search(){
    return(
        <div className="search">
            <MagnifyingGlass size={22} weight="bold" />
            <input type="text" placeholder="Search" />
        </div>
    )
}