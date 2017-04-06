import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import store from '../../store';
import actions from '../../actions';

import Question from '../Question/Question';
import Results from '../Results/Results';

const emptyQuestion = {
	question: '',
	id: 0,
	a: '', b: '', c: '', d: '',
};

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [],
			step: 0,
			viewResults: false,
			currQuestion: emptyQuestion,
		};
		this.setAnswer 			= this.setAnswer.bind(this);
		this.switchQuestion = this.switchQuestion.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	componentWillReceiveProps(nextProps) {
		this.setCurrQuestion(nextProps.questions);
	}

	setCurrQuestion(questions) {
		const { step } = this.state;
		this.setState({
			currQuestion: questions[step],
		});
	}

	getData() {
		store.dispatch(actions.question.getQuestions());
		store.dispatch(actions.candidate.getCandidates());
	}

	setAnswer(ev, answer) {
		const answers = this.state.answers.slice();
		answers[this.state.step] = answer;
		this.setState({ answers });
	}

	switchQuestion(step) {
		const { questions } = this.props;
		if (step < questions.length) {
			const currQuestion  = questions[step];
			this.setState({
				step,
				currQuestion,
			});
		} else {
			this.setState({ viewResults: true });
		}
	}

	render() {
		const { candidates } = this.props;
		const { 
			currQuestion,
			step,
			answers,
			viewResults,
		} 							 		= this.state;
		const isNotAnswered = !answers[step];
		const currAnswer 		= !isNotAnswered ? answers[step] : null;

		return (
			<div>
				{viewResults &&
					<Results 
						answers={answers}
						candidates={candidates}
					/>
				}
				{!viewResults &&
					<Question 
						data={currQuestion}
						step={step}
						isNotAnswered={isNotAnswered}
						currAnswer={currAnswer}
						setAnswer={this.setAnswer}
						switchQuestion={this.switchQuestion}
					/>
				}
			</div>
		);
	}
}

const mapStateToProps = store => {
  return { 
    questions: store.questions,
    candidates: store.candidates,
  }
};
export default connect(mapStateToProps)(Quiz);