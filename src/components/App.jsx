
import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
       flexWrap: 'wrap',
        fontSize: 40,
        color: '#010101',
        width: '1200px',
    padding: '20px',
    margin: '0 auto',
    textAlign: 'center',
      }}
    >
      <Feedback />
      
    </div>
  );
};
