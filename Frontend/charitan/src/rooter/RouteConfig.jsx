import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import SamplePage from '../pages/SamplePage';
import SigninPage from '../pages/SigninPage';

const RouteConfig = () => {

    return (
        <Suspense fallback={<CircularProgress className="w-8 h-8" />}>
            <Routes>
                <Route path="/" element={< SamplePage />} />
                <Route path="/home" element={< SamplePage />} />
                <Route path="/login" element={<SigninPage />} />
            </Routes>
        </Suspense>
    )
}

export default RouteConfig;