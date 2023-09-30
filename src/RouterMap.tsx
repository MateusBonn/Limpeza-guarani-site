import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/aboutUs';
import Navbar from './layouts/navbar';
import Ourservices from './Pages/ourServices';
import HowWeWork from './Pages/howWeWork';
import ContactUs from './Pages/contactUs';

function RouterMap() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/ourService" element={<Ourservices />} />
                <Route path="/howWeWork" element={<HowWeWork />} />
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
        </Router>
    )
}

export default RouterMap;