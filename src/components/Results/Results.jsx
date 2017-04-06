import React, { Component } from 'react';
import _ from 'lodash';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const emptyCandidate = {
	name: '',
	matches: null,
	blurb: ''
};

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topCandidates: [emptyCandidate],
		};
	}

	componentDidMount() {
		this.getCandidate(this.props);
	}

	getCandidate(props) {
		const { 
						answers,
						candidates,
					}				 					= props;
		const evaluateCandidate = this.evaluateCandidate.bind(this, answers);
		const topCandidates     = _.reduce(candidates, evaluateCandidate, this.state.topCandidates.slice());
		this.setState({ topCandidates });
	}

	evaluateCandidate(answers, topCandidates, candidate) {
		let matches = 0;
		_.forEach(answers, (answer, idx) => {
			if (candidate.answers[idx].toLowerCase() === answer.toLowerCase()) {
				matches += 1;
			}
		});
		return this.updateTopCandidates(topCandidates, matches, candidate);
	}

	updateTopCandidates(topCandidates, matches, candidate) {
		const { name, blurb } = candidate;
		const currTotal 			= topCandidates[0].matches || -1;
		if (matches > currTotal) {
			return [{
				name: name,
				matches: matches,
				blurb: blurb,
			}];
		} else if (matches === currTotal) {
			topCandidates.push({ matches, name, blurb });
			return topCandidates;
		} else {
			return topCandidates;
		}
	}

	getStyles() {
		return {
			mainHeader: {
				fontWeight: 'bold',
				fontSize: '1.2em',
			},
			header: {
				color: 'rgb(0, 188, 212)',
			},
			text: {
				paddingTop: 0,
			},
		};
	}

	render() {
		const styles 						= this.getStyles();
		const { topCandidates } = this.state;

		return (
			<Card>
				<CardHeader 
					style={styles.mainHeader}
					title={'The following candidates share values with you:'} 
				/>
				{_.map(topCandidates, (candidate, key) =>
					<div key={key}>
						<CardHeader titleStyle={styles.header} title={candidate.name} />
						<CardText style={styles.text}>{candidate.blurb}</CardText>
					</div>
				)}
			</Card>
		);
	}
}

export default Results;
