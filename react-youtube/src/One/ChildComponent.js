import React, {useContext} from 'react';
import Context from "./IndexUseContext";

const ChildComponent = () => {
    const {state} = useContext(Context)

    return (
        <div>
          <p>{state.user.status}</p>
        </div>
    );
};

export default ChildComponent;
