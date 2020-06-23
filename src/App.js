import React, {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const apiUrl = "http://breaking-bad-quotes.herokuapp.com/v1/quotes";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0f574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);

    const getQuote = async () => {
        setLoading(true);
        const request = await fetch(apiUrl);
        const [quote] = await request.json();
        setQuote(quote);
        setLoading(false);
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <Container>
            <Quote
                loading={loading}
                quoteObject={quote}
            />
            <Button
                onClick={getQuote}
            >
                Get Quote
            </Button>
        </Container>
    );
}

export default App;
