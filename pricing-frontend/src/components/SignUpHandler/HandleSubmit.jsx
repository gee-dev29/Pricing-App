import { useNavigate } from "react-router-dom";

export const handleSignUpSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();

    if (!canSubmit) {
        return;
    }

    const formData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
    };

    fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            navigate("/login");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const handleLoginSubmit = (e) => {
    e.preventDefault();

    const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
    };

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            // Handle successful login (e.g., redirect to dashboard)
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const handleLogout = () => {
    // Implement logout logic here
};

export default {
    handleSignUpSubmit,
    handleLoginSubmit,
    handleLogout,
};
