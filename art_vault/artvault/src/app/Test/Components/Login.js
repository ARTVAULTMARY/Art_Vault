"use client"
import { useState } from "react";
import { Card, Text, TextField, Flex, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Login () {
    const [isRevealed, setIsRevealed] = useState("false")
    const router = useRouter();
    
    const handleLogin = (e) => {
        e.preventDefault();
        //Todo Dispatch action for login
    };

    const handleLogout = (e) => {
        e.preventDefault();
        //Todo Dispatch action for logout
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsRevealed(!isRevealed);
    };

    return (
        <Flex className="flex-col h-screen w-full justify-center items-center">
            <Flex className="flex-col w-11/12 sm:w-9/12 md:w-9/12 xl:w-3/6 max-w-screen-sm">
                <Card size="3" className="flex flex-row w-full">
                    <div className="flex flex-col space-y-3">
                        <Text size="5" className="mb-5">Login</Text>
                        <TextField.Input size="3" placeholder="Username" />
                        <TextField.Input size="3" placeholder="Password" />
                        <div className="flex flex-row justify-between">
                            <Button onClick={handleLogin} className="mt-5 hover:cursor-pointer">Login</Button>
                            <Button onClick={handleClick} className="mt-5 hover:cursor-pointer">User Info</Button>                 
                            <Button onClick={handleLogout} className="mt-5 hover:cursor-pointer">Logout</Button>
                        </div>
                    </div>
                </Card>
                {isRevealed ? 
                    <Card size="3" className="flex flex-row w-full mt-4">
                        <div className="flex flex-row justify-center">
                            <Text>User Data</Text>
                        </div> 
                    </Card> : null
                }
            </Flex>
        </Flex>
    );
};
