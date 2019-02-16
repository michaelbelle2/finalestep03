import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';
import { setInterval } from 'timers';

// Import contract
import TutorialToken from "./contracts/TutorialToken.json";

class App extends Component {

  constructor(props) {
    super(props)

    // Use these state variables to save the user comment and store a list of previously added comments
    this.state = {
      comment: '',
      messages: [],
      account: null,
      web3: null,
      errorMsg: '',
      transferForm: {
        amount: 0,
        address: ''
      },
    }
  }

  componentDidMount = async () => {

    setInterval(async () => {

      try {
        //Does the browser provide access to web3? (this is provided via Metamask in my case)
        if (typeof window.web3 !== undefined) {
          //Access Metamask wallet and information
          const web3 = new Web3(Web3.givenProvider)

          const accounts = await web3.eth.getAccounts() //account[0] is default

          if (accounts.length < 1) {
            // console.log('Could not connect to Metamask. Please unlock your metamask')
            this.setState({ errorMsg: 'Could not connect to Metamask. Please unlock your metamask' })
          } else {

            this.setState({ account: accounts[0] })
            this.initContract(web3)
          }

        } else {
          // console.log('web3 not detected')
          this.setState({ errorMsg: 'web3 not detected' })
        }
      } catch (error) {
        this.setState({ errorMsg: 'Could not detect web3' })
      }

    }, 1000)


  }

  initContract = async (web3) => {

    //Get logged in MetaMask ETH address
    const accounts = await web3.eth.getAccounts()
    //Instantiate the polyToken smart contract
    //***TODO: Grab deployed contract address from commandline */
    const tutorialInstance = new web3.eth.Contract(TutorialToken.abi, '0x7aa77209196c6ea244c36c0351d448110a39e07d')

    console.log(tutorialInstance)
    //We use web3.utils.fromWei to display the units of the balance from wei to ether
    this.setState({ contractInstance: tutorialInstance })

  }

  handleSubmit = () => {
    console.log(this.state.comment)
    // Modify this function to handle user submissions and update state
  }

  handleInputChange(e) {
    e.persist()

    var name = e.target.name
    var value = e.target.value
    this.setState((prevState) => {
      return {
        [name]: value,
      }
    })

  }

  render() {
    return (
      <div classNameName="App">
        <ul className="comment-section">

          {/* Replace the contents of comment-section with the appended list of user comments */}


          <li className="comment author-comment">

            <div className="info">
              <a href="#">Jack Smith</a>
              <span>1 hour ago</span>
            </div>

            <a className="avatar" href="#">
              <img src="https://api.adorable.io/avatars/285/avatar_user_3.png" width="35" alt="Profile Avatar" title="Jack Smith" />
            </a>

            <p>Random comment goes here</p>

          </li>

          <li className="write-new">

            <form>

              <textarea placeholder="Write your comment here" name="comment" value={this.state.comment}></textarea>

              <div>
                <img src="https://api.adorable.io/avatars/285/avatar_user_4.png" width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                <button type="button" onClick={this.handleSubmit}>Submit</button>
              </div>

            </form>

          </li>

        </ul>

        <footer>
          <a href="http://tutorialzine.com/2015/11/using-flexbox-to-create-a-responsive-comment-section/">Inspired by this tutorial</a>
        </footer>
      </div>
    );
  }
}

export default App;
