import React from "react";
import { Text } from "react-native";

const ChuckNorrisFact = ({  }) => {
   
    const [fact, setFact] = React.useState('This is the fact.');

    const fetchFact = async () => { 
        
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random',{
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Alt-Used": "api.chucknorris.io",
                "Upgrade-Insecure-Requests": "1",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1",
            },
            "referrer": "https://api.chucknorris.io/",
            "method": "GET",
            "mode": "cors"
        });

        const json = await response.json();

        //const fact = json.value;

        fact = json.value;

        console.log(json);
    }catch (err) {
        console.error(err);
        }

    React.useEffect(() => {
        fetchFact();


        });
        

  return (
    <>
      <Text style={{ fontSize:48, textAlign:'center',margin:10}}>
        {fact}
      </Text>

    </>
  );
}}

export default ChuckNorrisFact;