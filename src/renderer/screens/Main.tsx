import * as React from 'react';
import Header from '../components/Header/Header';
import MainTable from '../components/MainTable/MainTable';

interface Props {
    
}
interface State {
    
}

export default class Main extends React.Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <Header/>
                <MainTable/>
            </div>
        )
    }
}
