import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [title, setTitle] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => { 
            return monster.name.toLocaleLowerCase().includes(searchField);
        })
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);
    
    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    const onTitleChange = (e) => {
        const titleString = e.target.value.toLocaleLowerCase();
        setTitle(titleString);
    }

    return (
        <div className='App'>
            <h1 className='app-title'>{title}</h1>
            <SearchBox
                className='title-search-box'
                onChangeHandler={onTitleChange}
                placeholder='change title'
            />
            <br />
            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
}

export default App;
