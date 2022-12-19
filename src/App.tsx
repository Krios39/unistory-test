import React, {useState} from 'react';
import {Route} from "react-router";
import {Routes} from "react-router-dom";
import history from './history';
import {MainPage, WalletPage, CustomRouter} from "./pages";

import './styles/global-styles.scss'
import {ExtensionPopup} from "./components/extension-popup";


export const App = () => {

    const [isShowPopup, setIsShowPopup] = useState<boolean>(true)

    return (
        <>
            {isShowPopup && <ExtensionPopup onClose={() => setIsShowPopup(false)}/>}

            <CustomRouter history={history}>
                <Routes>
                    <Route path={'/:id'} element={<WalletPage/>}/>
                    <Route path={'*'} element={<MainPage/>}/>
                </Routes>
            </CustomRouter>
        </>
    );
};

export default App;
