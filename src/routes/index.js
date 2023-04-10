import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
export default function RoutesDefinition()
{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/about' element={<About/>}/> */}
        </Routes>
    );
}