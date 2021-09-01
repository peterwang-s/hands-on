import React from 'react';
import { useSelector } from 'react-redux';
import useLanguage from '@/hooks/basic-utils/useLanguage';
import './index.styl';

const App: React.FC<any> = () => {
    const [lang] = useLanguage();

    const {
        a: { projectName },
    } = useSelector((state: any) => state);

    return (
        <div className="container primary-container">
            <p>
                <span>project1</span>
            </p>
            <p>
                <span>projectName</span>
                <span>{projectName}</span>
            </p>
            <p>
                <span>lang</span>
                <span>{lang}</span>
            </p>
        </div>
    );
};

export default App;
