
import {View, Text} from 'react-native';
import {Helmet} from "react-helmet";

import Header from "../components/Header";

const Home = () =>{
    return(
        
    <View>
        <Header active="home" />
        <Text>Meesh is the boss</Text>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
        </Helmet>
    </View>
    )
}
export default Home;
