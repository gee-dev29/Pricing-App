import { useState } from "react";

export default function UseFormFields(initialValues) {
    const [fieldValues, setFieldValues] = useState(initialValues);

    const handleChange = (field) => (e) => {
        setFieldValues((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    return {
        fieldValues,
        handleChange,
    };
}
