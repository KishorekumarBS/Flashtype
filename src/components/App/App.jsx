import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

const TotalTime = 60;
const DefaultState = {
  selectedParagraph: "Hello World!",
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  loading: false, // Add loading state
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParagraph = () => {
    this.setState({ loading: true }); // Set loading to true before fetching
    fetch("https://hipsum.co/api/?type=hipster-centric&sentences=6.3")
      .then((response) => response.json())
      .then((data) => {
        let paragraph = data.join(" ").replace(/[\[\]"]/g, "");

        const selectedParagraphArray = paragraph.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        this.setState({
          ...DefaultState,
          selectedParagraph: paragraph,
          testInfo,
          loading: false, // Set loading to false after fetching
        });
      });
  };

  componentDidMount() {
    this.fetchNewParagraph();
  }

  startAgain = () => this.fetchNewParagraph();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: this.state.testInfo.map((letterInfo) => ({
          ...letterInfo,
          status: "notAttempted",
        })),
        characters: 0,
        words: 0,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }

    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    const isMistake = inputValue[index] === testInfo[index].testLetter;
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          startAgain={this.startAgain}
          loading={this.state.loading} // Pass loading state
        />
        <Footer />
      </div>
    );
  }
}

export default App;
