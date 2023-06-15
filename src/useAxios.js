import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function useAxios() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [context, setContext] = useOutletContext();
    const [id, setId] = useState(null)

    useEffect(() => {
        const getResponse = async () => {
            try {
                if (!context.token || Math.floor(Date.now() / 1000) > context.expire) {
                    const response = await axios.post(
                        "https://api.petfinder.com/v2/oauth2/token",
                        JSON.stringify({
                            grant_type: "client_credentials",
                            client_id: "NSXpsF2vN1LAOBCgU0TAyqz7TOrCgJa5KyxnVZZJvwyzZpJgzr",
                        }),
                        { headers: { "content-type": "application/json", } },
                    );
                    const data = await response.data;
                    setContext({
                        token: data.access_token,
                        expire: data.expires_in + Math.floor(Date.now() / 1000),
                    });
                } else {

                    const NextResponse = await axios.get(
                        `https://api.petfinder.com/v2/animals/`,
                        {
                            headers: {
                                Authorization: "Bearer " + context.token,
                            },
                        }
                    );
                    const animalId = NextResponse.data.animals.id;
                    const nextData = NextResponse.data;
                    setData(nextData);
                    setLoading(false);
                    setId(animalId);
                    console.log(nextData)
                }

            } catch(err) {
                setError(err);
            }

    }
    getResponse();
    },
    [context]);
    
    return [data, error, loading];
}

export default useAxios;