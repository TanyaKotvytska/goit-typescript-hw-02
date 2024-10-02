import { useState } from 'react';
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const [query, setQuery] = useState<string>('');

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(evt.target.value);
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={css.headersearchbar}>
            <form className={css.formsearchbar} onSubmit={handleSubmit}>
                <input
                    className={css.inputsearchbar}
                    type="text"
                    name="topic"
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btnsearchbar} type="submit">Search</button>
            </form>
        </header>
    );
}