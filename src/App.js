import Home from '../src/Components/Home';
import { ThemeProvider } from 'react-jss';
import {useEffect, useState} from 'react';

function App() {
    const blue = '#3E96FD';
    const red = '#e5383b';
    const green = '#76c893';

    const bgDarkBlue = '#081320';
    const bgBlue = '#0F253F';
    
    const bgDarkRed = '#190606';
    const bgRed = '#390E0F';
    
    const bgDarkGreen = '#0F1912';
    const bgGreen = '#1D3225';

    const [appColor, setAppColor] = useState(blue);
    const [appColorOnHover, setAppColorOnHover] = useState();
    const [backgroundColors, setBackgroundColors] = useState({bgDarkColor: bgDarkBlue, bgColor: bgBlue});

    useEffect(() => {
        switch (appColor) {
            case blue:
                setBackgroundColors({bgDarkColor: bgDarkBlue, bgColor: bgBlue});
                break;
            case red:
                setBackgroundColors({bgDarkColor: bgDarkRed, bgColor: bgRed});
                break;
            case green:
                setBackgroundColors({bgDarkColor: bgDarkGreen, bgColor: bgGreen});
                break;
        }
    }, [appColor]);

    const theme = {
        appColor: appColor,
        appColorOnHover: appColorOnHover,
        darkBackgroundColor: backgroundColors.bgDarkColor,
        backgroundColor: backgroundColors.bgColor
    }

    return (
         <ThemeProvider theme={theme} >
            <Home setAppColor={setAppColor} appColor={appColor} appColorOnHover={appColorOnHover} setAppColorOnHover={setAppColorOnHover}/>
         </ThemeProvider> 
    )
}

export default App;