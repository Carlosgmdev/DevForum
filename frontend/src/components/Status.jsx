import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Status = ({ topic, setTopic, user }) => {
    const [isPropietary, setIsPropietary] = useState(false);

    useEffect(() => {
        if (user) {
            setIsPropietary(user.id === topic.user?.id);
        }
    }, []);


    let token = null;

    if (user) {
        token = user.token;
    }

    const { id, solved } = topic;

    const handleChangeStatus = () => {
        if(isPropietary) {
            fetch(`http://localhost:8080/topics/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setTopic(data);
                    toast.success(`Status changed successfully!`, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    toast.error("Error changing status", {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
            .catch((error) => console.log(error));
        } else {
            toast.error("You can't change the status of this topic", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <div
            className={`text-white p-2 text-sm font-bold rounded-2xl cursor-pointer ${solved ? "bg-green-400" : "bg-red-400"
                }`}
            onDoubleClick={() => {
                handleChangeStatus();
            }}
        >
            {solved ? "✓ Solved" : "Pending"}
        </div>
    );
};

export default Status;
