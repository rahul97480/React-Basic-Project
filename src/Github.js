
import React, {useState, useEffect} from 'react'


function Github() {
    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        //console.log(response);
        setUser(await response.json());
    }

    useEffect(() => {
        getUsers();
    },[])

    return (
        <div>
            <h1>List of Github Users</h1>
            
            <div className="container-fluid mt-5" style={{backgroundColor: "white"}}>
                <div className="row text-center">

                    {
                        user.map((item)=> {
                            return (
                                <>
                               

                    <div className="col-10 col-md-4 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                
                                <div class="ml-3 w-100">
                                    <h4 class="mb-0 mt-0 textleft">{item.login}</h4>
                                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div class="d-flex flex column"><span class="articles">{item.id}</span><span class="number1">40</span></div>
                                        <div class="d-flex flex column"><span class="followers"></span>{item.type}<span class="number2">80</span></div>
                                        <div class="d-flex flex column"><span class="rating">{item.site_admin}</span><span class="number3">100</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    </>
                            )

                        })
                    }
                </div>
            </div>
        </div>

        
    )
}

export default Github
