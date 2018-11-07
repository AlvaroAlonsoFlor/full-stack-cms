import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import HomeNavBar from '../components/Home/HomeNavBar';
import UserList from '../components/Home/UserList';
import { TabList } from 'bloomer/lib/components/Tabs/TabList';
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink';
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { HeroHeader } from 'bloomer/lib/layout/Hero/HeroHeader';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { HeroFooter } from 'bloomer/lib/layout/Hero/HeroFooter';
import { Tabs } from 'bloomer/lib/components/Tabs/Tabs';
import { Nav } from 'bloomer/lib/components/Nav/Nav';
import { NavLeft } from 'bloomer/lib/components/Nav/NavLeft';
import { NavItem } from 'bloomer/lib/components/Nav/NavItem';
import { NavCenter } from 'bloomer/lib/components/Nav/NavCenter';
import { Icon } from 'bloomer/lib/elements/Icon';
import { NavRight } from 'bloomer/lib/components/Nav/NavRight';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { Tab } from 'bloomer/lib/components/Tabs/Tab';
import { Button } from 'bloomer/lib/elements/Button';
import { Section } from 'bloomer/lib/layout/Section';
import { isCenter, isCentered } from 'bloomer/lib/bulma';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // We might be able to refactor this to a stateless function
        //if we do the request in user list
        
       fetch(`/users`)
            .then(response => response.json())
            .then( users => this.setState({users: users._embedded.users}));
    }

    render() {
        return(
           < Fragment >
           <Section>
            <Hero style={{ backgroundColor: "#A4C3B2"}} isSize='small'>
                <HeroHeader>
                    <Icon></Icon>
                </HeroHeader>
                <HeroBody>
                    <Container>
                        <Title>CMS</Title>
                    </Container>
                </HeroBody>
                <HeroFooter>
                    <Tabs isBoxed>
                        <Container>
                            <TabList>
                                <Tab isActive>
                                    <TabLink href='/'>Home</TabLink>
                                </Tab>
                                <Tab>
                                    < TabLink href = '/articles' > Articles </TabLink >
                                </Tab>
                            </TabList>
                        </Container>
                    </Tabs>
                </HeroFooter>
            </Hero>
            </Section>
            <Section>
                 <UserList users={this.state.users}/>
                 </Section>
                 <Section >
                 < Button style={{isCentered: true }} isSize = "large"
                 href = 'users/create/new' > Sign up
                 for new account </Button>
                 </Section>
            </Fragment>
        );
    }
}