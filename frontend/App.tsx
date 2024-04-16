import router from 'Frontend/routes.js';
import {Outlet, RouterProvider} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react";
import {createContext, Suspense, useEffect, useState} from "react";
import Profile from "Frontend/generated/com/application/models/Profile";
import {ProfileService} from "Frontend/generated/endpoints";
import 'Frontend/themes/App.css';

export const ProfileContext = createContext({} as Profile);

export default function App() {

    const [profile, setProfile] = useState<Profile>({} as Profile);

    useEffect(() => {
        const updateProfile = async () => {
            let profileId = 1;
            const profileIdString = localStorage.getItem('profile-id');
            if (profileIdString) profileId = parseInt(profileIdString);

            const response = await ProfileService.getProfileById(profileId);
            setProfile(response);
        }
        updateProfile();
    }, []);


    return (
        <ProfileContext.Provider value={profile}>
            <ChakraProvider>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </ProfileContext.Provider>
    );
}

