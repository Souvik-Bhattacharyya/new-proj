import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css';
import Timeline from "./Timeline"

function TabsContainer() {
    return (
        <Tabs
            defaultActiveKey="Timeline"
            id="uncontrolled-tab-example"
            className="tab-cont"
        >
            <Tab className='tab-items' eventKey="Timeline" title="Timeline">
                <Timeline />
            </Tab>
            <Tab className='tab-items' eventKey="Highlights" title="Highlights">
                Tab content for Home
            </Tab>

            <Tab className='tab-items' eventKey="About" title="About">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default TabsContainer;