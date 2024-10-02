import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader(): JSX.Element {
    return (
        <div className={css.loadercontainer}>
            <Bars color="#4addae" height={80} width={80} />
        </div>
    );
}