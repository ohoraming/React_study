import "./App.css";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import Container from "./components/Container";

const cardList = [
    {
        coverImg:
            "https://i.ytimg.com/vi/w9TON4IwR2w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjyKrwbbnS_jHleDibNfkz_p7rhQ",
        avatarImg: "",
        title: "🌞 햇살 좋은 날, 기분 좋게 틀어놓기 좋은 노래 모음",
        nickname: "찐막",
        view: "236,425",
        month: 1,
        playtime: "2:01:30",
    },
    {
        coverImg:
            "https://i.ytimg.com/vi/STs7YDz00Fs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHiMhZyLaf2q-Cls9Oso4ZP_yc5A",
        avatarImg: "",
        title: "asdf",
        nickname: "asdfasd",
        view: "23만",
        month: 1,
        playtime: "2:01:30",
    },
    {
        coverImg:
            "https://i.ytimg.com/vi/uLn-MWfq_no/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7LFNzEHXbFVdPzTwXf0QFCxTbEg",
        avatarImg: "",
        title: "asdf",
        nickname: "asdfasd",
        view: "23만",
        month: 1,
        playtime: "2:01:30",
    },
];

function App() {
    return (
        <Container>
            <CardWrapper>
                {cardList.map((card) => (
                    <Card {...card} />
                ))}
            </CardWrapper>
        </Container>
    );
}

export default App;
