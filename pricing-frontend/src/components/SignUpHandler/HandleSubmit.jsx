import { useNavigate } from "react-router-dom";

export const handleSignUpSubmit = (e, navigate, fieldValues, canSubmit) => {
    e.preventDefault();

    if (!canSubmit) {
        return;
    }

    const formData = {
        first_name: fieldValues.firstName,
        last_name: fieldValues.lastName,
        email: fieldValues.email,
        password: fieldValues.password,
    };

    fetch("http://localhost:6800/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => {
                    throw new Error(err.message || "Network response was not ok");
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            navigate("/login");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(`Sign up failed: ${error.message}`);
        });
};

export const handleLoginSubmit = (e, navigate, fieldValues) => {
    e.preventDefault();

    const formData = {
        email: fieldValues.email,
        password: fieldValues.password,
    };

    fetch("http://localhost:6800/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((err) => {
                    throw new Error(err.message || "Network response was not ok");
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            // navigate("/dashboard"); // Redirect to dashboard or home after login
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(`Login failed: ${error.message}`);
        });
};

export const handleSubmit = (e) => {
    try {

    } catch (error) {

    }
}
export const handleLogout = () => {
    // Implement logout logic here
};

export default {
    handleSignUpSubmit,
    handleLoginSubmit,
    handleLogout,
};
