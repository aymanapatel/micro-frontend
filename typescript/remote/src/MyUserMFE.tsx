import React from "react";
import UserSVG from "./UserSVG";

const MyUserMFE: React.FunctionComponent<{user:string}> = ({user}) => {

    return (
        <div className="flex">
            <UserSVG/>User: {user}
        </div>
    );

}

export default MyUserMFE;