import React, { useState } from 'react';
import { Tabs, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ChatBox.css';

const ChatBox = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="chatbox-container">
      <h2 className="chat-history-label">Chat History</h2>
      <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
        <div className="chat-tabs">
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </div>
        <TabPanel>
          <div className="chat-messages">
            <p>Content for Tab1</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="chat-messages">
            <p>Content for Tab2</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="chat-messages">
            <p>Content for Tab3</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChatBox;



// import React, { useState } from 'react';
// import { Tabs, Tab, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import './ChatBox.css';

// const ChatBox = () => {
//   const [tabs, setTabs] = useState(['Tab1', 'Tab2', 'Tab3']);
//   const [selectedTab, setSelectedTab] = useState(0);

//   return (
//     <div className="chatbox-container">
//       <h2 className="chat-history-label">Chat History</h2>
//       <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
//         <div className="chat-tabs">
//           {tabs.map((tab, index) => (
//             <Tab key={index}>{tab}</Tab>
//           ))}
//         </div>
//         {tabs.map((tab, index) => (
//           <TabPanel key={index}>
//             <div className="chat-messages">
//               <p>Content for {tab}</p>
//             </div>
//           </TabPanel>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default ChatBox;
