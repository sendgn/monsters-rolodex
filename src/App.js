import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        console.log('constructor');

        super();

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    onSearchChange = (e) => {
        const searchField = e.target.value.toLocaleLowerCase();

        this.setState(() => {
            return { searchField };
        });
    }

    componentDidMount() {
        console.log('componentDidMount');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState(() => {
                    return { monsters: users };
                });
            });
    }

    render() {
        console.log('render');

        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;
        
        const filteredMonsters = monsters.filter((monster) => { 
                return monster.name.toLocaleLowerCase().includes(searchField);
            }
        );

        return (
            <div className='App'>
                <input
                    className='search-box'
                    type='search'
                    placeholder='search monsters'
                    onChange={onSearchChange}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
