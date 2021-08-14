import Home from '../src/Components/Home';
import { ThemeProvider } from 'react-jss';
import {useState} from 'react';

const blue = '#3E96FD';
const red = '#e5383b';
const green = '#76c893';



function App() {
    const [appColor, setAppColor] = useState(blue);

    const theme = {
        appColor: appColor
    }

    return (
         <ThemeProvider theme={theme} >
            <Home setAppColor={setAppColor} appColor={appColor}/>
         </ThemeProvider> 
    )
}

export default App;