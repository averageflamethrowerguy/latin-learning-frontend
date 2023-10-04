import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
// import {Test} from "./components/Test";
import {useEffect, useState} from "react";
import {asyncGetUser} from "./services/authSlice";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {setHasCollectedLocation} from "./services/userSlice";
import {useEditUserMutation} from "./services/api";

const getReferringUser = () => {
    const hrefArray = window.location.href.split('/')
    return hrefArray[hrefArray.length-1]
}

const getQrCode = () => {
    const hrefArray = window.location.href.split('/')
    return hrefArray[hrefArray.length-1]
}

export default function App() {
    const dispatch = useAppDispatch()
    const hold = 0
    const [editUser] = useEditUserMutation()
    const user = useAppSelector(state => state.user.user)
    const hasUpdatedLocation = useAppSelector(state => state.user.hasUpdatedLocation)

    return (
            <Router>
                <div style={{position: "relative", height: "100vh"}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
    )
}
