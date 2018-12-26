import React, {Component} from 'react';
import './App.css';
import Tabs               from './components/Tabs';

class App extends Component {
	state = {
		tabs: [
			{
				title: 'Tab 1',
				content: 'Content for Tab 1',
				innerTabs: [
					{
						title: 'Tab 1',
						content: 'Inner Content for Tab 1',
					},
					{
						title: 'Tab 2',
						content: 'Inner Content for Tab 2',
					},
					{
						title: 'Tab 3',
						content: 'Inner Content for Tab 3',
					}
				]
			},
			{
				title: 'Tab 2',
				content: 'Content for Tab 2',
				innerTabs: [
					{
						title: 'Tab 1',
						content: 'Inner Content for Tab 1',
					},
					{
						title: 'Tab 2',
						content: 'Inner Content for Tab 2',
					}
				]
			},
			{
				title: 'Tab 3',
				content: 'Content for Tab 3',
				innerTabs: []
			},
		]
	};

	render() {
		const tabs = this.state.tabs.map((tab, index) => <Tabs.Tab key={index} title={tab.title}>{
			tab.innerTabs.length > 0 ?
				<Tabs>
					{tab.innerTabs.map((tab, index) => <Tabs.Tab key={index} title={tab.title}>{tab.content}</Tabs.Tab>)}
				</Tabs>
				: tab.content
		}</Tabs.Tab>);
		return (
			<Tabs>
				{tabs}
			</Tabs>
		);
	}
}

export default App;
