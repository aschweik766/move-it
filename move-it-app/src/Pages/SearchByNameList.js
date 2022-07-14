import { UseState, useEffect, useRef} from 'react';
import SearchResults from './SearchResults';
// import LastSearched from '../Components/home/LastSearched';


const SearchByNameList = (props) => {

    // console.log(props);
    const inputElement = useRef("");
    const getSearchTerm = () => {
        // console.log(inputElement.current.value)
        props.searchKeyword(inputElement.current.value)
    };

    return (
        <div>
                <h1>Search Results:</h1>
            <div className='search-bar'>
                <div className='col col-sm-4 gallery'>
                    <input
                    ref={inputElement}
                    type="text"
                    value={props.term}
                    className="search form-control"
                    placeholder="Search..."
                    onChange={getSearchTerm}
                    />
                </div>
               
            </div>
            {/* <SearchResults props={props}/> */}
        </div>
    );

};

export default SearchByNameList