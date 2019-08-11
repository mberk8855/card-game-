import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friendsfile from "./friendsfile.json";
import "./App.css";


class App extends React.Component {
state = {
  friends: friendsfile,
  score: 0,
  topScore: 0,
  clicked: []
}

onclickcard= id => {
  console.log("clicked: ", id)

  if (this.state.clicked.includes(id)){

   //  send a message 
   let tempFriends = this.state.friends.sort(() => Math.random() - 0.5);
   this.setState({
     score: 0,
     clicked: [],
     friends: tempFriends
   })

  }
  else{
    let tempClicked = this.state.clicked
    tempClicked.push(id)
    // shuffle

    let tempFriends = this.state.friends.sort(() => Math.random() - 0.5);
    let newscore = this.state.score + 1;
    // if newcore >  topscore then topscore = newscore
    // first part is the question and the second part left is the true and right is the false
    // if the question is true the value returned is the first one if it is false the value returned is the second one
    // if (newscore > this.state.topScore){
    //   let tempTop = newscore
    // }
    // else{
    //   let temTop = this.state.topScore
    // }

    let tempTop = newscore > this.state.topScore ? newscore : this.state.topScore;

    this.setState({
      score: newscore,
      clicked: tempClicked,
      friends: tempFriends,
      topScore: tempTop
    })
  }
  // be sure thay the card was not clicked before in the current game
  // if not then score++ and shuffle
  // if yes we need to restart the game === start score 0 and new friends refreshed (no one is clicked)


  //this.setState({ friends: this.state.friends.filter(x => x.id !== id )});
}

render () {
  const { friends } = this.state
  return (
  <Wrapper>
    <h1 className="title">Friends List</h1>

    <div>
      <h1>Score: {this.state.score} - Topscore: {this.state.topScore}</h1>
    </div>

    {friends.map(friend => (

    <FriendCard
      onclickcard={this.onclickcard}
      id={friend.id}
      name={friend.name}
      image={friend.image}
      key={friend.id}
     
    />
    ))}
  </Wrapper>
  )};
}

export default App;