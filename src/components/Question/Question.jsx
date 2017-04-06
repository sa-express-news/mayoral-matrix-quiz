import React from 'react';
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';

const getStyles = () => {
	return {
		radioButtonGroup: {
			padding: 16,
		},
		radioButton: {
    	marginBottom: 16,
  	},
		rightButton: {
			float: 'right',
		},
	};
}

export default props => {
	const styles = getStyles();
	const {
		data,
		step,
		isNotAnswered,
		currAnswer,
		setAnswer,
		switchQuestion,
	} 					 = props;

	return (
		<Card>
			<CardHeader title={data.question} />
			{data.question !== '' &&
				<CardText>
					<RadioButtonGroup
						style={styles.radioButtonGroup}
						name={data.question}
						key={data.id}
						onChange={setAnswer}
						defaultSelected={currAnswer}>
			      <RadioButton
			        value='a'
			        label={data.a}
			        style={styles.radioButton}
			      />
			      <RadioButton
			        value='b'
			        label={data.b}
			        style={styles.radioButton}
			      />
			      <RadioButton
			        value='c'
			        label={data.c}
			        style={styles.radioButton}
			      />
			      <RadioButton
			        value='d'
			        label={data.d}
			        style={styles.radioButton}
			      />
			    </RadioButtonGroup>
				</CardText>
			}
			<CardActions>
	      <FlatButton
	      	onTouchTap={switchQuestion.bind(this, step - 1)}
	      	label="Back"
	      	disabled={!step}
	      />
	      <FlatButton 
	      	onTouchTap={switchQuestion.bind(this, step + 1)}
	      	style={styles.rightButton}
	      	primary={true}
	      	disabled={isNotAnswered}
	      	label="Next"
	      />
	    </CardActions>
	  </Card>
	);
}