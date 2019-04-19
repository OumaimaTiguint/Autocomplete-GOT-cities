import React from 'react'

class AutocompleteText extends React.Component {
    constructor(props) {
        super(props)
        this.items = [
            "King's landing",
            "Braavos",
            "Asshai",
            "Volantis",
            "Old Valeria",
            "Free cities",
            "Qarth",
            "Oldtown",
            "Ar noy",
            "Astapor",
            "Chroyane",
            "Lannisport",
            "Lys",
            "Meereen",
            "Myr",
            "Pentos",
            "Qohor",
            "Sunspear",
            "Vaes Dothrak",
            "White harbor",
            "Yunkai"
        ];
        this.state = {
            suggestions: [],
            text: ""
        }
        
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(()=> ({ suggestions, text: value }));
    }

    suggestionSelected(value) {
        this.setState(()=> ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if(suggestions.length === 0) {
            return null;
        } 
        return (
            <ul>
                {suggestions.map((item)=> <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const { text } = this.state;
        return (
            <div className="container">
                <input 
                    onChange={this.onTextChanged} 
                    type="text"
                    value={text} 
                />
                <div className="suggestions">
                    {this.renderSuggestions()}
                </div>
            </div>
        )
    }
}

export default AutocompleteText