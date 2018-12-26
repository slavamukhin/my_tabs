import React, {Component} from 'react';

const Tab = ({active, title, ...props}) =>
	<li className={`tab${active ? ' is-active' : ''}`} {...props}><a>{title}</a></li>;

class Tabs extends Component {
	static Tab = Tab;

	state = {
		activeTabIndex: 0
	};

	handleClick = index => this.setState({activeTabIndex: index});

	isActive = index => index === this.state.activeTabIndex;

	render() {
		return (
			<React.Fragment>
				<div className={'tabs'}>
					<ul>
						{React.Children.map(this.props.children, (child, index) =>
							React.cloneElement(child, {
								active: this.isActive(index),
								onClick: () => this.handleClick(index)
							}, child.props.title)
						)}
					</ul>
				</div>
				{
					React.Children.map(this.props.children, (child, index) =>
						this.isActive(index) && <section>{child.props.children}</section>
					)
				}
			</React.Fragment>
		);
	}
}

export default Tabs;