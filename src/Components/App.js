import React, { Component } from 'react';
import Header from './Header';
import Pages from './Pages';
import '../scss/App.css';
import { FormattedMessage } from 'react-intl';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personalInformation: {
          lastName: '',
          firstName: '',
        },
        contactInformation: {
          phoneNumbers: [],
          emails: [],
        },
        extras: {
          familyNumber: 0,
          islandResident: {
            region: '',
            locality: ''
          },
        },
        emergencyContact: [
          {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
          }
        ],
        travelDocuments: {
          idCard: [
            {
              placeOfBirth: '',
              issueDate: '',
              expiryDate: '',
              dniNumber: '',
            },
          ],
          passport: [
            {
              issueCountry: '',
              issueDate: '',
              expiryDate: '',
              passportNumber: '',
              },
          ],
        }
      },
      titles : {
        title1: <FormattedMessage
                  id="App.personalInfo"
                  defaultMessage="Personal information"
                />,
        title2: <FormattedMessage
                  id="App.travelDocuments"
                  defaultMessage="Travel documents"
                />,
        title3: <FormattedMessage
                  id="App.paymentMethod"
                  defaultMessage="Payment method"
                />,
        title4: <FormattedMessage
                  id="App.tripPreferences"
                  defaultMessage="Trip preferences"
                />,
        title5: <FormattedMessage
                  id="App.extraInfo"
                  defaultMessage="Extra information"
                />,
      },
      steps : {
        step1: <FormattedMessage
                id="App.step1"
                defaultMessage="Step 1"
              />,
        step2: <FormattedMessage
                id="App.step2"
                defaultMessage="Step 2"
              />,
        step3: <FormattedMessage
                id="App.step3"
                defaultMessage="Step 3"
              />,
        step4: <FormattedMessage
                id="App.step4"
                defaultMessage="Step 4"
              />,
        step5: <FormattedMessage
                id="App.step5"
                defaultMessage="Step 5"
              />,
      },
      dots : {
        dot1: true,
        dot2: false,
        dot3: false,
        dot4: false,
        dot5: false,
      },
      previousStep: 0,
      currentStep: 1,
      followingStep: 2,
      changingStep: {
        changingStep1: {
          stepNumber: 1,
          active: false,
          completed: false
        },
        changingStep2: {
          stepNumber: 2,
          active: false,
          completed: false
        },
        changingStep3: {
          stepNumber: 3,
          active: false,
          completed: false
        },
        changingStep4:  {
          stepNumber: 4,
          active: false,
          completed: false
        },
        changingStep5:  {
          stepNumber: 5,
          active: false,
          completed: false
        },
      }
    }
    this.handleClickPreviousStep = this.handleClickPreviousStep.bind(this);
    this.handleClickFollowingStep = this.handleClickFollowingStep.bind(this);
    this.handleUpdateNavigation = this.handleUpdateNavigation.bind(this);
  }

    componentDidMount () {
      this.handleUpdateNavigation();
    }

  handleUpdateNavigation() {
    console.log('FUNCIONAAAA!!!');
    const {
      currentStep,
      changingStep,
    } = this.state;
    const {
      changingStep1,
      changingStep2,
      changingStep3,
      changingStep4,
      changingStep5
    } = changingStep;
    console.log('changingStep, currentStep', changingStep, currentStep);
    console.log('change1',changingStep1.active );
    if(changingStep1.stepNumber === currentStep){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: true},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      });
    } else if(changingStep2.stepNumber === currentStep){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: true},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      });
    } else if(changingStep3.stepNumber === currentStep){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: true},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: false},
        }
      });
    } else if(changingStep4.stepNumber === currentStep){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: true},
          changingStep5: {...changingStep5, active: false},
        }
      });
    } else if(changingStep5.stepNumber === currentStep){
      this.setState({
        changingStep: {
          changingStep1: {...changingStep1,active: false},
          changingStep2: {...changingStep2,active: false},
          changingStep3: {...changingStep3,active: false},
          changingStep4: {...changingStep4,active: false},
          changingStep5: {...changingStep5, active: true},
        }
      });
    } 
    console.log('STATEINFUNCTION', this.state);

  }

  handleClickPreviousStep() {
    console.log(this.state.currentStep);
    const {dot1} = this.state.dots;
    if(dot1 === true){
      this.setState({
        dots: {
          dot1: false,
          dot2:true,
          dot3: false,
          dot4: false,
          dot5: false,
        },
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(dot1 === false){
      this.setState({
        dots:{
          dot1: true,
          dot2: false,
          dot3: false,
          dot4: false,
          dot5: false,
        },
        previousStep: this.state.previousStep - 1,
        currentStep: this.state.currentStep - 1,
        followingStep: this.state.followingStep - 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    }
  }

  handleClickFollowingStep() {
    console.log(this.state.currentStep);
    const {dot1} = this.state.dots;
    console.log('dot1',dot1);
    if(dot1 === true){
      this.setState({
        dots:{
          dot1: false,
          dot2: true,
          dot3: false,
          dot4: false,
          dot5: false
        },
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function () {
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
    })
  } else if(dot1 === false){
      this.setState({
        dots:{
          dot1: true,
          dot2: false,
          dot3: false,
          dot4: false,
          dot5: false,
        },
        previousStep: this.state.previousStep + 1,
        currentStep: this.state.currentStep + 1,
        followingStep: this.state.followingStep + 1,
      }, function(){
        console.log(this.state.previousStep);
        console.log(this.state.currentStep);
        console.log(this.state.followingStep);
      })
    }
  }

  render() {
    console.log('ESTADO',this.state);
    const {state} = this;
    return (
      <div className="App">
        <Header />
        <Pages 
          dataFromState={state}
          handleClickPreviousStep={this.handleClickPreviousStep}
          handleClickFollowingStep={this.handleClickFollowingStep}
          handleUpdateNavigation={this.handleUpdateNavigation}
        />
      </div>
    );
  }
}


export default App;
