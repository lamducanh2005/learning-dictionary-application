import {createContext, useContext, useEffect, useState} from "react";
import Profile from "Frontend/generated/com/application/models/Profile";
import {ProfileService} from "Frontend/generated/endpoints";
import StartProfileItem from "Frontend/components/Start/Profiles/StartProfileItem";
import 'Frontend/themes/Start/StartProfileList.css'
import {AddIcon} from "@chakra-ui/icons";
import AddProfileButton from "Frontend/components/Start/Profiles/AddProfileButton";


export default function StartProfileList() {

    const [profiles, setProfiles] = useState<Profile[]>();
    const [isReload, setReload] = useState(false);

    useEffect(() => {
        const updateProfiles = async () => {
            const response = await ProfileService.getAllProfiles();
            setProfiles(response);
        }
        updateProfiles();
    }, [isReload]);

    const handleClick = async (newProfile: Profile) => {
        await ProfileService.addProfile(newProfile)
        setReload(!isReload);
    }

    return (
        <div className={"start-profile-list"}>
            <div className={"list-wrapper"}>
            {
                profiles?.map((profile: Profile) => {
                    return <StartProfileItem key={profile.id} profile={profile}/>
                })
            }
            </div>
            <AddProfileButton onClick={handleClick}/>
        </div>
    )
}