'use client'

export default function NewsSignupInputs({ props }) {
    return (
        <>
            <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col mb-4 w-1/2">
                    <input
                        className="flex shadow appearance-none border-2 rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        onChange={(e) => props.setFirstName(e.target.value)}
                        placeholder="Username"
                    ></input>
                    <p>{/* Error Message */}</p>
                </div>

                <div className="flex flex-col mb-4 w-1/2">
                    <input
                        className="flex shadow appearance-none border-2 rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        onChange={(e) => props.setLastName(e.target.value)}
                        placeholder="Password"
                    ></input>
                    <p>{/* Error Message */}</p>
                </div>
            </div>

            <div className="flex flex-col mb-4 w-full">
                <input
                    className="flex shadow appearance-none border-2 rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    onChange={(e) => props.setEmail(e.target.value)}
                    placeholder="Email Address"
                ></input>
                <p>{/* Error Message */}</p>
            </div>
        </>
    )
}
