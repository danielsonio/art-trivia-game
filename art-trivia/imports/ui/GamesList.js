import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

export default class GamesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount() {
        console.log('component did mount Linkslists')
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links')
            const links = Links.find().fetch();
            this.setState({ links });
        });
    }
    componentWillUnmount() {
        console.log('component will Unmount Links list')
    }
    renderLinksListItems() {
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
        });
    }
    render() {
        return (
            <div> 
                <p>Links List</p>
                <div>
                    <ul>{this.renderLinksListItems()}</ul>
                </div>
            </div>
        );
    }
}