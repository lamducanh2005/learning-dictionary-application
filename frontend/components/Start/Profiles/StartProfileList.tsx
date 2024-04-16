import {createContext, useContext, useEffect, useState} from "react";
import Profile from "Frontend/generated/com/application/models/Profile";
import {ProfileService} from "Frontend/generated/endpoints";
import StartProfileItem from "Frontend/components/Start/Profiles/StartProfileItem";
import 'Frontend/themes/Start/StartProfileList.css'


export default function StartProfileList() {


    const [profiles, setProfiles] = useState<Profile[]>();

    useEffect(() => {
        const updateProfiles = async () => {
            const response = await ProfileService.getAllProfiles();
            setProfiles(response);
        }

        updateProfiles();
    }, []);

    return (
        <div className={"start-profile-list"}>
            {
                profiles?.map((profile: Profile) => {
                    return <StartProfileItem key={profile.id} profile={profile}/>
                })
            }
        </div>
    )
}